import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const operators = [
      {
        value: 'sum',
        label: '➕',
        callback: (a, b) => a + b,
      },
      {
        value: 'subtract',
        label: '➖',
        callback: (a, b) => a - b,
      },
      {
        value: 'multiply',
        label: '✖️',
        callback: (a, b) => a * b,
      },
      {
        value: 'divide',
        label: '➗',
        callback: (a, b) => a / b,
      },
    ]

    const leftOperator = ref(0)
    const rightOperator = ref(0)
    const operator = ref(operators[0].value)

    const __callbacks = operators.reduce((acc, { value, callback }) => {
      acc[value] = callback
      return acc
    }, {})

    const result = computed(() => {
      const a = leftOperator.value
      const b = rightOperator.value
      const calcCallback = __callbacks[operator.value]

      if (!calcCallback) {
        throw new Error(`Unsupported operator: ${operator.value}`)
      }

      return calcCallback(a, b)
    })

    return {
      operators,
      leftOperator,
      rightOperator,
      operator,
      result,
    }
  },

  template: `
    <div class="calculator">
      <input v-model="leftOperator" type="number" aria-label="First operand"/>

      <div class="calculator__operators">
        <label v-for="o in operators">
          <input v-model="operator" type="radio" name="operator"
                 :value="o.value"/>
          {{ o.label }}
        </label>
      </div>

      <input v-model="rightOperator" type="number" aria-label="Second operand"/>

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
