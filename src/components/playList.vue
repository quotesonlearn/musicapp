<template>
    <div class="playList">
        <div class="playlist-top">
            <div class="left">
                <svg class="icon" aria-hidden="true">
                   <use xlink:href="#icon-bofang"></use>
                </svg>
                <div class="text">
                    <div class="title">播放全部</div>
                    <div class="num">（共{{playlist.tracks.length}}首）</div>
                </div>
            </div>
            <div class="btn">
                +收藏（{{playlist.subscribedCount}}）
            </div>
        </div>
        <div class="list">
            <div class="playItem" v-for="(item, i) in playlist.tracks" :key="i">
                <div class="left" @click="setPlayIndex(i)">
                    <div class="index">{{i+1}}</div>
                    <div class="content">
                        <div class="title">{{item.name}}</div>
                        <div class="author">
                            <span class="tag" v-for="(tag, index) in playlist.tags" :key="index">{{tag}}</span>
                            <span class="hide">{{item.al.name}}</span>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <svg class="icon" aria-hidden="true" @click="setPlayIndex(i)">
                        <use xlink:href="#icon-bofang2"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-diandiandianshu"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
    export default {
        props: ['playlist'],
        methods: {
            changeValue(num) {
                let res = 0;
                if(num>=100000000){
                    res = num/100000000;
                    res = res.toFixed(2) + "亿"
                }else if(num>=10000){
                    res = num/10000,
                    res = res.toFixed(2) + "万"
                }
                return res
            },
            ...mapMutations(['setPlayIndex']),
        }
    }
</script>

<style lang="less" scoped>
.playList {
    margin-top: 0.3rem;
    padding: 0 0.4rem;
    .playlist-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 0.25rem;
        padding-bottom: 0.2rem;
        height: 0.81rem;
        line-height: 0.8rem;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
        background-color: #fff;
        .left {
            display: flex;
            align-items: center;
            .icon {
                width: 0.5rem;
                height: 0.5rem;
                padding-right: 0.1rem;
            }
            .text {
                display: flex;
                align-items: center;
                .title {
                font-size: 0.35rem;
                }
                .num {
                font-size: 0.3rem;
                color: #ccc;
                }
            }
        }
        .btn {
            margin-right: 0.05rem;
            padding: 0.25rem;
            height: 0.25rem;
            line-height: 0.25rem;
            border-radius: 0.6rem;
            background-color: orangered;
        }
    }
    .list {
        background-color: #fff;
        padding: 0.3rem;
        padding-bottom: 1.4rem;
        color: #fff;
        .playItem {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 1.5rem;
            .left {
                display: flex;
                align-items: center;
                color: #666;
                .index {
                    width: 0.4rem;
                }
                .content {
                    margin-left: 0.3rem;
                    .title {
                        width: 4rem;
                        margin-bottom: 0.1rem;
                        font-size: 0.3rem;
                        // font-weight: 900;
                        color: #000;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        overflow: hidden;
                    }
                    .author {
                        display: flex;
                        align-items: center;
                        color: #666;
                       .tag {
                        display: inline-block;
                        font-size: 0.08rem;
                        color: orangered;
                        border: 1px solid orangered;
                        border-radius: 0.1rem;
                        }
                        .hide{
                            display: inline-block;
                            width: 2rem;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 1;
                            overflow: hidden;
                        }
                    }
                }
                
            }
            .right {
                width: 1.3rem;
                .icon {
                    margin: 0 0.1rem;
                    height: 0.4rem;
                    width: 0.4rem;
                }
            }
        }
    }
}
</style>