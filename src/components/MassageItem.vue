<template>
  <div class="col-lg p-0 mx-1 mb-2 mb-lg-0 massages-list__item">
    <div class="card text-white rounded-0">
      <img v-bind:src="imageSrc" class="card-img rounded-0" alt="Massaaž">
      <div class="card-img-overlay d-flex flex-column justify-content-end text-center">
        <h5 class="card-title mb-5 pb-4">{{massageName}}</h5>
        <button class="card-text mx-auto btn button button--small button--round"
                v-on:click="goToMassageDetailsPage">Vali</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MassageItem',
  props: {
    massageName: String,
    imageSrc: String
  },
  methods: {
    goToMassageDetailsPage: function () {
      this.$store.state.massageName = this.massageName
      this.$router.push('/massage_details')
    }
  }
}
</script>
