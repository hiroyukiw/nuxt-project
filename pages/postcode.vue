<template lang="pug">
  section.section
    .container
      h1.title Post Code
      p 郵便番号を入力
      .field.has-addons
        p.control
          input.input(type='text' placeholder='郵便番号を入力' v-model="code")
        p.control
          button.button.is-primary(@click="send()") 住所自動入力
    br

    .container
      pre
        table.table
          tr
            th 都道府県 
            td {{ address['pref']}}
          tr
            th 市区町村
            td {{ address['city']}}
          tr
            th それ以降の住所
            td {{ address['town']}}
    </p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        address: '',
        code: ''
      };
    },
    methods: {
      send() {
        let url = 'https://api.zipaddress.net/?zipcode=' + this.code
        
        fetch(url)
          .then( response => {
            return response.json()
          })
          .then( json => {
            this.address = json.data
          })
          .catch( (err) => {
            this.address = '該当する住所が無いか、正しい形式で入力されていません。' + err
          });
      }
    }
  }
</script>