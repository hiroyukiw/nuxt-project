<template lang="pug">
section.section
  .container
    h2.title WP-REST API
    PostList(:posts="posts")
</template>

<script>
import PostList from '~/components/posts/PostList.vue' //【２】PostListコンポーネントを読み込む
import wp from '~/plugins/wp.js'

export default {
    asyncData ({ params }) {
        return wp.posts()
    },  
    components: {
        PostList //【３】PostListを子コンポーネントとする
    }
}
</script>