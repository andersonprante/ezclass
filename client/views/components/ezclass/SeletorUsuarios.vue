<template>
    <select v-model="usuario_selecionado">
        <option v-for="op in users" :value="op.classroom">{{ op.name }}</option>
    </select>
</template>

<script>
import { firebase } from '../../../firebase'

export default {
  data () {
    return {
      usuario_selecionado: '',
      users: {}
    }
  },

  firebase
}
</script>
