<template>
    <div class="playMusic">
        <div class="bg">
            <img :src="playlist[playCurrentIndex].al.picUrl" alt="">
        </div>
        <div class="playTop">
            <div class="back">
                <svg class="icon" aria-hidden="true" @click="backs">
                    <use xlink:href="#icon-xiangzuo-jiantou"></use>
                </svg>
            </div>
            <div class="center">
                <div class="title">
                    <span behavior="slide" direction="left">{{playlist[playCurrentIndex].name}}
                        <!-- ({{playlist[playCurrentIndex].al.name}}) -->
                    </span>
                </div>
                <!-- <div class="author"></div> -->
            </div>
            <div class="share">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang5"></use>
                </svg>
            </div>
        </div>
        <div class="playContent" v-show="!isLyric" @click="change">
            <img class="needle" :class="{active:!paused}" src="@/assets/img/gen.png" alt="">
            <img class="disc" src="@/assets/img/quan.png" alt="">
            <img class="playImg" :src="playlist[playCurrentIndex].al.picUrl" alt="">
        </div>
        <div class="playLyric" v-show="isLyric" @click="change">
            <!-- <p v-for="(item,i) in $store.getters.lyricList" :key="i">{{item.lyric}}</p> -->
            <p>{{$store.state.lyric}}</p>
        </div>
        <div class="progress"></div>
        <div class="playFooter">
            <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xunhuanbofang"></use>
            </svg>
            <svg class="icon" aria-hidden="true"  @click="goPlay(-1)">
                    <use xlink:href="#icon-shangyishoushangyige"></use>
            </svg>
            <svg class="icon play" v-if="!paused" aria-hidden="true"  @click='play'>
                    <use xlink:href="#icon-zanting"></use>
            </svg>
            <svg class="icon play" v-else aria-hidden="true"  @click='play'>
                <use xlink:href="#icon-bofang3"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="goPlay(1)">
                <use xlink:href="#icon-xiayigexiayishou"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao1"></use>
            </svg>
        </div>
    </div>
</template>

<script>
import {mapState, computed} from 'vuex'
    export default {
       
        data(){
            return{
                isLyric: false,
            }
        },
        props: ['playDetail','play', 'paused'],
        computed: {    
            ...mapState(['playlist', 'playCurrentIndex','lyric'])
        },
        methods:{
            backs() {
                this.$router.go(-1)
                this.$emit('back')
            },
            // changePaused(){
            //     this.$store.commit('setPuased')
            //     // this.$emit("play")
            // },
            // backs() {
            //     this.$emit("back")
            // },
            change(){
                this.isLyric = !this.isLyric;
            },
            goPlay(num){
                // console.log(num);
                // console.log(this.playlist);
                // console.log(this.playCurrentIndex);
                let index = this.playCurrentIndex+num
                if(index<0){
                    index = this.playlist.length - 1;
                }else if(index == this.playlist.length){
                    index = 0
                }
                this.$store.commit('setPlayIndex', index)
                this.play()
                
            },
        }

    }
</script>

<style lang="less" scoped>
.playMusic {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #ccc;
    .bg img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-size: auto 100%;
        filter: blur(30px);
    }
    .playTop {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 6.8rem;
        height: 1.2rem;
        position: absolute;
        left: 0;
        top: 0;
        color: #fff;
        padding: 0 0.4rem;
        .icon {
            fill: #fff;
            width: 0.6rem;
            height: 0.6rem;
        }
        .center {
            font-size: 0.35rem;
            padding: 0 0.4rem;
            .title {
                display: flex;
                height: 1rem;
                line-height: 1rem;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
            }
        }
    }
    .playContent {
        position: absolute;
        height: 7.5rem;
        top: 1.2rem;
        left: 0;
        .needle{
            width: 2.5rem;
            height: 3.4rem;
            position: absolute;
            left: 3.5rem;
            transform-origin: 0.3rem 0;
            transform: rotate(-10deg);
            transition: all 2s;
            z-index: 10;
        }
        .needle.active{
            transform: rotate(10deg);
            transition: all 2s;
            z-index: 10;
        }
        .disc {
            width: 5.5rem;
            height: auto;
            position: absolute;
            left: calc(1rem);
            top:2.3rem
        }
        .playImg {
            width: 3.4rem;
            height: 3.4rem;
            border-radius: 1.7rem;
            position: absolute;
            left: 2rem;
            top: 3.3rem;
        }
    }
    .playFooter{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1.7rem;
        width: 6.5rem;
        padding: 0 0.4rem;
        // margin-bottom: 1rem; 
        .icon {
            color: #fff;
            height: 0.5rem;
            width: 0.5rem;
        }
        .play.icon {
            width: 0.8rem;
            height: 0.8rem;
        }   
    }
    .playLyric {
        position: relative;
        width: 6.8rem;
        height: 7.5rem;
        left: 0;
        top: 1.5rem;
        padding: 0.0.5rem;
        p {
            position: absolute;
            top: 0.5rem;
            left: 1.3rem;
            width: 5rem;
            height: 7.6rem;
            line-height: 0.8rem;
            text-align: center;
            padding: 0 0.5 ;
            overflow: auto;
        }
    }
}
</style>