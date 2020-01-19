<template lang="pug">
section.section
  .container
    LightGallery(:images='images' :index='index' :disable-scroll='true' @close='index = null')
    ul.li-list
      li(v-for="(thumb, thumbIndex) in ['gallery/bird-01.jpg', 'gallery/bird-02.jpg', 'gallery/bird-03.jpg', 'gallery/bird-04.jpg']",
        :key='thumbIndex',
        @click='index = thumbIndex')
        img(:src='thumb')
</template>
<script>

  import { LightGallery } from 'vue-light-gallery';

  export default {
    components: {
      LightGallery,
    },
    data() {
      return {
        images: [
          { title:'img 1', url: 'gallery/bird-01.jpg' },
          { title:'img 2', url: 'gallery/bird-02.jpg' },
          { title:'img 3', url: 'gallery/bird-03.jpg' },
          { title:'img 4', url: 'gallery/bird-04.jpg' }
        ],
        index: null,
      };
    },
  };
</script> 

<style lang="stylus" scoped>
.li-list
  display flex
  justify-content space-between
  align-items stretch
  li 
    img 
      object-fit cover
      width 200px
      height 200px
      
</style>