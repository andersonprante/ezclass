<template>
<div class="content has-text-centered">
  <h1 class="is-title is-bold">Login</h1>

  <div class="columns is-vcentered">
    <div class="column is-6 is-offset-3">
      <div class="box">
        <div v-show="error" style="color:red; word-wrap:break-word;">{{ error }}</div>
        <form v-on:submit.prevent="login">
          <label class="label">Email</label>
          <p class="control">
            <input v-model="data.body.username" class="input" type="text" placeholder="email@example.org">
          </p>
          <label class="label">Password</label>
          <p class="control">
            <input v-model="data.body.password" class="input" type="password" placeholder="password">
          </p>
          <hr>
          <p class="control">
            <button type="submit" class="button is-primary">Login</button>
            <button class="button is-default">Cancel</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { firebase } from '../../firebase'
import router from '../../router'
import store from '../../store'
// import { mapGetters } from 'vuex'

export default {

  data () {
    return {
      data: {
        body: {
          username: null,
          password: null
        }
      },
      error: null
    }
  },

  firebase,

  methods: {
    login () {
      this.error = 'Aguarde...'
      let formdata = this.data.body
      console.log('clicou em login', formdata)
      let stLogin = false
      this.$firebaseRefs.users.orderByChild('email').equalTo(formdata.username).on('child_added', function (snapshot) {
        let u = {
          key: snapshot.key,
          values: snapshot.val()
        }
        console.log(u)
        if (u.values.password === formdata.password && u.values.teacher) { // senha confere, posso continuar
          // console.debug('Professor logado:', u)
          delete u.values.password
          store.commit('setUser', u)
          formdata.username = ''
          formdata.password = ''
          stLogin = true
        }
      })
      setTimeout(() => {
        this.error = 'Tente novamente'
      }, 5000)

      if (stLogin) {
        // this.$firebaseRefs.teste.on('value', function (e) {
        //   console.log(e)
        // })
        router.push({path: 'Home'})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.is-title {
    text-transform: capitalize;
}
</style>
