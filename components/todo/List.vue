<template lang="pug">
section.section.section-list
  .container
    .columns.is-desktop.is-multiline
      .column.is-one-third(v-for='item in postlist')
        .box
          article.media
            .media-left
              figure.image.is-64x64
                img(:src="item.image", :alt="item.alt")
            .media-content
              .content
                h2 {{ item.title }}
                p {{ item.guide }}
                nuxt-link(:to="item.link", class="button is-primary") Click
</template>

<script>
export default {
  data: function() {
    return {
      postlist: [
        {
          image: require('~/assets/images/todolist.png'),
          alt: 'List',
          title: 'ToDo List',
          guide: 'Todoリストアプリ',
          link: '/todo'
        },
        {
          image: require('~/assets/images/bitcoin.png'),
          alt: 'Bitcoin',
          title: 'BitCoin Price',
          guide: 'BitCoinの価格表示アプリ',
          link: '/bitcoin'
        },
        {
          image: require('~/assets/images/wprest.png'),
          alt: 'WP-REST API',
          title: 'WP-REST API',
          guide: 'wordpressからAPIを取得して表示',
          link: '/wpapi'
        },
        {
          image: require('~/assets/images/board.png'),
          alt: 'Authentication Board',
          title: 'Authentication Board',
          guide: 'Google認証後ログイン 掲示板',
          link: '/board'
        }

      ]
    }
  }
}
</script>
