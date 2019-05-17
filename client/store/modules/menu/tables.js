import lazyLoading from './lazyLoading'

export default {
  name: 'Resultados das atividades',
  meta: {
    icon: 'fa-bar-chart-o',
    expanded: true
  },

  children: [
    {
      name: 'Acompanhamento geral da realização das atividades',
      path: '/resultado/graficos',
      meta: {
        label: 'Gráficos',
        link: 'resultado/Graficos.vue'
      },
      component: lazyLoading('resultado/Graficos')
    },
    {
      name: 'Ranking de Questões',
      path: '/resultado/ranking',
      meta: {
        label: 'Ranking',
        link: 'resultado/Ranking.vue'
      },
      component: lazyLoading('resultado/Ranking')
    }
  ]
}
