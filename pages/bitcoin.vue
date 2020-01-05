<template lang="pug">
  section.section
    .container
      h2.title {{ data.chartName }} Price
      pre
        ul
          li(v-for="(rate, currency) in data.bpi")
            span.country {{ currency }} 
            | :  
            span.rate {{ rate.rate_float  }} 
            span.description [{{ rate.description }}]

</template>

<script>

export default {
  async asyncData({ $axios }) {
    const response = await $axios.$get('https://api.coindesk.com/v1/bpi/currentprice.json')
    return {
      data: response
    }
  }
}
</script>

<style lang="stylus">
  .country
    color #00d1b2
    font-size 20px
</style>