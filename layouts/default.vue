<template>
  <div>
    <div class="header">
      <div class="logo"><img src="~static/logo.png" alt=""></div>
      <div class="menu">
        <ul>
          <li><h2><a href="/">首页</a></h2></li>
          <li>
            <h2><a href="/brands">自营品牌</a></h2>
            <ul>
              <li><a href="/brands">全部</a></li>
              <li><a href="/beauty">DSHUI生活美学</a></li>
              <li><a href="/skin">DSHUI护肤</a></li>
              <li><a href="/makeup">DSHUI美妆</a></li>
            </ul>  
          </li>
          <li><h2><a href="/news">新闻中心</a></h2></li>
          <li><h2><a href="/help">联系我们</a></h2></li>
        </ul>
      </div>
    </div>
    <div class="header_border"></div>
    <nuxt/>
    <div class="footer">
      <div class="footer_container">
        <img src="~static/footer.png" alt="">
      </div>
      <div class="footer_copyright">
        <p>Copyright@2019 董事惠DSHUI 版权所有</p>
        <p>河南妙选电子商务有限公司  dshui.com   <a href="#">豫ICP备18034299号-1</a></p>
      </div>
    </div>
  </div>
</template>

<style>
a{
  text-decoration: none;
}
div.header{
  width: 1080px;
  height: 60px;
  margin: 0 auto;
  padding: 20px 0;
  box-sizing: content-box;
  z-index: 9999;
}
div.header_bottom{
  height: 5px;
  width: 100%;
  background: #e8e8e8;
}
div.logo{
  height: 60px;
  width: 247.5px;
  display: inline-block;
}
div.logo>img{
  width: auto;
  height: 60px;
}
div.menu{
  display: inline-block;
  float: right;
  width: 560px;
  height: 60px;
}
div.menu>ul{
  margin: 0;
  padding: 0;
  list-style-type: none;
}
div.menu>ul>li{
  float: left;
  color: #515a6e;
  line-height: 60px;
  font-weight: 700;
}
div.menu>ul>li>h2{
  padding: 0 40px;
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  border-bottom: 2px solid #fff;
}
div.menu>ul>li:hover>h2{
  border-bottom: 2px solid #dfb97c;
}
div.menu>ul>li:hover>h2>a{
  color: #dfb97c;
}
div.menu>ul>li:hover>ul{
  display: block;
  z-index: 9999;
}
div.menu>ul>li>ul{
  display: none;
  list-style-type: none;
  margin: 10px 0 0 0;
  padding: 0;
  border: 1px solid #eee;
  border-radius: 3px;
  box-shadow: #eee 0 0 2px;
  z-index: 9999;
  background: #fff;
}
div.menu>ul>li>ul>li{
  line-height: 25px;
  text-align: center;
  font-size: 14px;
}
div.menu>ul>li>ul>li:hover{
  background: #eee;
  color: #dfb97c;
}
div.menu>ul>li>ul>li:hover>a{
  color: #dfb97c;
}
div.footer{
  width: 100%;
  height: auto;
  margin: 0 auto;
  position: relative;
  background: #16151a;
}
div.footer>.footer_container{
  width: 1080px;
  height: auto;
  margin: 0 auto;
  position: relative;
  margin-top: 120px;
}
div.footer>.footer_container>img{
  width: 1080px;
  height: auto;
  margin-top: -120px;
}
div.footer>.footer_copyright{
  padding: 30px 0;
  text-align: center;
  color: #999;
  font-size: 14px;
  line-height: 1.5;
}
div.footer>.footer_copyright>p{
  margin-bottom: 10px;
}
div.footer>.footer_copyright>p>a{
  text-decoration: none;
  color: #999;
}
</style>

