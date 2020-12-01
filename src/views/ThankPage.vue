<template>
  <div class="min-vh-100 d-flex flex-column">
    <nav-header></nav-header>
    <main class="d-flex flex-column flex-fill">
      <div class="container-fluid p-0 pt-3 pb-2 flex-fill px-4 px-sm-5 section">
        <p class="mb-0 py-1 text-center font-weight-bold d-sm-none section__header section__header--light-bg
                section__header--border-y">
          Aitäh! Teie broneering on kinnitatud.<br>
          Broneeringu info on saadetud teie<br> e-posti.
        </p>
        <p class="d-none d-sm-block text-center font-weight-bold mt-4">
          Aitäh! Teie broneering on kinnitatud.<br>
          Broneeringu info on saadetud teie e-posti.
        </p>
        <div class="d-flex justify-content-center mt-3 ">
          <router-link class="btn rounded-0 mx-auto px-4 button button--small button--width-auto" to="/">
            Tagasi avalehele
          </router-link>
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
  components: { NavHeader, CorpFooter }
}
</script>
