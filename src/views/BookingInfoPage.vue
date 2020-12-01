<template>
  <div class="min-vh-100 d-flex flex-column">
    <nav-header></nav-header>
    <main class="d-flex flex-column flex-fill">
      <div class="container-fluid p-0 pt-3 pb-3 flex-fill px-4 px-sm-5 section">
        <p class="mb-0 py-1 text-left d-none d-sm-block section__header section__header--light-bg
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
          <i class="fas fa-angle-double-right px-2 icon"></i>
          <router-link class="text-reset text-decoration-none"
                       to="booking_time">
            Aja valimine
          </router-link>
        </p>
        <p class="mb-0 py-1 text-center d-sm-none section__header section__header--light-bg
                section__header--border-y">
          Olete valinud
          <span class="font-weight-bold">{{this.$store.state.massageName}}</span><br>
          kell
          <span class="font-weight-bold">{{massageTime}}</span>
        </p>
        <p class="d-none d-sm-block text-center mt-4 section__header">
          Olete valinud
          <span class="font-weight-bold">{{this.$store.state.massageName}}</span>
          kell
          <span class="font-weight-bold">{{massageTime}}</span>
        </p>
        <div class="mt-3 text-center text-md-left">
          <form class="booking-info-form needs-validation"
                @submit="onFormSubmit"
                method="post"
                novalidate>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="inputName">Nimi</label>
                <input type="text" class="form-control custom-select-sm" id="inputName"
                       pattern="([A-ZΆ-ΫÀ-ÖØ-Þ][A-ZΆ-ΫÀ-ÖØ-Þa-zά-ώß-öø-ÿ]{1,19} ?){1,10}"
                       v-model="name" required>
                <div class="invalid-feedback">
                  Palun sisestage täisnimi
                </div>
              </div>
              <div class="form-group col-md-4">
                <label for="inputTelephone">Telefoninumber</label>
                <input type="tel" class="form-control custom-select-sm" id="inputTelephone"
                       pattern="[3-9]{1}[0-9]{6,7}"
                       v-model="phone" required>
                <div class="invalid-feedback">
                  Palun sisestage korrektne telefoninumber
                </div>
              </div>
              <div class="form-group col-md-4">
                <label for="inputEmail">E-post</label>
                <input type="email" class="form-control custom-select-sm" id="inputEmail"
                       pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}"
                       v-model="email" required>
                <div class="invalid-feedback">
                  Palun sisestage korrektne e-post
                </div>
              </div>
            </div>
            <div class="form-group pb-3 booking-info-form__textarea">
              <label for="inputComment">Märkused</label>
              <textarea class="form-control" id="inputComment" rows="4" v-model="notes"></textarea>
            </div>
            <div class="form-row justify-content-between mx-0">
              <router-link class="col flex-grow-0 btn rounded-0 px-5 d-block button button--small"
                      to="/booking_time">
                Tagasi
              </router-link>
              <button class="col btn flex-grow-0 rounded-0 px-5 d-block button button--small"
                      type="submit">
                Kinnita
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
    <corp-footer></corp-footer>
  </div>
</template>

<script>

import NavHeader from '../components/NavHeader'
import CorpFooter from '../components/CoprFooter'
export default {
  components: { NavHeader, CorpFooter },
  data () {
    return {
      name: null,
      phone: null,
      email: null,
      notes: ''
    }
  },
  computed: {
    massageTime: function () {
      let hours = this.$store.state.massageDate.getHours().toString()
      let minutes = this.$store.state.massageDate.getMinutes().toString()
      hours = hours.length === 1 ? '0' + hours : hours
      minutes = minutes.length === 1 ? '0' + minutes : minutes
      return `${hours}:${minutes}`
    }
  },
  methods: {
    goToBookingTimePage: function () {
      this.$router.push('/booking_time')
    },
    checkForm: function (event) {
      let isValid = true
      let forms = document.getElementsByClassName('needs-validation')
      Array.prototype.filter.call(forms, function (form) {
        if (form.checkValidity() === false) {
          isValid = false
        }
        event.preventDefault()
        event.stopPropagation()
        form.classList.add('was-validated')
      })
      return isValid
    },
    onFormSubmit: function (event) {
      let isValid = this.checkForm(event)
      if (isValid) {
        console.log({
          'name': this.name,
          'phone': this.phone,
          'email': this.email,
          'notes': this.notes
        })
        this.$store.state.clientName = this.name
        this.$store.state.clientPhone = this.phone
        this.$store.state.clientEmail = this.email
        this.$store.state.clientNotes = this.notes
        this.$router.push('/thank_page')
      }
    }
  }
}
</script>
