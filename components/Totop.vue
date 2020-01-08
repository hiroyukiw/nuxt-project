<template lang="pug">
  transition(name="fade" :duration="1000")
    div.totop(v-if="show" :style="styles")
      button.button.is-primary.is-rounded.is-outlined(type='button' @click="moveToTop")
        slot Top
</template>

<script>
export default {
  props: ['position'],
  data() {
    return {
      show: false
    };
  },
  computed: {
    styles() {
      let styles = { position: 'fixed' };
      if(this.position === 'top-left') {
        styles['top'] = '15px';
        styles['left'] = '10px';
      } else if(this.position === 'top-right') {
        styles['top'] = '15px';
        styles['right'] = '10px';
      } else if(this.position === 'bottom-left') {
        styles['bottom'] = '15px';
        styles['left'] = '10px';
      } else {
        styles['bottom'] = '15px';
        styles['right'] = '10px';
      }
      return styles;
    }
  },
  methods: {
    moveToTop() {
      const duration = 200;
      const interval = 25;
      const step = -window.scrollY / Math.ceil(duration / interval);
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        if(window.scrollY <= 0 ) {
          clearInterval(timer);
        }
      }, interval);
    }
  },
  mounted() {
    let style = document.createElement('style');
    style.innerHTML = `
            .fade-enter-active, .fade-leave-active {
                transition: opacity .5s;
            }
            .fade-enter, .fade-leave-to {
                opacity: 0;
            }
        `;
    document.getElementsByTagName('head')[0].appendChild(style);
    window.addEventListener('scroll', () => {
      this.show = (window.scrollY > 120);
    });
  }
};
</script>

<style lang="stylus" scoped>

</style>