<template>
    <div class="help">
        <div class="top_title">
            <h2>客服中心</h2>
            <div></div>
            <p class="top_info">DSHUI董事惠商城是河南妙选电子商务有限公司旗下社交电商品牌，成立于2016年，中国领创的一站式品质生活服务（购物）平台，致力于打造一站式品质生活购物平台，精选全球80多个国家1000余种品牌，服务中国亿万家庭，并以远高于行业平均增长速度的发展态势满足消费者日益多元的消费需求。DSHUI十分重视消费体验，专业服务团队竭力为每位用户带来独一无二的极致的购物体验。</p>
        </div>
        <div class="service">
            <ul>
                <li>
                    <img src="~static/tel.png" alt="">
                    <div class="main_content">
                        <p class="first">客服热线</p>
                        <p class="first">400-9010-321</p>
                    </div>
                </li>
                <li>
                    <img src="~static/time.png" alt="">
                    <div class="main_content">
                        <p class="first">客服工作时间</p>
                        <p class="first">周一至周日09:00-18:00，节假日除外</p>
                    </div>
                </li>
                <span></span>
            </ul>
            <ul>
                <li>
                    <img src="~static/email.png" alt="">
                    <div class="main_content">
                        <p class="first">联系邮箱</p>
                        <p class="first">henanmiaoxuan@163.com</p>
                    </div>
                </li>
                <span></span>
            </ul>
        </div>
        <div class="question">
            <div class="question_title">常见Q&A：</div>
            <h2>Q：如何下单？</h2>
            <p>1.通过DSHUI APP下单；</p>
            <p>2.通过DSHUI微信公众号商城下单。</p>
            <h2>Q：包邮日是什么？</h2>
            <p>DSHUI商城每月的10/20/30日为包邮日，凡订单金额满58元即可享受免运费（新疆、西藏等偏远地区除外）。</p>
            <h2>Q：发货时间？</h2>
            <p>正常情况下订单支付成功后48小时内按照订单顺序陆续发出；如遇包邮日等特殊情况，订单支付成功后5个工作日内按照订单顺序陆续发出。</p>
            <h2>Q：如何退款？</h2>
            <p>无货退款或商品质量问题的退款点击商城“个人中心”—“在线客服”提供您收到商品的快递照片、快递面单、全部产品及破损产品照片，3个工作日内客服会为您处理退款事宜。</p>
            
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
div.help{
    background: url("~static/helpBg.png") center top no-repeat;
}
div.top_title{
    width: 1020px;
    padding: 30px;
    margin: 0 auto;
}
div.top_title>h2{
    font-size: 32px;
    font-weight: 400;
    color: #fff;
    line-height: 1.8;
    margin: 0;
}
div.top_title>div{
    width: 50px;
    height: 4px;
    margin-top: 12px;
    margin-bottom: 12px;
    background-color: #ceba9a;
}
div.top_title>p.top_info{
    font-size: 16px;
    color: #fff;
    line-height: 1.8;
}
div.service{
    width: 1020px;
    height: auto;
    padding: 30px;
    margin: 0 auto;
    background: #fff;
}
div.service>ul{
    list-style-type: none;
    margin: 40px 0 0 0;
    padding: 0;
    position: relative;
    height: 72px;
}
div.service>ul>span{
    position: absolute;
    left: 50%;
    top: 10%;
    width: 2px;
    height: 80%;
    background: #f0efef;
}
div.service>ul>li{
    width: 510px;
    height: 72px;
    float: left;
}
div.service>ul>li>img{
    margin-left: 40px;
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;
}
div.service>ul>li>div{
    display: inline-block;
    vertical-align: middle;
}
div.service>ul>li>div>p{
    margin: 0;
    padding: 0;
    line-height: 36px;
    line-height: 1.5;
    color: #2b2b2b;
}
div.service>ul>li>div>p.first{
    font-size: 20px;
}
div.service>ul>li>div>p.second{
    font-size: 32px;
}
div.question{
    width: 1020px;
    height: auto;
    margin: 0 auto;
    padding: 50px 30px;
    margin-top: 20px;
    font-size: 18px;
    line-height: 1.8;
    background: #fff;
}
div.question>div.question_title{
    color:#ceba9a;
    font-size: 24px;
    line-height: 1;
}
div.question>h2{
    font-weight: bolder;
    margin-top: 30px;
    font-size: inherit;
    margin-bottom: 10px;
}
div.question>p{
    padding: 0;
    padding-left: 30px;
    margin: 0;
    font-size: 18px;
    color: #2b2b2b;
    line-height: 1.8;
}
</style>