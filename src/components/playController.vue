<template>
    <div class="playController">
        <div class="left" @click="back">
            <!-- @click="isShow = !isShow" -->
            <img :src="playlist[playCurrentIndex].al.picUrl" alt="">
            <div class="content">
                <div class="title">{{playlist[playCurrentIndex].name}}</div>
                <div class="tips">横划可以切换上下首哦</div>
            </div>
        </div>
        <div class="right">
            <svg class="icon" v-show="paused" aria-hidden="true" @click="plays" >
                <use xlink:href="#icon-icon-2"></use>
            </svg>
            <svg class="icon" v-show="!paused" aria-hidden="true" @click="plays" >
                <use xlink:href="#icon-zanting"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gedan"></use>
            </svg>
        </div>
        <play-music @back="isShow=!isShow" :play="plays" :paused="paused" v-show="isShow" :playDetail="playlist[playCurrentIndex]"></play-music>
        <audio  ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
    </div>
</template>

<script>
import playMusic from './playMusic.vue'
import {useStore} from 'vuex'
import {mapState, mapMutation} from 'vuex'
import {computed} from 'vue'
    export default {
        components: {
            playMusic
        },
        data(){
            return{
                paused: true,
                isShow: false,   
            }
        },
        computed: {
            ...mapState(['playlist', 'playCurrentIndex'])
        },
        mounted() {
            // console.log(this.playlist[this.playCurrentIndex]);
            this.$store.dispatch(`reqLyric`,{id:this.playlist[this.playCurrentIndex].id})
        },
        updated(){
            this.$store.dispatch(`reqLyric`,{id:this.playlist[this.playCurrentIndex].id})
        },
        methods: {           
            plays() {
               if(this.$refs.audio.paused){
                    this.$refs.audio.play()
                    this.paused = false
               }else{
                    this.$refs.audio.pause()
                    this.paused = true
               }
            //    this.$store.commit('setPuased')  
            //    console.log("123");            
            },
            back(){
                this.isShow = !this.isShow
                this.$router.push('./playmusic')
            }
        },



        // setup() {
        //     const store = useStore()
        //     const pausedState = computed(() => store.state.paused)           
        //     //     if(pausedState){
        //     //         $refs.audio.play()
        //     //         // this.paused = false
        //     //    }else{
        //     //         $refs.audio.pause()
        //     //         // this.paused = true
        //     //    }
        //         return {pausedState}
        // }
    }
</script>

<style scoped lang="less">
.playController {
    background-color: #fff;
    position: fixed;
    height: 1.2rem;
    width: 7.5rem;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ccc;
    .left {
        display: flex;
        padding: 0 0.2rem;
        align-items: center;
        img {
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 0.4rem;
        }
        .content {
            padding: 0 0.2rem;
            .title{
                width: 4rem;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
            }
            .tips {
                font-size: 0.2rem;
                color: #999;
            }
        }
    }
    .right {
        .icon {
            padding: 0 0.2rem;
            width: 0.5rem;
            height: 0.5rem;
        }
    }
}
</style>