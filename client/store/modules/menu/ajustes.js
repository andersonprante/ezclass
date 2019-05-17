import lazyLoading from './lazyLoading'

export default {
  meta: {
    label: 'Ajustes',
    icon: 'fa-cogs',
    expanded: true
  },

  children: [
    {
      name: 'Cadastrar resposta das questões',
      path: '/ajustes/questoes',
      meta: {
        label: 'Respostas',
        link: 'ajustes/Questoes.vue'
      },
      component: lazyLoading('ajustes/Questoes')
    }
  ]
}
