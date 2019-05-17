<template>
  <section class="hero is-bold app-navbar animated" :class="{ slideInDown: show, slideOutDown: !show }">
    <div class="hero-head">
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item is-hidden-tablet" @click="toggleSidebar({opened: !sidebar.opened})">
            <i class="fa fa-bars" aria-hidden="true" v-show="!sidebar.hidden"></i>
          </a>
        </div>
        <div class="nav-center">
          <a class="nav-item hero-brand" href="/">
            <img src="~assets/logo.svg" :alt="pkginfo.description">
            <!-- <tooltip :label="'v' + pkginfo.version" placement="right" type="success" size="small" :no-animate="true" :always="true" :rounded="true"> -->
              <div class="is-hidden-mobile">
                <span class="vue">Ez</span><strong class="admin">Class</strong>
              </div>
            <!-- </tooltip> -->
          </a>
        </div>
        <div class="nav-right is-flex">
          <router-link v-if="this.$store.state.ez.user == null" to="/login" class="nav-item">Acessar</router-link>
          <a v-if="this.$store.state.ez.user != null" @click="logout" class="nav-item">Sair</a>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import Tooltip from 'vue-bulma-tooltip'
import { mapGetters, mapActions } from 'vuex'
import router from '../../router'
import { firebase } from '../../firebase'
// import router from '../../router'
// import store from '../../store'
// import store from '../../store'
// import { tables } from '../../firebase'

export default {

  components: {
    Tooltip
  },

  props: {
    show: Boolean
  },

  computed: mapGetters({
    pkginfo: 'pkg',
    sidebar: 'sidebar'
  }),

  mounted () {
    // console.debug(this.$store)
  },

  firebase,

  methods: {
    ...mapActions([
      'toggleSidebar'
    ]),
    logout () {
      // para de escutar todas as tabelas do firebase
      for (let table in this.$firebaseRefs) {
        this.$firebaseRefs[table].off()
      }
      this.$store.commit('setUser', null)
      // this.$store.commit('setUser', null)
      // for (let t in tables) {
      //   // console.log('Desativando listener de: ', t)
      //   this.$store.commit('fb', {table: tables[t].name, data: null})
      //   tables[t].ref.off()
      // }
      router.push({path: 'Login'})
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';

.app-navbar {
  position: fixed;
  min-width: 100%;
  z-index: 1024;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);

  .container {
    margin: auto 10px;
  }

  .nav-right {
    align-items: stretch;
    align-items: stretch;
    flex: 1;
    justify-content: flex-end;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }
}

.hero-brand {
  .vue {
    margin-left: 10px;
    color: #36AC70;
  }
  .admin {
    color: #28374B;
  }
}
</style>
