<template>
  <div>
    <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="control">
              <span class="select">
                <!-- <select>
                  <option>Selecione a atividade que deseja visualizar...</option>
                </select> -->
                <seletor-classes @seletorAlterado="visibilidade = $event"></seletor-classes>
              </span>
            </p>
          </article>
        </div>
      </div>


    <div class="tile is-ancestor" v-show="visibilidade">


      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h4>Respostas dos ALUNOS em percentual</h4>
          <div class="content">
            <div class="columns">
              <div class="column">
                <chartist class="lines-bars" :type="'Pie'" :data="pieData_students" :options="pieOptions"></chartist>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h4>Respostas dos GRUPOS em percentual</h4>
          <div class="content">
            <div class="columns">
              <div class="column">
                <chartist class="lines-bars" :type="'Pie'" :data="pieData_groups" :options="pieOptions"></chartist>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Chartist from 'vue-bulma-chartist'
import SeletorClasses from '../components/ezclass/SeletorClasses'

export default {
  components: {
    Chartist,
    SeletorClasses
  },

  data () {
    return {
      visibilidade: true,
      pieData_students: {
        series: [63, 37],
        labels: ['Acima da média', 'Abaixo da média']
      },
      pieData_groups: {
        series: [84, 26],
        labels: ['Acima da média', 'Abaixo da média']
      },
      pieOptions: {
        chartPadding: 30,
        labelOffset: 60,
        labelDirection: 'explode',
        labelInterpolationFnc (value) {
          return value
        }
      }
    }
  },

  computed: {
    // linesData () {
    //   return {
    //     labels: this.labels,
    //     series: this.series
    //   }
    // }
  },

  created () {
    // setInterval(() => {
    //   // https://vuejs.org/guide/list.html#Mutation-Methods
    //   this.series.unshift(this.series.pop())
    // }, 1597)
  }
}
</script>

<style scoped>
.lines-bars {
  height: 240px;
}
.select {
  width: 100%;
}
select {
  width: 100%;
}
h4 {
  font-weight: 1.1rem;
}
</style>
