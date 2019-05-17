<template>
  <div>
    <span class="select">
      <select v-model="classe_selecionada">
        <option v-for="c in classes" :value="c.code">{{ c.name }}</option>
      </select>
    </span>
    <!-- <div>{{ classes }}</div> -->
  </div>
</template>

<script>
import { firebase } from '../../../firebase'

export default {
  data () {
    return {
      classe_selecionada: ''
    }
  },

  watch: {
    classe_selecionada: function (val) {
      console.log('SeletorClasses diz: alterou a turma ->', this.classe_selecionada)
      this.$emit('seletorAlterado', this.classe_selecionada)
    }
  },

  firebase
}
</script>

<style lang="scss" scoped>
.select {
  width: 100%;
}
select {
  width: 100%;
}
</style>
