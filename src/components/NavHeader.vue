<template>
  <nav class="navbar navbar-expand-sm navbar-light pl-3 pr-2 px-md-5 navbar--dark-bg">
    <div class="navbar-brand logo">
      <router-link class="font-weight-bold logo__text" to="/">
        <i class="fas fa-spa icon"></i>
        Harmoonia
      </router-link>
    </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerContent"
            aria-controls="navbarTogglerContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerContent">
      <ul class="navbar-nav ml-auto font-weight-bolder text-center">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Teenused
          </a>
          <div class="dropdown-menu text-center" aria-labelledby="navbarDropdownMenuLink">
            <button class="dropdown-item" v-on:click="goToMassagesListPage('Ilumassaažid')">Ilumassaažid</button>
            <button class="dropdown-item" v-on:click="goToMassagesListPage('Lõõgastavad massaažid')">Lõõgastavad massaažid
            </button>
            <button class="dropdown-item" v-on:click="goToMassagesListPage('Ravimassaažid')">Ravimassaažid</button>
          </div>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Hinnakiri</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Massöörid</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Kontakt</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavHeader',
  methods: {
    goToMassagesListPage: function (massageType) {
      this.$store.state.massageType = massageType
      this.$router.push('/massages_list')
    }
  }
}
</script>
