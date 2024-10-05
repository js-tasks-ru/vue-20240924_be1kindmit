import { defineComponent, ref, onUnmounted } from 'vue'

function getCurrentTime() {
  return new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' })
}

const ONE_SECOND = 1_000

export default defineComponent({
  name: 'UiClock',

  setup() {
    const time = ref(getCurrentTime())

    const interval = setInterval(() => {
      time.value = getCurrentTime()
    }, ONE_SECOND)

    onUnmounted(() => {
      clearInterval(interval)
    })

    return {
      time,
    }
  },

  template: `
    <time class="clock">{{ time }}</time>`,
})
