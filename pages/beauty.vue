<template>
    <div class="beauty">
        <div class="content">
            <ul>
                <li>
                    <a href="#">
                        <div class="wrap_img"><img src="~static/prolist1.jpg" alt=""></div>
                        <h2 class="title">DSHUI鱼子精华水嫩沐浴露</h2>
                        <div class="model">
                            <div class="model_text">恢复肌肤柔润，质感清新舒适，舒缓肌肤不适，香味持久清新。</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="wrap_img"><img src="~static/prolist2.jpg" alt=""></div>
                        <h2 class="title">DSHUI嫩滑香氛身体乳</h2>
                        <div class="model">
                            <div class="model_text">深透保湿，柔滑弹嫩，质地清爽，淡雅香氛。</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="wrap_img"><img src="~static/prolist3.jpg" alt=""></div>
                        <h2 class="title">DSHUI姜蓉清爽洗发露</h2>
                        <div class="model">
                            <div class="model_text">天然呵护，修复发丝，清爽头皮，改善分叉，祛油祛屑。</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="wrap_img"><img src="~static/prolist4.jpg" alt=""></div>
                        <h2 class="title">DSHUI净透水润丝滑润发乳</h2>
                        <div class="model">
                            <div class="model_text">强韧发丝，净透水润，密集滋养，修复损伤，抚平毛躁。</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="wrap_img"><img src="~static/prolist5.jpg" alt=""></div>
                        <h2 class="title">DSHUI本色竹纤维抽纸（16包）</h2>
                        <div class="model">
                            <div class="model_text">董事惠原创本色竹纤维抽纸不漂白.无添加.无尘屑不掉渣，柔棉更亲肤。采用优质竹浆更健康环保。</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="wrap_img"><img src="~static/prolist6.jpg" alt=""></div>
                        <h2 class="title">DSHUI本色竹纤维抽纸（单包）</h2>
                        <div class="model">
                            <div class="model_text">董事惠原创本色竹纤维抽纸不漂白.无添加.无尘屑不掉渣，柔棉更亲肤。采用优质竹浆更健康环保。</div>
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
    background: url("~static/beauty.jpg") #f9f9f9 center top no-repeat;
    padding-top: 300px;
}
div.content{
    width: 1500px;
    margin: 90px auto 60px;
    text-align: center;
    height: 900px;
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