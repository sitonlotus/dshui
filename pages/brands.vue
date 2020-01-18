<template>
    <div class="brands">
        <img src="~static/brands.jpg" alt="">
        <div class="brand_list">
            <a href="/beauty"><img src="~static/brand1.jpg" alt=""></a>
            <a href="/skin"><img src="~static/brand2.jpg" alt=""></a>
            <a href="/makeup"><img src="~static/brand3.jpg" alt=""></a>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.brands{
    width: 100%;
    height: auto;
}
.brands>img{
    width: 100%;
}
.brand_list{
    width: 1140px;
    height: auto;
    padding-top: 100px;
    padding-bottom: 100px;
    margin: 0 auto;
    overflow: auto;
}
.brand_list>a{
    display: block;
    float: left;
    width: 350px;
    height: 500px;
    margin-right: 40px;
}
.brand_list>a:last-child{
    margin-right: 0;
}
.brand_list>a>img{
    width: 100%;
    height: 100%;
}
</style>