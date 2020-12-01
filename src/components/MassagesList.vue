<template>
  <div class="container-fluid px-4 massages-list">
    <div class="row justify-content-center mb-0 mb-lg-2" v-for="(row, index) in appropriateMassages" v-bind:key="index">
      <massage-item v-for="massage in row"
                    v-bind:key="massage.id"
                    v-bind:massage-name="massage.name"
                    v-bind:image-src="getImagePath(massage.image)"
      ></massage-item>
    </div>
  </div>
</template>

<script>
import MassageItem from '../components/MassageItem'
import VueConfig from '../../vue.config'
export default {
  components: { MassageItem },
  data () {
    return {
      massagesJson: null
    }
  },
  props: {
    sortingType: String
  },
  computed: {
    appropriateMassages: function () {
      let massages = this.massagesJson == null ? [] : this.massagesJson[this.$store.state.massageType]
      this.sortingType === 'ASC'
        ? massages.sort((a, b) => a.price - b.price)
        : massages.sort((a, b) => b.price - a.price)
      let result = []
      for (let i = 0; i < massages.length; i++) {
        if (i % 3 === 0) {
          result.push([])
        }
        result[result.length - 1].push(massages[i])
      }
      return result
    }
  },
  methods: {
    getImagePath: function (imageName) {
      return require('../assets/images/' + imageName)
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
