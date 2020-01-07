<template lang="pug">
section.section
  .container
    .login(@click='doLogin')
      span
        font-awesome-icon.icon-mark(:icon="['fab', 'google']")
        | [ login: {{user_name}} ]
    h1.title {{title}}
    p.message {{message}}
    .ms-input(v-if='logined')
      table.table 
        tr
          th.has-background-info Message
          td.has-background-light
            input.input(v-model='msg' size='50' placeholder="ここになにか入力してください。")
          td.has-background-light
            button.button.is-primary(@click='add') 投稿
      hr
      .notification.board-message
        ul(v-for='(data, key) in json_data')
          li
            .list1 {{data.msg}}
            .list2 {{data.user}} ({{data.posted}})
</template>

<script>
import firebase from 'firebase';

const axios = require('axios');

let firebaseConfig = {
  apiKey: "AIzaSyBVd1oedmRJVEFQvoQDpN3or4vIdsmJCMQ",
  authDomain: "mynuxtproject-b4482.firebaseapp.com",
  databaseURL: "https://mynuxtproject-b4482.firebaseio.com",
  projectId: "mynuxtproject-b4482",
  storageBucket: "mynuxtproject-b4482.appspot.com",
  messagingSenderId: "699018863057"
};
firebase.initializeApp(firebaseConfig);

export default {
    data: function(){
        return {
            title:'Board',
            message:'ミニ伝言板。最新の投稿を表示します。',
            user_name:'',
            logined: true,
            msg:'',
            page:0,
            num_per_page:10, //●取り出すデータ数
            json_data:{},
        };
    },
    methods:{
        login:function(){
            let provider = new firebase.auth.GoogleAuthProvider();
            let self = this;
            firebase.auth().signInWithPopup(provider)
                    .then(function(result) {
                console.log(result.user);
                self.user = result.user;
                self.user_name = result.user.displayName;
                self.message = 'ログインしました。';
                let db = firebase.database();
                let ref = db.ref('board');
                ref.orderByKey()
                        .limitToLast(self.num_per_page)
                        .on('value', function(snapshot){
                    if (firebase.auth().currentUser != null){
                        let arr = [];
                        let data = snapshot.val();
                        for(let item in data){
                            arr.unshift(data[item]);
                        }
                        console.log(arr);
                        self.json_data =arr;
                    } else {
                        self.json_data = {};
                    }
                });
            });
        },
        logout: function(){
            firebase.auth().signOut();
            this.user_name = '';
            this.json_data = {};
            this.message = 'ログアウトしました。';
        },
        doLogin: function(){
            if (firebase.auth().currentUser == null){
                this.login();
            } else {
                this.logout();
            }
        },
        add: function(){
            if (firebase.auth().currentUser == null){
                alert('ログインしないと投稿できません。');
                return;
            }
            let db = firebase.database();
            let user = firebase.auth().currentUser;
            console.log(user);
            let ref = db.ref('board');
            let self = this;
            let d = new Date();
            let dstr = d.getFullYear() + '-' + (d.getMonth() + 1) + '-'
                + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes()
                + ':' + d.getSeconds();
            let id = d.getTime();
            let data = {
                msg:this.msg,
                user:user.displayName,
                posted:dstr,
            };
            firebase.database().ref('board/' + id).set(data);
            this.msg = '';
            this.message = '投稿しました。';
        },
    },
    created: function(){
        if (firebase.auth().currentUser == null){
            this.login();
        }
        console.log(firebase.auth().currentUser);
    }
}
</script>

<style lang="stylus" scoped>
.login
  margin-bottom 20px
  span 
    background #cccccc
    border-radius 100px
    display inline-block
    padding 5px 10px
    svg
      margin-right 10px;
.ms-input
  table
    tr
      th
        width 120px
        color white
        font-size 16pt
      td
        font-size 14pt
.board-message
  ul
    li
      margin-bottom 20px
      padding-bottom 10px
      border-bottom 1px solid #dddddd
      .list1
        color #555555
        font-size 14pt
        font-weight bold
        &::before
          content '・'
          margin-right 5px
      .list2
        text-align right
        font-size 10pt
</style>