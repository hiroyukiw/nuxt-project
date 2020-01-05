<template lang="pug">
main
  section.hero.is-primary.is-bold
    .hero-body
      .container
        h1.title.is-size-2
          | My Portforio
        h2.subtitle.is-size-4
          | Hiroyuki's Applications File
        p.github-link
          a(href="https://github.com/hiroyukiw/nuxt-project" target="_blank") 
            font-awesome-icon(:icon="['fab', 'github']")
            span GitHub
  list

</template>

<script>
import List from '~/components/todo/List.vue'

export default {
  components: {
    List
  },
  fetch ({store}) {
    store.commit('resetMenu')
  }
}
</script>
<style lang="stylus">
  .github-link
    a
      color white
      span
        margin-left 4px
</style>
