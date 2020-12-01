<template>
  <div class="col-sm p-0 mt-2 mt-sm-0 ml-sm-3 flex-grow-0 flex-nowrap d-flex flex-column booking-time-form">
    <p class="font-weight-bold py-1 px-5 mb-2 text-nowrap text-center booking-time-form__header">
      {{translatedDateString}}
    </p>
    <form class="flex-fill d-flex flex-column justify-content-between">
      <fieldset class="form-group d-block mb-0">
        <div class="form-check py-1 pl-2 mb-2 justify-content-center text-center booking-time-form__radio"
             v-for="(time, index) in currentDateFreeTimes"
             v-bind:key="index">
          <input class="form-check-input" type="radio" name="time"
                 :id="'time' + index" :value="time" v-model="selectedTime"
                 @change="$emit('time-select', selectedTime)">
          <label class="form-check-label" :for="'time' + index">
            {{time}}
          </label>
        </div>
      </fieldset>
    </form>
    <button class="btn rounded-0 px-4 d-block button button--small button--width-auto"
            v-on:click="$emit('time-confirm')">
      Kinnita aeg
    </button>
  </div>
</template>

<script>
import VueConfig from '../../vue.config'
export default {
  name: 'BookingTimeForm',
  props: {
    resetTimeRadioButtons: Boolean
  },
  data () {
    return {
      translationToEstonian: {
        'Mon': 'E',
        'Tue': 'T',
        'Wed': 'K',
        'Thu': 'N',
        'Fri': 'R',
        'Sat': 'L',
        'Sun': 'P',
        'Jan': 'Jaan',
        'Feb': 'Veebr',
        'Mar': 'Märts',
        'Apr': 'Apr',
        'May': 'Mai',
        'Jun': 'Juuni',
        'Jul': 'Juuli',
        'Aug': 'Aug',
        'Sep': 'Sept',
        'Oct': 'Okt',
        'Nov': 'Nov',
        'Dec': 'Dets'
      },
      datesJson: null,
      selectedTime: null
    }
  },
  computed: {
    dateString: function () {
      return this.$store.state.massageDate.toDateString()
    },
    translatedDateString: function () {
      let dateElements = this.dateString.split(' ')
      let dayOfWeek = this.translationToEstonian[dateElements[0]]
      let month = this.translationToEstonian[dateElements[1]]
      let day = dateElements[2]
      return `${dayOfWeek}, ${month} ${day}`
    },
    currentDateFreeTimes: function () {
      let year = this.$store.state.massageDate.getFullYear()
      let month = this.$store.state.massageDate.getMonth()
      let day = this.$store.state.massageDate.getDate()
      if (this.datesJson == null) {
        return []
      } else {
        return this.datesJson[year][month][day - 1]
      }
    }
  },
  methods: {
    fetchDatesJson: function () {
      let url = VueConfig.publicPath + 'json/dates.json'
      fetch(url)
        .then((response) => response.json())
        .then((datesJson) => {
          this.datesJson = datesJson
        })
    }
  },
  watch: {
    resetTimeRadioButtons: function (timeReset) {
      this.selectedTime = null
    }
  },
  created () {
    this.fetchDatesJson()
  }
}
</script>

<style scoped>

</style>
