import { defineComponent } from 'vue'
import WeatherAlert from './WeatherAlert'
import WeatherDetailsItem from './WeatherDetailsItem'
import { WeatherConditionIcons } from '../weather.service'

export default defineComponent({
  name: 'WeatherCard',

  components: {
    WeatherAlert,
    WeatherDetailsItem,
  },

  props: {
    data: {
      type: Object,
    },
  },

  setup() {
    function kelvinToCelsius(kelvin) {
      return kelvin - 273.15
    }

    function hPaToMmHg(hPa) {
      return hPa * 0.75
    }

    function getWeatherConditionIcon(weatherConditionId) {
      return WeatherConditionIcons[weatherConditionId]
    }

    function isNight(currentTime, sunriseTime, sunsetTime) {
      return currentTime < sunriseTime || currentTime > sunsetTime
    }

    return {
      kelvinToCelsius,
      hPaToMmHg,
      getWeatherConditionIcon,
      isNight,
    }
  },

  template: `
    <li class="weather-card"
        :class="{'weather-card--night': isNight(data.current.dt, data.current.sunrise, data.current.sunset)}">
      <WeatherAlert icon="⚠️" v-if="data.alert">
        <span class="weather-alert__description">{{ data.alert.sender_name }}: {{ data.alert.description }}</span>
      </WeatherAlert>

      <div>
        <h2 class="weather-card__name">
          {{ data.geographic_name }}
        </h2>
        <div class="weather-card__time">
          {{ data.current.dt }}
        </div>
      </div>

      <div class="weather-conditions">
        <div class="weather-conditions__icon" :title="data.current.weather.description">
          {{ getWeatherConditionIcon(data.current.weather.id) }}️
        </div>
        <div class="weather-conditions__temp">{{ kelvinToCelsius(data.current.temp).toFixed(1) }} °C</div>
      </div>

      <div class="weather-details">
        <WeatherDetailsItem :value="hPaToMmHg(data.current.pressure).toFixed(0)" label="Давление, мм рт. ст."/>
        <WeatherDetailsItem :value="data.current.humidity" label="Влажность, %"/>
        <WeatherDetailsItem :value="data.current.clouds" label="Облачность, %"/>
        <WeatherDetailsItem :value="data.current.wind_speed" label="Ветер, м/с"/>
      </div>
    </li>
  `,
})
