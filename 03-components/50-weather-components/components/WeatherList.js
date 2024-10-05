import { defineComponent } from 'vue'
import WeatherCard from './WeatherCard.js'

export default defineComponent({
  name: 'WeatherList',

  components: {
    WeatherCard,
  },

  props: {
    list: {
      type: Array,
      required: true,
    },
  },

  template: `
    <ul class="weather-list">
      <WeatherCard v-for="card in list" :v-key="card.geographic_name" :data="card" />
    </ul>
  `,
})
