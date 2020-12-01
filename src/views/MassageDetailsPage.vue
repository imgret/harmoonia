<template>
  <div class="min-vh-100 d-flex flex-column">
    <nav-header></nav-header>
    <main class="d-flex flex-column flex-fill">
      <div class="container-fluid p-0 pt-3 pb-2 flex-fill section">
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
        <p class="mb-0 py-3 text-center font-weight-bold d-sm-none section__header section__header--light-bg
                section__header--border-y">
          {{this.$store.state.massageName}}
        </p>
        <div class="row mx-3 mx-sm-5 mt-3">
          <div class="col-sm p-sm-0 mb-3 mb-sm-0">
            <img class="img-fluid" v-bind:src="massageImageSrc" alt="Massaaži pilt">
          </div>
          <div class="col-sm pr-sm-0 text-justify">
            <h5 class="mb-2 d-none d-sm-block">
              {{this.$store.state.massageName}}
            </h5>
            <p class="mb-2">
              {{massageDescription}}
            </p>
            <p class="font-weight-bold text-center mb-2">
              Hind: {{massagePrice}} €
            </p>
            <button class="btn button rounded-0 d-block mx-auto mb-2" v-on:click="goToBookingTimePage">
              Broneeri massaaž
            </button>
          </div>
        </div>
      </div>
    </main>
    <corp-footer></corp-footer>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import CorpFooter from '../components/CoprFooter'
import VueConfig from '../../vue.config'
export default {
  components: { NavHeader, CorpFooter },
  data () {
    return {
      massagesJson: null
    }
  },
  computed: {
    massage: function () {
      let massageType = this.$store.state.massageType
      let massageName = this.$store.state.massageName
      let dummyMassage = {
        description: 'Occurred some error during massage data fetching',
        image: 'massaaz.jpg',
        price: '0'
      }
      if (this.massagesJson == null) {
        return dummyMassage
      } else {
        return this.massagesJson[massageType].find((massage) => massage.name === massageName)
      }
    },
    massageDescription: function () {
      return this.massage.description
    },
    massageImage: function () {
      return this.massage.image
    },
    massageImageSrc: function () {
      return require('../assets/images/' + this.massageImage)
    },
    massagePrice: function () {
      return this.massage.price
    }
  },
  methods: {
    goToBookingTimePage: function () {
      this.$router.push('/booking_time')
    },
    fetchMassagesJson: function () {
      let url = VueConfig.publicPath + 'json/massages.json'
      fetch(url)
        .then((response) => response.json())
        .then((datesJson) => {
          this.massagesJson = datesJson
        })
    }
  },
  created () {
    this.fetchMassagesJson()
  }
}
</script>
