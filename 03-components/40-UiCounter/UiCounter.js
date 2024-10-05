import { defineComponent } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
    },

    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: Infinity,
    },
  },

  emits: ['update:count'],

  setup(props, { emit }) {
    const increment = () => {
      emit('update:count', props.count + 1)
    }

    const decrement = () => {
      emit('update:count', props.count - 1)
    }

    return {
      increment,
      decrement,
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" @click="decrement" :disabled="count <= min">➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton aria-label="Increment" @click="increment" :disabled="count >= max">➕</UiButton>
    </div>
  `,
})
