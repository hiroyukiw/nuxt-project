<template lang="pug">
.hero-head
  .container
    nav.navbar.is-white(role='navigation', aria-label='main navigation')
      .navbar-brand
        .navbar-item.logo 
          logo
        .navbar-burger(data-target='navMenu', @click="$store.commit('toggleMenu')", :class="{'is-active': $store.state.isMenuActive}")
          span
          span
          span
      #navMenu.navbar-menu(:class="{'is-active': $store.state.isMenuActive}")
        .navbar-end
          nuxt-link.navbar-item(to='/') Top
          nuxt-link.navbar-item(to='/about') About
          nuxt-link.navbar-item(to='/contact') Contact
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data: () => {
    return {isMenuActive: false}
  },
  methods: {
    toggleMenu () {
      this.isMenuActive = !this.isMenuActive
    }
  }
}
</script>