<template>
  <div class="min-vh-100 d-flex flex-column">
    <nav-header></nav-header>
    <main class="d-flex flex-column flex-fill">
      <div class="container-fluid p-0 pt-3 pb-2 px-4 px-sm-5 flex-fill section">
        <p class="mb-0 py-3 text-center font-weight-bold section__header section__header--light-bg
                section__header--border-y">
          Dashboard
        </p>
        <div class="row justify-content-center">
          <div class="col rounded p-0 mt-3 mx-2 chart">
            <p class="mx-3 pt-3 font-weight-bold chart__header">Tulu</p>
            <line-chart :chart-data=lineChartData></line-chart>
          </div>
          <div class="col rounded p-0 mt-3 mx-2 chart">
            <p class="mx-3 pt-3 font-weight-bold chart__header">Igakuine broneeringite arv</p>
            <bar-chart :chart-data=barChartData></bar-chart>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col rounded p-0 my-3 mx-2 chart">
            <p class="mx-3 pt-3 font-weight-bold chart__header">Massaaži tüüpide broneerimiste arvud aastas</p>
            <pie-chart :chart-data="pieChartData"></pie-chart>
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
import LineChart from '../components/LineChart'
import PieChart from '../components/PieChart'
import BarChart from '../components/BarChart'
export default {
  components: { BarChart, PieChart, LineChart, NavHeader, CorpFooter },
  data () {
    return {
      massagesJson: '',
      bookingsJson: '',
      clientsNumberByMonth: '',
      incomeByMonths: '',
      massagesOccurrencesNumbers: '',
      lineChartData: {
        labels: ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai'],
        datasets: [
          {
            label: 'Tulu (€)',
            backgroundColor: '#70A09C',
            pointBackgroundColor: '#366D69',
            borderColor: '#70A09C',
            fill: false,
            data: [5, 10, 7, 5, 3]
          }
        ]
      },
      pieChartData: {
        labels: ['Šokolaadimassaaž', 'Ortopeediline massaaž', 'Lümfimassaaž', 'Laavakivimassaaž',
          'Aroomimassaaž', 'Spordimassaaž', 'Klassikaline üldmassaaž', 'Aromaatne ürdipallimassaaž',
          'Näomassaaž', 'Helimassaaž', 'Kupumassaaž', 'Meemassaaž', 'Peamassaaž', 'Tai aroomiõlimassaaž'],
        datasets: [
          {
            label: 'Massaažide populaarsus',
            backgroundColor: [
              '#CDF3F0', '#C1E8E5', '#B5DEDB', '#AAD4D0',
              '#9EC9C6', '#92BFBC', '#87B5B1', '#7BAAA7',
              '#70A09C', '#649692', '#588B88', '#4D817D',
              '#417773', '#366D69'],
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
          }
        ]
      },
      barChartData: {
        labels: ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai'],
        datasets: [
          {
            label: 'Broneeringute arv',
            backgroundColor: ['#CDF3F0', '#A7D1CE', '#81B0AC', '#5B8E8A', '#366D69'],
            data: [5, 23, 54, 60, 50]
          }
        ]
      }
    }
  },
  methods: {
    fetchMassagesJson: function () {
      let url = VueConfig.publicPath + 'json/massages.json'
      return fetch(url)
        .then((response) => response.json())
        // .then((datesJson) => {
        //   this.massagesJson = datesJson
        // })
    },
    fetchBookingsJson: function () {
      let url = VueConfig.publicPath + 'json/bookings.json'
      return fetch(url)
        .then((response) => response.json())
        // .then((datesJson) => {
        //   this.bookingsJson = datesJson
        // })
    },
    fetchMassagesAndBookings: function () {
      return Promise.all([this.fetchMassagesJson(), this.fetchBookingsJson()])
    },
    initializeData: function () {
      this.fetchMassagesAndBookings().then(([massages, bookings]) => {
        this.massagesJson = massages
        this.bookingsJson = bookings
        this.clientsNumberByMonth = this.getClientsNumberByMonths()
        this.incomeByMonths = this.getIncomeByMonths()
        this.massagesOccurrencesNumbers = this.getMassagesOccurrencesNumbers()
        this.lineChartData = {
          labels: ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai'],
          datasets: [
            {
              label: 'Tulu (€)',
              backgroundColor: '#70A09C',
              pointBackgroundColor: '#366D69',
              borderColor: '#70A09C',
              fill: false,
              data: this.getLineChartData()
            }
          ]
        }
        this.pieChartData = {
          labels: ['Šokolaadimassaaž', 'Ortopeediline massaaž', 'Lümfimassaaž', 'Laavakivimassaaž',
            'Aroomimassaaž', 'Spordimassaaž', 'Klassikaline üldmassaaž', 'Aromaatne ürdipallimassaaž',
            'Näomassaaž', 'Helimassaaž', 'Kupumassaaž', 'Meemassaaž', 'Peamassaaž', 'Tai aroomiõlimassaaž'],
          datasets: [
            {
              label: 'Massaažide populaarsus',
              backgroundColor: [
                '#CDF3F0', '#C1E8E5', '#B5DEDB', '#AAD4D0',
                '#9EC9C6', '#92BFBC', '#87B5B1', '#7BAAA7',
                '#70A09C', '#649692', '#588B88', '#4D817D',
                '#417773', '#366D69'],
              data: this.getPieChartData()
            }
          ]
        }
        this.barChartData = {
          labels: ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai'],
          datasets: [
            {
              label: 'Broneeringute arv',
              backgroundColor: ['#CDF3F0', '#A7D1CE', '#81B0AC', '#5B8E8A', '#366D69'],
              data: this.getBarChartData()
            }
          ]
        }
      })
    },
    getClientsNumberByMonths: function () {
      let result = {}
      for (let month in this.bookingsJson) {
        if (this.bookingsJson.hasOwnProperty(month)) {
          result[month] = this.bookingsJson[month]['customers'].length
        }
      }
      return result
    },
    getMassagesByMonths: function () {
      let result = {}
      for (let month in this.bookingsJson) {
        if (this.bookingsJson.hasOwnProperty(month)) {
          result[month] = this.bookingsJson[month]['customers'].map(customer => customer.massage)
        }
      }
      return result
    },
    getMassageByName: function (name) {
      let massages = []
      for (let massageType in this.massagesJson) {
        if (this.massagesJson.hasOwnProperty(massageType)) {
          massages = massages.concat(this.massagesJson[massageType])
        }
      }
      return massages.find(massage => massage.name === name)
    },
    getIncomeByMonths: function () {
      let massagesByMonths = this.getMassagesByMonths()
      let result = {}
      for (let month in massagesByMonths) {
        if (massagesByMonths.hasOwnProperty(month)) {
          let prices = massagesByMonths[month].map(massageName => this.getMassageByName(massageName).price)
          result[month] = prices.reduce((total, price) => total + price)
        }
      }
      return result
    },
    getMassagesOccurrencesNumbers: function () {
      let massagesByMonths = this.getMassagesByMonths()
      let massages = []
      let result = {}
      for (let month in massagesByMonths) {
        if (massagesByMonths.hasOwnProperty(month)) {
          massages = massages.concat(massagesByMonths[month])
        }
      }
      let distinctMassages = [...new Set(massages)]
      for (let massageName of distinctMassages) {
        result[massageName] = 0
      }
      for (let massageName of massages) {
        result[massageName] = result[massageName] + 1
      }
      return result
    },
    getLineChartData: function () {
      let chartData = []
      let index = 0
      for (let month in this.incomeByMonths) {
        if (this.incomeByMonths.hasOwnProperty(month)) {
          chartData[index++] = Number(this.incomeByMonths[month])
        }
      }
      return chartData
    },
    getPieChartData: function () {
      let chartData = []
      let index = 0
      for (let massageName in this.massagesOccurrencesNumbers) {
        if (this.massagesOccurrencesNumbers.hasOwnProperty(massageName)) {
          chartData[index++] = Number(this.massagesOccurrencesNumbers[massageName])
        }
      }
      return chartData
    },
    getBarChartData: function () {
      let chartData = []
      let index = 0
      for (let month in this.clientsNumberByMonth) {
        if (this.clientsNumberByMonth.hasOwnProperty(month)) {
          chartData[index++] = Number(this.clientsNumberByMonth[month])
        }
      }
      chartData[chartData.length] = 0
      return chartData
    }
  },
  created () {
    this.initializeData()
  },
  mounted () {
  }
}
</script>
