<template lang="pug">
  section.section
    .container
      h1.title Post Code
      .message 
        p {{message}}
      .field.has-addons
        p.control
          input.input(type='text' placeholder='郵便番号を入力' v-model="zipcode" @focus="focus")
        p.control
          button.button.is-primary(@click="searchAddressInfo") 住所自動入力
      .container
        table.table
          tr
            th 都道府県 
            td {{ addressData['address1']}}
          tr
            th 市区町村
            td {{ addressData['address2']}}
          tr
            th それ以降の住所
            td {{ addressData['address3']}}
      hr
      p 
        | エラーが出てしまったら、一旦Chromeを終了して、
      p
        pre $open /Applications/Google\ Chrome.app/ --args --disable-web-security --user-data-dir
      p
        | コマンドでChromeを開いてください。

</template>

<script>
const axios = require('axios');

let url = 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=';

export default {
  data() {
    return {
      zipcode: '',
      addressData: {},
      message: ''
    }
  },
  methods: {
    searchAddressInfo() {
      axios.get(url + this.zipcode)
      .then((res) => {
        if(res.data.results == null) {
          this.message = 'no data'
          return;
        }
        this.addressData = res.data.results[0];
      })
      .catch((error) => {
        this.message = 'error'
      })
    },
    focus() {
      this.zipcode = ''
      this.addressData = {}
      this.message = ''
    }
  }
}
</script>