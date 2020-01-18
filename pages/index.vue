<template>
  <div class="container">
    <div class="ban">
      <img src="~static/ban.png" alt="">
    </div>
    <div class="content">
      <img src="~static/banCon.png" alt="">
    </div>
    <div class="wrap_adcantage">
      <img src="~static/advantage.png" alt="">
    </div>
    <div class="advantage">
      <img src="~static/advant.png" alt="">
    </div>
  </div>
</template>

<script>

export default {
  components: {
    
  }
}
</script>

<style>
.container {
  text-align: center;
}
div.ban{
  width: 100%;
  height: 580px;
  background: #363636;
  padding-top: 74px;
}
div.ban>img{
  max-width: 1080px;
}
div.content{
  padding-top: 85px;
  padding-bottom: 100px;
  width: 1080px;
  height: auto;
  margin: 0 auto;
}
div.wrap_adcantage{
  width: 100%;
  height: 570px;
  background: url("~static/wrap.png") center center no-repeat;
  text-align: center;
  padding-top: 85px;
}
div.advantage{
  width: 1080px;
  padding-top: 85px;
  padding-bottom: 100px;
  margin: 0 auto;
}
div.advantage>img{
  width: 100%;
  height: auto;
}
</style>

