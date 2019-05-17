<template>
  <div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Lista de atividades</h1>
          <div class="block is-flex">
            <collapse accordion>
              <collapse-item v-for="a in activities" :title="a.name">
                <div class="block" v-for="(i, idx) in a" v-if="idx !== '.key'">
                  <div class="control">
                    <label class="label">{{ idx }}</label>
                    <div v-if="idx !== 'algorithm'" contentEditable="true" v-on:keyup.esc="updateActivitieItem(a, idx, $event.target.innerText, $event)">{{ i }}</div>
                    <textarea v-else class="textarea" v-on:keyup.esc="updateActivitieItem(a, idx, $event.target.value, $event)">{{ i }}</textarea>
                  </div>
                </div>
              </collapse-item>
            </collapse>
          </div>
        </article>
      </div>
    </div>

  </div>
</template>

<script>
// import ProgressBar from 'vue-bulma-progress-bar'
// import SeletorClasses from '../components/ezclass/SeletorClasses'
import { firebase } from '../../firebase'
import { Collapse, Item as CollapseItem } from 'vue-bulma-collapse'

// import Brace from 'vue-bulma-brace'

export default {

  data () {
    return {
      activities: {}
      // classe_selecionada: '',
      // visibilidade: true
    }
  },
  firebase,

  components: {
    Collapse,
    CollapseItem
    // Brace
    // ProgressBar,
    // SeletorClasses
  },

  created () {
    for (let a in this.activities) {
      let item = this.activities[a]
      let key = item['.key']
      if (!(Object.keys(item).includes('answer'))) {
        this.$firebaseRefs.activities.child(key).child('answer').set('')
      }
    }
  },

  methods: {
    updateActivitieItem: function (activitie, item, newValue, e) {
      this.$firebaseRefs.activities.child(activitie['.key']).child(item).set(newValue)
      e.target.blur()
    }
  }
}
</script>

<style lang="scss">
</style>
