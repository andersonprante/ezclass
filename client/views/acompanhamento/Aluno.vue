<template>
<div>
  <div class="tile is-ancestor">

    <div class="tile is-parent is-7">
      <article class="tile is-child box">
        <div class="block">
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Atividade</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <!-- <select>
                  <option>Selecione...</option>
                </select> -->
                <seletor-classes></seletor-classes>
              </div>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Aluno</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <!-- <select>
                  <option>Selecione...</option>
                </select> -->
                <seletor-usuarios></seletor-usuarios>
              </div>
            </div>
          </div>

          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Grupo</label>
            </div>
            <p class="control">
              <input type="text" placeholder="Grupo 2" disabled="disabled" class="input" />
            </p>
          </div>

        </div>
        <div class="block">
          <h4 class="title">Desempenho do Aluno e seus colegas de grupo</h4>
          <div class="block">
            <chartist class="lines-bars" :type="'Bar'" :data="linesData" :options="linesOptions"></chartist>
          </div>
        </div>
      </article>
    </div>

    <div class="tile is-parent is-5">
      <article class="tile is-child box">
        <h4 class="title">Status atual das questões</h4>
        <div class="block">
          <span>Corrigidas</span>
          <progress-bar :type="'primary'" :size="'small'" :value="80" :max="100" :show-label="true"></progress-bar>
          <span>Acertos</span>
          <progress-bar :type="'sucess'" :size="'small'" :value="90" :max="100" :show-label="true"></progress-bar>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Questão</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Questão 1</td>
              <td>
                <a class="button is-success">
                  <span class="icon">
                    <i class="fa fa-check"></i>
                  </span>
                  <span>Correta</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>Questão 2</td>
              <td>
                <a class="button is-danger">
                  <span class="icon">
                    <i class="fa fa-times"></i>
                  </span>
                  <span>Errada</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>Questão 3</td>
              <td>
                <a class="button is-danger">
                  <span class="icon">
                    <i class="fa fa-times"></i>
                  </span>
                  <span>Errada</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>Questão 4</td>
              <td>
                <a class="button is-success">
                  <span class="icon">
                    <i class="fa fa-times"></i>
                  </span>
                  <span>Correta</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>Questão 5</td>
              <td>
                <a class="button is-success">
                  <span class="icon">
                    <i class="fa fa-times"></i>
                  </span>
                  <span>Correta</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>Questão 6</td>
              <td>
                <a class="button is-success">
                  <span class="icon">
                    <i class="fa fa-times"></i>
                  </span>
                  <span>Correta</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>Questão 7</td>
              <td>
                <a class="button is-danger">
                  <span class="icon">
                    <i class="fa fa-times"></i>
                  </span>
                  <span>Errada</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>Questão 8</td>
              <td>
                <a class="button is-warning" @click="openModalBasic">
                  <span class="icon">
                    <i class="fa fa-asterisk"></i>
                  </span>
                  <span>Corrigir</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>Questão 9</td>
              <td>
                <a class="button is-warning" @click="openModalBasic">
                  <span class="icon">
                    <i class="fa fa-asterisk"></i>
                  </span>
                  <span>Corrigir</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>Questão 10</td>
              <td>
                <a class="button is-danger">
                  <span class="icon">
                    <i class="fa fa-asterisk"></i>
                  </span>
                  <span>Errada</span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
  </div>
  <modal :visible="showModal" @close="closeModalBasic"></modal>
</div>
</template>

<script>
import ProgressBar from 'vue-bulma-progress-bar'
import Chartist from 'vue-bulma-chartist'
import Modal from '../components/modals/Modal'
import SeletorClasses from '../components/ezclass/SeletorClasses'
import SeletorUsuarios from '../components/ezclass/SeletorUsuarios'

export default {
  components: {
    ProgressBar,
    Chartist,
    Modal,
    SeletorClasses,
    SeletorUsuarios
  },
  data () {
    return {
      series: [
        [45, 25, 100, 45, 75, 82]
      ],
      labels: ['Eduardo', 'Adilson', 'Juan', 'Vitor', 'Média Grupo', 'Consenso'],
      high: 100,
      low: 0,
      distributeSeries: true,
      linesOptions: {
        fullWidth: true,
        chartPadding: {
          right: 40
        }
      },
      showModal: false
    }
  },
  computed: {
    linesData () {
      return {
        labels: this.labels,
        series: this.series
      }
    }
  },
  methods: {
    openModalBasic () {
      this.showModal = true
    },
    closeModalBasic () {
      this.showModal = false
    },
    openModalImage () {
      const imageModal = this.imageModal
      imageModal.$children[0].active()
    },
    openModalCard () {
      const cardModal = this.cardModal
      cardModal.$children[0].active()
    }
  }
}
</script>
<style lang="scss" scoped>
.progress-container {
  margin-bottom: 0px;
}
</style>
