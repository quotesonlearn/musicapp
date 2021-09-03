<template>
     <div class="box">
            <!-- 轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,i) in imgs" :key="i"><img :src="item.pic"></div>
            </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        
    
        </div>
        <!-- 轮播图结束 -->
     </div>
</template>

<script>
import 'swiper/css/swiper.css'
import Swiper from 'swiper'; 
import{ getBanner} from '../api/index'
export default {
    data() {
        return {
            imgs: [
                {pic: require('../assets/img/swiper1.jpg')},
                {pic: require('../assets/img/swiper2.jpg')},
                {pic: require('../assets/img/swiper3.jpg')},
            ]
        }
    },
    async mounted() {
    var mySwiper = new Swiper('.swiper-container',{
        loop: true, // 循环模式选项
    
        // 如果需要分页器
        pagination: {
         el: '.swiper-pagination',
        },
    });
    let res = await getBanner(1)
    this.imgs = res.data.banners 
  }
}
</script>
<style lang="less">

.box{
    display: flex;
    padding: 0 0.2rem;
    .swiper-container {
    width: 7.1rem;
    height:2.6rem;
    border-radius: 0.1rem; 
    }
    .swiper-slide img{
        width: 100%;
    }
    .swiper-pagination-bullet-active {
        background-color: skyblue !important;
    }
}

</style>