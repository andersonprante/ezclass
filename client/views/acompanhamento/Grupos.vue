<template>
<div>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="control">
          <seletor-classes  v-on:seletorAlterado="updateCards($event)"></seletor-classes>
        </p>
      </article>
    </div>
  </div>

  <div class="tile is-ancestor">

    <div class="tile is-parent" v-for="g in grupos">
      <article class="tile is-child box">
        <h1 class="title">{{ g.name }}</h1>
        <h2 class="sub">Questões realizadas pelos alunos</h2>
        <div class="block">
          <div v-for="a in getAlunosByGroup(g.code)">
            <span>{{ a.name }}</span>
            <progress-bar :type="'primary'" :size="'small'" :value="(contadorRespostasPorAluno[a.email].length * 100) / totalActivities" :max="100" :show-label="true"></progress-bar>
          </div>
        </div>
        <h2 class="sub">Estatística do Grupo</h2>
        <span>Questões realizadas</span>
        <progress-bar :type="'primary'" :size="'small'" :value="99" :max="100" :show-label="true"></progress-bar>
        <!-- <progress-bar :type="'primary'" :size="'small'" :value="questoesRealizadasGrupo" :max="100" :show-label="true"></progress-bar> -->
        <span>Índice de acertos</span>
        TODO
        <!-- <progress-bar :type="'danger'" :size="'small'" :value="15" :max="100" :show-label="true"></progress-bar> -->
      </article>
    </div>

    <!-- <div class="tile is-parent is-3">
      <article class="tile is-child box">
        <h1 class="title">Grupo XX</h1>
        <h2 class="sub">Questões realizadas pelos alunos</h2>
        <div class="block">
          <span>Aluno X</span>
          <progress-bar :type="'primary'" :size="'small'" :value="80" :max="100" :show-label="true"></progress-bar>
          <span>Aluno X</span>
          <progress-bar :type="'primary'" :size="'small'" :value="30" :max="100" :show-label="true"></progress-bar>
          <span>Aluno X</span>
          <progress-bar :type="'primary'" :size="'small'" :value="50" :max="100" :show-label="true"></progress-bar>
        </div>
        <h2 class="sub">Estatística do Grupo</h2>
        <span>Questões realizadas</span>
        <progress-bar :type="'primary'" :size="'small'" :value="15" :max="100" :show-label="true"></progress-bar>
        <span>Índice de acertos</span>
        <progress-bar :type="'danger'" :size="'small'" :value="15" :max="100" :show-label="true"></progress-bar>
      </article>
    </div> -->
  </div>
  <div class="teste">
    {{ alunos }}
    {{ totalActivities }}
  </div>
</div>
</template>

<script>
import { firebase } from '../../firebase'
import ProgressBar from 'vue-bulma-progress-bar'
import SeletorClasses from '../components/ezclass/SeletorClasses'

export default {

  data () {
    return {
      classe_selecionada: '',
      grupos: {},
      alunos: '',
      totalActivities: 0,
      respostasIndividuais: '',
      contadorRespostasPorAluno: {}
    }
  },
  components: {
    ProgressBar,
    SeletorClasses
  },

  // computed: {
  //   questoesRealizadasGrupo: function () {
  //     let total = 0
  //     let totalAlunos = 0
  //     for(let i in contadorRespostasPorAluno) {
  //       totalAlunos += 1
  //       total += contadorRespostasPorAluno[i].length
  //     }
  //     console.log(`${total} - > ${totalAlunos}`)
  //     return 50
  //   }
  // },

  firebase,

  methods: {
    // executado quando é alterado a classe
    updateCards: function (e) {
      this.classe_selecionada = e
      let _self = this
      console.log('updateCards diz: alterou classe_selecionada para ->', this.classe_selecionada)
      this.$firebaseRefs.groups.orderByChild('classroom').equalTo(this.classe_selecionada).on('value', function (snap) {
        _self.grupos = snap.val()
      })
      this.$firebaseRefs.users.orderByChild('classroom').equalTo(this.classe_selecionada).on('value', function (snap) {
        _self.alunos = snap.val()
      })
      this.$firebaseRefs.activities.orderByChild('classroom').equalTo(this.classe_selecionada).on('value', function (snap) {
        let data = snap.val()
        if (data === null) {
          _self.totalActivities = 0
        } else {
          _self.totalActivities = Object.keys(data).length
        }
      })
      this.$firebaseRefs.individualResponse.orderByChild('classroom').equalTo(this.classe_selecionada).on('value', function (snap) {
        _self.respostasIndividuais = snap.val()
        for (let r in _self.respostasIndividuais) {
          let rr = _self.respostasIndividuais[r]
          let ca = _self.contadorRespostasPorAluno
          if (ca[rr.email] == null) {
            ca[rr.email] = []
          }
          if (!ca[rr.email].includes(rr.code)) {
            ca[rr.email].push(rr.code)
          }
        }
      })
    },

    getTotalResponseByAluno: function (aluno) {

    },

    getAlunosByGroup: function (group) {
      let ret = {}
      let data = this.alunos
      for (let k in data) {
        if (data[k].groupID === group) {
          ret[k] = data[k]
        }
      }
      return ret
    }
  }
}
</script>

<style lang="scss" scoped>
.progress-container {
  margin-bottom: 0px;
}
.title {
  margin-bottom: 0;
}
.sub {
  font-style: oblique;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
.control {
  width: 100%;
}

</style>
