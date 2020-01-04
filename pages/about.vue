<template lang="pug">
section.hero.is-primary.is-bold
  .hero-body
    .container
      h1.title.is-size-2
        | About
      h2.subtitle.is-size-4
        | Hiroyuki's Applications File
</template>


<script>
export default {
  fetch ({store}) {
    store.commit('resetMenu')
  }
}
</script>