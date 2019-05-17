import lazyLoading from './lazyLoading'

export default {
  meta: {
    label: 'Acompanhamentos',
    icon: 'fa-tachometer',
    expanded: true
  },

  children: [
    // {
    //   name: 'Acompanhamento geral da realização das atividades',
    //   path: '/resultado/chartist',
    //   meta: {
    //     label: 'Gráficos',
    //     link: 'resultado/Chartist.vue'
    //   },
    //   component: lazyLoading('resultado/Chartist')
    // },
    {
      name: 'Acompanhamento geral da realização das atividades',
      path: '/acompanhamento/grupos',
      meta: {
        label: 'Grupos',
        link: 'acompanhamento/Grupos.vue'
      },
      component: lazyLoading('acompanhamento/Grupos')
    },
    {
      name: 'Acompanhamento do aluno',
      path: '/acompanhamento/aluno',
      meta: {
        label: 'Aluno',
        link: 'acompanhamento/Aluno.vue'
      },
      component: lazyLoading('acompanhamento/Aluno')
    }
  ]
}
