<template lang="pug">
footer.footer
  .content.has-text-centered
    p &copy; {{ now }} {{ copyright }}
</template>

<script>
export default {
  data: () => {
    return {
      now: '',
      copyright: 'sample'
    };
  },
  created: function() {
    var d = new Date();
    this.now = d.getFullYear();
  }
}
</script>