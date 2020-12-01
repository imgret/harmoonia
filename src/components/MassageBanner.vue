<template>
  <div class="mr-2 mb-2 massage-banner">
    <img class="massage-banner__image" v-bind:src="imageSrc" v-bind:alt="massageType">
    <button class="d-block btn rounded-0 border-0 mt-1 button" v-on:click="goToMassagesListPage">
      {{massageType}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'MassageBanner',
  props: {
    massageType: String,
    imageSrc: String
  },
  methods: {
    goToMassagesListPage: function () {
      this.$store.state.massageType = this.massageType
      this.$router.push('/massages_list')
    }
  }
}
</script>
