import { defineComponent, createApp } from 'vue/dist/vue.esm-bundler'

const DateComponent = defineComponent({
  name: 'DateComponent',
  setup() {
    const currentDate = new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' })

    return {
      currentDate,
    }
  },

  template: '<div>Сегодня {{ currentDate }}</div>',
})

const App = createApp(DateComponent)
App.mount('#app')
