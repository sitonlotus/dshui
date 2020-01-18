<template>
    <div class="beauty">
        <div class="content">
            <ul>
                <li>
                    <a href="#">
                        <div class="wrap_img"><img src="~static/makelist1.jpg" alt=""></div>
                        <h2 class="title">DSHUI璀璨魅色口红</h2>
                        <div class="model">
                            <div class="model_text">丰盈润泽，持久显色，色泽饱满，持久滋润。</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="wrap_img"><img src="~static/makelist2.jpg" alt=""></div>
                        <h2 class="title">DSHUI璀璨修护温变唇膏</h2>
                        <div class="model">
                            <div class="model_text">滋养润泽，温感变色，魅力持妆，保湿润唇。</div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
div.beauty{
    width: 100%;
    height: auto;
    background: url("~static/makeup.jpg") #f9f9f9 center top no-repeat;
    padding-top: 300px;
}
div.content{
    width: 1500px;
    margin: 90px auto 60px;
    text-align: center;
    height: 450px;
}
div.content>ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
}
div.content>ul>li{
    width: 345px;
    height: 416px;
    margin: 0 15px;
    float: left;
}
div.content>ul>li>a{
    display: block;
    text-decoration: none;
    position: relative;
}
div.wrap_img{
    width: 345px;
    height: 375px;
    overflow: hidden;
}
div.wrap_img>img{
    width: 100%;
}
h2.title{
    margin: 10px 0;
    font-size: 15px;
    padding: 0 10px;
    color: #515a6e;
    line-height: 1.5;
    text-align-last: left;
    font-weight: normal;
}
div.model{
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.6;
    z-index: 2;
    vertical-align: middle;
    text-align: center;
}
div.model_text{
    position: absolute;
    top: 50%;
    left: 10%;
    text-align: center;
    transform: translateY(-50%);
    color: #fff;
    font-size: 15px;
}
div.content>ul>li>a:hover>div.model{
    display: block;
}
</style>