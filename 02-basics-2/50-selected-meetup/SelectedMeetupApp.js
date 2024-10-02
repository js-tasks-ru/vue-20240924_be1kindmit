import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const selectedMeetup = ref(1)
    const prevDisabled = computed(() => selectedMeetup.value <= 1)
    const nextDisabled = computed(() => selectedMeetup.value >= 5)

    const meetup = ref(null)

    const fetchMeetup = async () => {
      meetup.value = await getMeetup(selectedMeetup.value)
    }

    onMounted(async () => {
      await fetchMeetup()
    })

    watch(selectedMeetup, async () => {
      await fetchMeetup()
    })

    return {
      selectedMeetup,
      prevDisabled,
      nextDisabled,
      meetup,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button class="button button--secondary" type="button" :disabled="prevDisabled"
                @click="selectedMeetup--">Предыдущий
        </button>

        <div class="radio-group" role="radiogroup">
          <div class="radio-group__button">
            <input
              v-model.number="selectedMeetup"
              id="meetup-id-1"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="1"
            />
            <label for="meetup-id-1" class="radio-group__label">1</label>
          </div>
          <div class="radio-group__button">
            <input
              v-model.number="selectedMeetup"
              id="meetup-id-2"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="2"
            />
            <label for="meetup-id-2" class="radio-group__label">2</label>
          </div>
          <div class="radio-group__button">
            <input
              v-model.number="selectedMeetup"
              id="meetup-id-3"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="3"
            />
            <label for="meetup-id-3" class="radio-group__label">3</label>
          </div>
          <div class="radio-group__button">
            <input
              v-model.number="selectedMeetup"
              id="meetup-id-4"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="4"
            />
            <label for="meetup-id-4" class="radio-group__label">4</label>
          </div>
          <div class="radio-group__button">
            <input
              v-model.number="selectedMeetup"
              id="meetup-id-5"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="5"
            />
            <label for="meetup-id-5" class="radio-group__label">5</label>
          </div>
        </div>

        <button class="button button--secondary" type="button" :disabled="nextDisabled"
                @click="selectedMeetup++">Следующий
        </button>
      </div>

      <div class="meetup-selector__cover" v-if="meetup">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetup.title }}</h1>
        </div>
      </div>
    </div>
  `,
})
