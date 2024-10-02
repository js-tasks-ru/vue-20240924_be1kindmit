import { defineComponent, ref, computed } from 'vue'

const CounterApp = defineComponent({
  name: 'CounterApp',

  setup() {
    const counter = ref(0)

    const increment = () => {
      counter.value = counter.value + 1
    }

    const decrement = () => {
      counter.value = counter.value - 1
    }

    const incrementButtonDisabled = computed(() => counter.value >= 5)

    const decrementButtonDisabled = computed(() => counter.value <= 0)

    return {
      counter,
      incrementButtonDisabled,
      decrementButtonDisabled,
      increment,
      decrement,
    }
  },

  template: `
    <div class="counter">
      <button
        @click="decrement"
        :disabled="decrementButtonDisabled"
        :aria-disabled="decrementButtonDisabled"
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
      >➖
      </button>

      <span class="count" data-testid="count">{{ counter }}</span>

      <button
        @click="increment"
        :disabled="incrementButtonDisabled"
        :aria-disabled="incrementButtonDisabled"
        class="button button--secondary"
        type="button"
        aria-label="Increment"
      >➕
      </button>
    </div>
  `,
})

export default CounterApp
