<template>
  <div class="min-vh-100 d-flex flex-column">
    <nav-header></nav-header>
    <main class="d-flex flex-column flex-fill">
      <div class="container-fluid p-0 pt-3 pb-2 px-4 px-sm-5 flex-fill section">
        <p class="mb-0 py-3 text-center font-weight-bold section__header section__header--light-bg
                section__header--border-y">
          {{this.$store.state.massageType}}
        </p>
        <div class="p-2 my-3 massage-sorting">
          <div class="input-group row justify-content-center m-0">
            <div class="input-group-prepend p-0 col-sm">
              <label class="input-group-text rounded-0 border-0 mx-auto massage-sorting__label" for="sortingSelect">
                Sorteerimine hinna järgi
              </label>
            </div>
            <select class="custom-select rounded-0 col-sm w-75 massage-sorting__select"
                    id="sortingSelect" v-model="selectedSorting">
              <option value="ASC">Odavamad enne</option>
              <option value="DESC">Kallimad enne</option>
            </select>
          </div>
        </div>
        <massages-list :sorting-type="selectedSorting"></massages-list>
      </div>
    </main>
    <corp-footer></corp-footer>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import CorpFooter from '../components/CoprFooter'
import MassagesList from '../components/MassagesList'
export default {
  components: { NavHeader, CorpFooter, MassagesList },
  data () {
    return {
      selectedSorting: 'ASC'
    }
  }
}
</script>
