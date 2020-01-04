<template lang="pug">
section.section.section-list
  .container
    .columns.is-desktop.is-multiline
      .column.is-one-quarter(v-for='item in postlist')
        .box
          article.media
            .media-left
              figure.image.is-64x64
                img(:src="item.image", :alt="item.alt")
            .media-content
              .content
                h2 {{ item.title }}
                p {{ item.guide }}
                nuxt-link(to='/todo' class='button is-primary') Click
</template>

<script>
export default {
  data: function() {
    return {
      postlist: [
        {
          image: require('~/assets/images/todolist.png'),
          alt: 'Image',
          title: 'ToDo List',
          guide: 'Todoリストアプリ'
        }
      ]
    }
  }
}
</script>
