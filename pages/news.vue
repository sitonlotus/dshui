<template>
    <div class="news_list">
        <ul>
            <li>
                <a href="#">
                    <div class="news_img">
                        <img src="~static/news1.jpg" alt="">
                    </div>
                    <p class="time">2019-02-24 22:53:49</p>
                    <p class="brief">2019别人脱单你脱发？DSHUI董事惠赐你神助攻，轻松摆脱烦恼</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <div class="news_img">
                        <img src="~static/news2.jpg" alt="">
                    </div>
                    <p class="time">2019-02-24 21:29:45</p>
                    <p class="brief">董事惠：2019做自己的“橱窗”</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <div class="news_img">
                        <img src="~static/news3.jpg" alt="">
                    </div>
                    <p class="time">2019-02-23 22:12:33</p>
                    <p class="brief">董事惠DSHUI教您“养生”小妙招 —— 坚果篇！</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <div class="news_img">
                        <img src="~static/news4.jpg" alt="">
                    </div>
                    <p class="time">2019-02-21 12:18:20</p>
                    <p class="brief">给父母的新年护肤品，DSHUI董事惠准备好了</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <div class="news_img">
                        <img src="~static/news5.jpg" alt="">
                    </div>
                    <p class="time">2019-02-20 17:59:38</p>
                    <p class="brief">董事惠DSHUI商城 —— 精致生活分享家</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <div class="news_img">
                        <img src="~static/news6.jpg" alt="">
                    </div>
                    <p class="time">2019-01-21 17:12:30</p>
                    <p class="brief">DSHUI 植萃深度浸透补水面膜</p>
                </a>
            </li>
        </ul>
        <div class="pagenation">
            <ul>
                <li class="left"><a href="#">&lt;</a></li>
                <li><a href="#">1</a></li>
                <li class="right"><a href="#">&gt;</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.news_list{
    width: 1100px;
    height: 600px;
    margin: 0 auto;
    padding-bottom: 50px;
}
.news_list>ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: auto;
}
.news_list>ul>li{
    display: block;
    float: left;
    width: 365px;
    height: 300px;
}
.news_list>ul>li:hover{
    box-shadow: 0 0 15px hsla(0, 0%, 60%, 0.3)
}
.news_list>ul>li>a{
    display: block;
    text-decoration: none;
}
.news_list>ul>li>a>div.news_img{
    margin: 0 20px 20px 20px;
    padding-top: 20px;
    width: 325px;
    height: 160px;
    overflow: hidden;
}
.news_list>ul>li>a>div.news_img>img{
    width: 325px;
    height: auto;
}
.news_list>ul>li>a>p.time{
    font-size: 16px;
    color: #555;
    margin: 0;
    padding-left: 20px;
    padding-right: 20px;
}
.news_list>ul>li>a>p.brief{
    margin: 0;
    font-size: 17.6px;
    line-height: 1.5;
    -webkit-line-clamp:3;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: 1px;
    color: #666;
    transition: all 0.3s;
    padding-left: 20px;
    padding-right: 20px;
}
div.pagenation{
    width: 1080px;
    height: 45px;
    margin: 0 auto;
    text-align: center;
    line-height: 45px;
}
div.pagenation>ul{
    margin: 0 auto;
    padding: 0;
    list-style-type: none;
}
div.pagenation>ul>li{
    display: inline-block;
    width: 24px;
    height: 24px;
}
div.pagenation>ul>li>a{
    font-family: "Monospaced Number";
    color: #dfb97c;
    margin: 0 6px;
    text-decoration: none;
    font-weight: 500;
    font-size: 30px;
}
div.pagenation>ul>li.left>a,div.pagenation>ul>li.right>a{
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    vertical-align: middle;
    color: #eee;
}
</style>