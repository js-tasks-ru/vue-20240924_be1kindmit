import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherAlert',

  props: {
    icon: {
      type: String,
    },

    description: {
      type: String,
    },
  },

  template: `
    <div class="weather-alert">
      <span class="weather-alert__icon">
        <slot name="alert__icon">
          {{ icon }}
        </slot>
      </span>
      <span class="weather-alert__description">
        <slot>
          {{ description }}
        </slot>
      </span>
    </div>
  `,
})
