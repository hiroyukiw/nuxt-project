<template lang="pug">
section.section
  .container
    img(src='img/title.png')
    p#counter(v-if='count')
      | {{ counter }} / {{ all }}
    transition(appear='' name='message' mode='out-in')
      h2#message(:key='message')
        | {{ message }}
    #choice(v-if='choice')
      a.square_btn.yes.button(href='#' v-on:click='clickAnswer(true)') はい
      a.square_btn.no.button(href='#' v-on:click='clickAnswer(false)') いいえ
    #retry(v-if='retry_btn')
      a.square_btn.yes(href='#' v-on:click='retry') リトライ

</template>

<script>
const quetions = [
  "エイムには自信がある",
  "キルよりも塗りのほうが好きだ",
  "かくれんぼが得意だ",
  "ガンガン前に突っ込むのが好きだ",
  "機動力が高い武器が好きだ",
  "トリッキーな武器を使いこなしたい",
  "射程は長めのブキのほうが好きだ",
  "空を飛びたいという願望がある",
];
var counter;
var weapons;

init();
testRecommendation();

function init() {
  counter = 0;
  weapons = {
    spColla:{name:"スプラシューターコラボ",point:0},
    nZap85:{name:"N-ZAP85",point:0},
    maneuColla:{name:"スプラマニューバーコラボ",point:0},
    duaCus:{name:"デュアルスイーパーカスタム",point:0},
    jetCus:{name:"ジェットスイーパーカスタム",point:0},
    spCharger:{name:"スプラチャージャー",point:0},
    hotCus:{name:"ホットブラスターカスタム",point:0},
    spRoller:{name:"スプラローラー",point:0},
    pablo:{name:"パブロ",point:0},
    bucketDeco:{name:"バケットスロッシャーデコ",point:0},
    barrel:{name:"バレルスピナー",point:0},
    paraShelter:{name:"パラシェルター",point:0},
    h3d:{name:"H3リールガンD",point:0},
    quadHopperB:{name:"クアッドホッパーブラック",point:0}
  }
}

