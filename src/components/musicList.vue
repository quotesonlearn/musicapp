<template>
    <div class="musicList">
        <div class="musicList-top">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="mlist">
            <div class="swiper-container" id="musicSwiper">
                <div class="swiper-wrapper">
                    <!-- //去到view里面的listview-->
                    <router-link :to="{path:'/listview', query:{id:item.id}}" class="swiper-slide" v-for="(item, i) in state.musicList" :key="i">
                        <img :src="item.picUrl" :alt="item.name">
                        <div class="name">{{item.name}}</div>
                        <div class="count">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang"></use>
                            </svg>
                            <span>{{changeValue(item.playCount)}}</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'swiper/css/swiper.css'
import Swiper from 'swiper';
import {getMusicList} from '@/api/index.js'
import {reactive, onMounted, onUpdated} from 'vue'
    export default {
        setup() {
            let state = reactive({musicList:[]})
            function changeValue(num){
                let res = 0;
                if(num>=100000000){
                    res = num/100000000;
                    res = res.toFixed(2) + "亿"
                }else if(num>=10000){
                    res = num/10000,
                    res = res.toFixed(2) + "万"
                }
                return res
            };
            onMounted(async() => {
                let result = await getMusicList()
                state.musicList = result.data.result
            })
            onUpdated(() => {
                var swiper = new Swiper('#musicSwiper', {
                    slidesPerView: 3,
                    spaceBetween: 15,
                    centeredSlides: true,
                    loop: true,
                    // pagination: {
                    //     el: '.swiper-pagination',
                    //     clickable: true,
                    // },
                });
            })
            return{
                state, changeValue
            }
        }
        //vue2的方法实现
        // data(){
        //     return {
        //         musicList: []
        //     }
        // },
        // async mounted() {
        //     let result = await getMusicList()
        //     this.musicList = result.data.result       
        // },
        // updated(){
        //     var swiper = new Swiper('#musicSwiper', {
        //         slidesPerView: 3,
        //         spaceBetween: 15,
	    //         centeredSlides: true,
	    //         loop: true,
        //         pagination: {
        //             el: '.swiper-pagination',
        //             clickable: true,
        //         },
        //     });
        // },
        // methods: {
        //     changeValue(num){
        //         let res = 0;
        //         if(num>=100000000){
        //             res = num/100000000;
        //             res = res.toFixed(2) + "亿"
        //         }else if(num>=10000){
        //             res = num/10000,
        //             res = res.toFixed(2) + "万"
        //         }
        //         return res
        //     }
        // }
    }
</script>

<style lang="less" scoped>
.musicList {
    height: 1rem;
    padding: 0 0.4rem;
    .musicList-top {
        display: flex;
        padding: 0.15rem 0;
        justify-content: space-between;
        align-items: center;
        .title {
            font-size: 0.3rem;
            font-weight: 800;
        }
        .more {
            height: 0.3rem;
            border: 1px solid #ccc;
            padding: 0.05rem;
            border-radius: 0.1rem;
            font-size: 0.24rem;
            text-align: center;
            line-height: 0.3rem;
        }
    }
    .mlist {
        .swiper-container{
            height: 3rem;
        }
        .swiper-slide {
            display: flex;
            flex-direction: column;
            position: relative;
            .img {
                width: 100%;
                height: auto;
            }
            .name{
                height: 0.45rem;
                width: 100%;
                font-size: 0.26rem;
                line-height: 0.45rem;
            }
            .count {
                position:absolute;
                display: flex;
                align-items: center;
                right: 0.05rem;
                top: 0.05rem;
                font-size: 0.3rem ;
                color: #ccc;
                .icon {
                    font-weight: 800;
                    fill: #ccc;
                    height: 0.3rem;
                }
            }
        }
    }
}
</style>