<template lang="pug">
  .columns.is-desktop.is-multiline
    .column.is-full(v-for="post in posts" :key="post.id")
      .box
        h3.subtitle
          | {{ post.title.rendered }}
        p.info(v-html="post.excerpt.rendered")
        .buttons
          a.button.is-primary(:href="post.guid.rendered" target="_blink") Link
</template>

<script>

export default {
  props: ['posts'],
}
</script>

<style lang="stylus">
.info
  margin-bottom 20px
</style>