export default {
  data() {
    return {
      choice: true,
      retry_btn: false,
      count: true,
      message: quetions[0],
      counter:counter+1,
      all:quetions.length
    }
  },
  methods: {
    clickAnswer: function (answer) {
      addPoint(answer,counter);
      counter += 1;
      if(counter > quetions.length-1){
        var maxCount = 0;
        var maxWeapon = "";
        for(var weapon in weapons) {
          if(maxCount < weapons[weapon].point){
            maxCount = weapons[weapon].point;
            maxWeapon = weapons[weapon].name;
          }
        }
        this.choice = false;
        this.count = false;
        this.message = "あなたには「" + maxWeapon + "」がオススメです！";
        this.retry_btn = true;
      }else{
        this.counter = counter+1;
        this.message = quetions[counter];
      }
    },
    retry: function () {
      init();
      this.counter = counter+1;
      this.choice = true;
      this.count = true;
      this.retry_btn = false;
      this.message = quetions[counter];
    }
  }
}
function addPoint(answer,counter) {
  switch(counter){
    case 0:
      if(answer === true){
        weapons.nZap85.point += 1;
        weapons.jetCus.point += 1;
        weapons.duaCus.point += 1;
        weapons.maneuColla.point += 1;
        weapons.spCharger.point += 1;
        weapons.h3d.point += 2;
        weapons.quadHopperB.point += 1;
      }else{
        weapons.hotCus.point += 1;
        weapons.spRoller.point += 1;
        weapons.pablo.point += 1;
        weapons.bucketDeco.point += 1;
        weapons.barrel.point += 1;
        weapons.paraShelter.point += 1;
      }
      break;
    case 1:
      if(answer === true){
        weapons.nZap85.point += 1;
        weapons.duaCus.point += 1;
        weapons.barrel.point += 1;
        weapons.bucketDeco.point += 1;
      }else{
        weapons.spColla.point += 1;
        weapons.jetCus.point += 1;
        weapons.hotCus.point += 1;
        weapons.spRoller.point += 1;
        weapons.paraShelter.point += 1;
        weapons.maneuColla.point += 1;
        weapons.spCharger.point += 1;
        weapons.quadHopperB.point += 1;
      }
      break;
    case 2:
      if(answer === true){
        weapons.spRoller.point += 1;
        weapons.pablo.point += 1;
      }else{
        weapons.barrel.point += 1;
        weapons.spCharger.point += 1;
        weapons.h3d.point += 1;
      }
      break;
    case 3:
      if(answer === true){
        weapons.spRoller.point += 1;
        weapons.pablo.point += 1;
        weapons.bucketDeco.point += 1;
        weapons.hotCus.point += 1;
        weapons.spColla.point += 1;
        weapons.paraShelter.point += 1;
        weapons.maneuColla.point += 1;
        weapons.quadHopperB.point += 1;
      }else{
        weapons.nZap85.point += 1;
        weapons.duaCus.point += 1;
        weapons.jetCus.point += 1;
        weapons.barrel.point += 1;
        weapons.spCharger.point += 1;
        weapons.h3d.point += 1;
      }
      break;
    case 4:
      if(answer === true){
        weapons.spRoller.point += 1;
        weapons.pablo.point += 1;
        weapons.nZap85.point += 1;
        weapons.duaCus.point += 1;
        weapons.spColla.point += 1;
        weapons.maneuColla.point += 1;
        weapons.quadHopperB.point += 1;
      }else{
        weapons.hotCus.point += 1;
        weapons.bucketDeco.point += 1;
        weapons.jetCus.point += 1;
        weapons.barrel.point += 1;
        weapons.spCharger.point += 1;
      }
      break;
    case 5:
      if(answer === true){
        weapons.paraShelter.point += 2;
        weapons.quadHopperB.point += 2;
        weapons.h3d.point += 1;
        weapons.pablo.point += 1;
      }else{
      }
      break;
    case 6:
      if(answer === true){
        weapons.jetCus.point += 1;
        weapons.duaCus.point += 1;
        weapons.barrel.point += 1;
        weapons.spCharger.point += 1;
        weapons.h3d.point += 1;
        weapons.bucketDeco.point += 1;
      }else{
        weapons.spRoller.point += 1;
        weapons.nZap85.point += 1;
        weapons.spColla.point += 1;
        weapons.maneuColla.point += 1;
        weapons.hotCus.point += 1;
        weapons.paraShelter.point += 1;
        weapons.pablo.point += 1;
      }
      break;
    case 7:
      if(answer === true){
        weapons.spColla.point += 1;
        weapons.maneuColla.point += 1;
        weapons.hotCus.point += 1;
      }else{
      }
      break;
  }
}

function testRecommendation(){
  let distribution ={
    spColla:{name:"スプラシューターコラボ",point:0},
    nZap85:{name:"N-ZAP85",point:0},
    maneuColla:{name:"スプラマニューバーコラボ",point:0},
    duaCus:{name:"デュアルスイーパーカスタム",point:0},
    jetCus:{name:"ジェットスイーパーカスタム",point:0},
    spCharger:{name:"スプラチャージャー",point:0},
    hotCus:{name:"ホットブラスターカスタム",point:0},
    spRoller:{name:"スプラローラー",point:0},
    pablo:{name:"パブロ",point:0},
    bucketDeco:{name:"バケットスロッシャーデコ",point:0},
    barrel:{name:"バレルスピナー",point:0},
    paraShelter:{name:"パラシェルター",point:0},
    h3d:{name:"H3リールガンD",point:0},
    quadHopperB:{name:"クアッドホッパーブラック",point:0}
  }
  let answerPattern =["0","1"];
  let tempAnswerPattern =[];
  let loopCounter = 0;

  while(loopCounter < quetions.length - 1){
    for(let answer of answerPattern){
      tempAnswerPattern.push(answer + "0");
      tempAnswerPattern.push(answer + "1");
    }
    answerPattern = tempAnswerPattern;
    tempAnswerPattern = [];
    loopCounter += 1;
  }

  for(let answer of answerPattern){
    let answerList = answer.split("");
    for(let singleAnswer of answerList){
      if(singleAnswer === "0"){
        singleAnswer = true;
      }else{
        singleAnswer = false;
      }
      addPoint(singleAnswer,counter);
      counter += 1;
    }

    let maxCount = 0;
    let maxWeapon = "";
    for(let weapon in weapons) {
      if(maxCount < weapons[weapon].point){
        maxCount = weapons[weapon].point;
        maxWeapon = weapon;
      }
    }
    distribution[maxWeapon].point += 1;
    init();
  }
      console.log(distribution);
}

</script>
