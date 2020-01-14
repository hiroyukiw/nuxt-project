<template lang="pug">
  section.section
    .container
      h1.title 楽天API
      ul.columns.is-desktop.is-multiline
        li.column.is-one-third(v-for="item in results" :key="item.id")
          figure.box
            img.imgStyle(:src="item.Item.mediumImageUrls[0].imageUrl")
            figcaption
              dl.dataStyle
                dt
                  a(:href="item.Item.itemUrl")
                    | {{ item.Item.itemName.slice(0,20) + "..." }}
                dd.price
                  | {{ money }}{{ item.Item.itemPrice }}

</template>

<script>
export default {
  data() {
    return {
      money: '¥',
      results: []
    }
  },
  async asyncData({ app }) {
    const baseUrl = 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?'
    const appId = 'applicationId=1004165909666487349'
    const keyword = '&keyword=文鳥'
    const getUrl = encodeURI(baseUrl + appId + keyword)
    const response = await app.$axios.$get(getUrl)
    return {
      results: response.Items
    }
  }
}
</script>