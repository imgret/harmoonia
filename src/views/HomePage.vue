<template>
  <div class="min-vh-100 d-flex flex-column">
    <nav-header></nav-header>
    <main class="d-flex flex-column flex-fill">
      <div class="container-fluid p-0">
        <div class="card text-white rounded-0">
          <picture>
            <source media="(min-width: 1200px)" srcset="../assets/images/main_banner_1200x300.jpg">
            <source media="(min-width: 992px)" srcset="../assets/images/main_banner_995x300.jpg">
            <source media="(min-width: 768px)" srcset="../assets/images/main_banner_768x300.jpg">
            <source media="(min-width: 576px)" srcset="../assets/images/main_banner_577x300.jpg">
            <img class="card-img rounded-0" src="../assets/images/main_banner_360x300.jpg" alt="Main banner">
          </picture>
          <div class="card-img-overlay d-flex flex-column justify-content-center text-center">
            <h5 class="card-title">Salongis tegutsevad professionaalsed massöörid, terapeudid</h5>
            <p class="card-text">Meie teenuste hulka kuuluvad ravimassaaž, lõõgastav massaaž, ilumassaaž ja muud</p>
          </div>
        </div>
      </div>
      <div class="container-fluid p-0 flex-fill section">
        <p class="mb-0 py-3 text-center font-weight-bold section__header">
          Massaažid
        </p>
        <div class="d-flex flex-wrap d-flex justify-content-center pt-2">
          <massage-banner massage-type="Ilumassaažid" :image-src="require('../assets/images/ilu.jpg')"></massage-banner>
          <massage-banner massage-type="Lõõgastavad massaažid"
                          :image-src="require('../assets/images/loogastav.jpg')"></massage-banner>
          <massage-banner massage-type="Ravimassaažid" :image-src="require('../assets/images/ravi.jpg')"></massage-banner>
        </div>
        <div class="container-fluid p-0 mb-3 section">
          <p class="mb-0 py-3 text-center font-weight-bold section__header">
            Massaažikeskusest
          </p>
          <p class="mx-5 mt-1 text-justify">
            Massaažikeskus Harmoonia on asutatud 2019. aastal eesmärgiga osutada professionaalset massaažiteenust hinnaga, mis oleks jõukohane kõikidele elanikkonna kihtidele.
            Ettevõte Harmoonia pakub võimalust saada teenuseid, mis on seotud organismi tervendamise, selle hea füüsilise vormi toetamise ning stressi ja üleliigse pinge (nii füüsilise kui emotsionaalse) leevendamisega.
            Massaaž on üks kõige efektiivsematest füsioteraapilistest ravimeetoditest, mis märkimisväärselt tugevdab tervist, suurendab elujõudu, maandab psühhoemotsionaalset pinget ning muudab lihased tugevamaks ja naha pringimaks.
            Pakume erinevaid massaažiliike ning tööd mentaalsel tasandil, aga ka organismi sisemise jõu mobiliseerimist. Ülemaailmse statistika andmetel on seljaprobleeme 90% inimkonnast, kuid selgroog on aluseks kogu organismi tervisele, seepärast pole võimalik massaaži tähtsust üle hinnata.
          </p>
          <router-link class="d-block btn rounded-0 border-0 m-auto mt-1 button" to="/">
            Loe veel
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
import MassageBanner from '../components/MassageBanner'
export default {
  components: { NavHeader, CorpFooter, MassageBanner }
}
</script>
