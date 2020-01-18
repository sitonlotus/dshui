<template>
    <div class="beauty">
        <div class="content">
            <ul>
                <li>
                    <a href="#">
                        <div class="wrap_img"><img src="~static/skinlist1.jpg" alt=""></div>
                        <h2 class="title">DSHUI水凝净润氨基酸洁面霜</h2>
                        <div class="model">
                            <div class="model_text">温和配方，安全清爽，活力水润，提亮肤色，收敛毛孔，董事惠，您的品质之选。</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="wrap_img"><img src="~static/skinlist2.jpg" alt=""></div>
                        <h2 class="title">DSHUI水凝透润酵素精华肌底液</h2>
                        <div class="model">
                            <div class="model_text">沁透肌底，持久修复，持久滋养，润泽保湿，董事惠，您的品质之选。</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="wrap_img"><img src="~static/skinlist3.jpg" alt=""></div>
                        <h2 class="title">DSHUI水凝透润胶原露</h2>
                        <div class="model">
                            <div class="model_text">亮肤白皙，补水润泽，焕活年轻，增强吸收，董事惠，您的品质之选。</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="wrap_img"><img src="~static/skinlist4.jpg" alt=""></div>
                        <h2 class="title">DSHUI凝眸提拉眼精华</h2>
                        <div class="model">
                            <div class="model_text">润湿柔韧，提亮眼周，舒缓老化，提拉紧致，明眸善睐，换发睛彩，董事惠，您的品质之选。</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="wrap_img"><img src="~static/skinlist5.jpg" alt=""></div>
                        <h2 class="title">DSHUI逆时塑颜精华液</h2>
                        <div class="model">
                            <div class="model_text">补水润泽，提拉紧致，深层去皱，逆转时光，娇颜永驻，董事惠，您的品质之选。</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="wrap_img"><img src="~static/skinlist6.jpg" alt=""></div>
                        <h2 class="title">DSHUI水凝透润补水精华乳</h2>
                        <div class="model">
                            <div class="model_text">沁透补水，醒肤焕白，盈润滋养，延缓衰老，董事惠，您的品质之选。</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="wrap_img"><img src="~static/skinlist7.jpg" alt=""></div>
                        <h2 class="title">DSHUI水凝透润补水保湿霜</h2>
                        <div class="model">
                            <div class="model_text">深层滋润，水油平衡，锁水补水，高效美白，董事惠，您的品质之选。</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="wrap_img"><img src="~static/skinlist8.jpg" alt=""></div>
                        <h2 class="title">DSHUI植萃深度浸透补水面膜</h2>
                        <div class="model">
                            <div class="model_text">董事惠面膜采用天然植物提取精华，给肌肤注入源源水动力，深度滋养，锁水，保湿，董事惠，您的品质之选。</div>
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
    background: url("~static/skin.jpg") #f9f9f9 center top no-repeat;
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