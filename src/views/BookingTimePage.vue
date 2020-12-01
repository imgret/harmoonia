<template>
    <div class="min-vh-100 d-flex flex-column">
        <nav-header></nav-header>
        <main class="d-flex flex-column flex-fill">
            <div class="container-fluid p-0 pt-3 pb-3 flex-fill section">
                <p class="mb-0 py-1 mx-5 text-left d-none d-sm-block section__header section__header--light-bg
                section__header--border-b">
                    <router-link class="text-reset text-decoration-none"
                                 to="/">
                        Teenused
                    </router-link>
                    <i class="fas fa-angle-double-right px-2 icon"></i>
                    <router-link class="text-reset text-decoration-none"
                                 to="/massages_list">
                        {{this.$store.state.massageType}}
                    </router-link>
                    <i class="fas fa-angle-double-right px-2 icon"></i>
                    <router-link class="text-reset text-decoration-none"
                                 to="/massage_details">
                        {{this.$store.state.massageName}}
                    </router-link>
                </p>
                <p class="mb-0 mx-4 py-1 text-center d-sm-none section__header section__header--light-bg
                section__header--border-y">
                    <span class="d-block font-weight-normal">Allpool leiate loendist saadaolevad ajapilud</span>
                    <span class="d-block font-weight-bold">{{this.$store.state.massageName}}</span>
                </p>
                <p class="container-fluid d-none d-sm-block text-center mt-4">
                    Allpool leiate loendist saadaolevad ajapilud maassaaži jaoks:
                    <span class="font-weight-bold">{{this.$store.state.massageName}}</span>
                </p>
                <div class="mx-4 mt-3 row justify-content-center">
                    <div class="col-sm p-0 flex-grow-0">
                        <datepicker class="calendar d-flex justify-content-center"
                                    :inline="true"
                                    :language="ee"
                                    :disabled-dates="disabledDates"
                                    :monday-first="mondayFirst"
                                    :value="currentDate"
                                    @selected="onDateSelect">
                        </datepicker>
                    </div>
                    <booking-time-form v-on:time-select="onTimeSelect"
                                       v-on:time-confirm="goToBookingInfoPage"
                                       :reset-time-radio-buttons="resetTime">
                    </booking-time-form>
                </div>
                <div class="alert alert-danger mx-5 mt-3" role="alert" v-if="showAlert">
                    {{alertMessage}}
                </div>
            </div>
        </main>
        <corp-footer></corp-footer>
    </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import CorpFooter from '../components/CoprFooter'
import BookingTimeForm from '../components/BookingTimeForm'
import Datepicker from 'vuejs-datepicker'
import { ee } from 'vuejs-datepicker/dist/locale'
export default {
  components: { NavHeader, CorpFooter, Datepicker, BookingTimeForm },
  data () {
    return {
      ee: ee,
      disabledDates: {
        to: new Date(2019, 4, 1),
        from: new Date(2019, 4, 31),
        days: [6, 0],
        dates: [
          new Date(2019, 4, 1),
          new Date(2019, 4, 2),
          new Date(2019, 4, 3),
          new Date(2019, 4, 6),
          new Date(2019, 4, 7),
          new Date(2019, 4, 10),
          new Date(2019, 4, 17)
        ],
        ranges: [
          {
            from: new Date(2019, 4, 16),
            to: new Date(2019, 5, 1)
          }
        ]
      },
      mondayFirst: true,
      currentDate: Date.now(),
      resetTime: false,
      showAlert: false,
      alertMessage: ''
    }
  },
  methods: {
    onDateSelect: function (selectedDate) {
      this.$store.state.massageDate = selectedDate
      this.$store.state.massageDate.setFullYear(selectedDate.getFullYear())
      this.$store.state.massageDate.setMonth(selectedDate.getMonth())
      this.$store.state.massageDate.setDate(selectedDate.getDate())
      this.$store.state.massageDate.setHours(0)
      this.$store.state.massageDate.setMinutes(0)
      this.resetTime = !this.resetTime
    },
    onTimeSelect: function (time) {
      time = time.split(':')
      this.$store.state.massageDate.setHours(time[0])
      this.$store.state.massageDate.setMinutes(time[1])
      this.showAlert = false
    },
    goToBookingInfoPage: function () {
      let time = `${this.$store.state.massageDate.getHours()}:${this.$store.state.massageDate.getMinutes()}`
      if (time !== '0:0') {
        this.$router.push('/booking_info')
      } else {
        this.showAlert = true
        this.alertMessage = 'Palun valige endale sobiv aeg kalendris olevatest vabadest aegadest'
      }
    }
  },
  created () {
    this.$store.state.massageDate.setHours(0)
    this.$store.state.massageDate.setMinutes(0)
  }
}
</script>
