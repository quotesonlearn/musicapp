<template>
    <div class="listviewTop">
        <img class="bg" :src="playlist.coverImgUrl" alt="">
        <!-- 头部 -->
        <div class="listviewTopNav">
            <div class="back" @click="$router.go(-1)">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-arrowLeft"></use>
                </svg>
                <span class="title">歌单</span>
            </div>
            <div class="right">
                <svg class="icon search" aria-hidden="true">
                    <use xlink:href="#icon-icon-1"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-diandiandianshu"></use>
                </svg>
            </div>
        </div>
        <!-- 头部结束 -->
        <!-- 中间 -->
        <div class="content">
            <div class="contentLeft">
                <img :src="playlist.coverImgUrl" alt="">
                <div class="count">
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                    </svg>
                    <span>{{changeValue(playlist.playCount)}}</span>
                </div>
            </div>
            <div class="contentRight">
                 <h3>{{playlist.name}}</h3>
                 <div class="author">
                     <img :src="playlist.creator.avatarUrl" alt="" class="header">
                     <span>{{playlist.creator.nickname}}</span>
                 </div>
                 <div class="description">{{playlist.description}}</div>
            </div>
        </div>
        <!-- 中间结束 -->
        <!-- iconlist开始 -->
        <div class="iconlist">
            <div class="iconitem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-pinglun"></use>
                </svg>
                <span>{{playlist.commentCount}}</span>
            </div>
            <div class="iconitem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang"></use>
                </svg>
                <span>{{playlist.shareCount}}</span>
            </div>
            <div class="iconitem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-download"></use>
                </svg>
                <span>下载</span>
            </div>
            <div class="iconitem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-duoxuan-"></use>
                </svg>
                <span>多选</span>
            </div>
        </div>   
        <!-- iconlist结束 -->
    </div>
</template>

<script>
    export default {
        props: ['playlist'],
        methods: {
            changeValue(num){
                let res = 0;
                if(num>=100000000){
                    res = num/100000000;
                    res = res.toFixed(2) + "亿"
                }else if(num>=10000){
                    res = num/10000,
                    res = res.toFixed(2) + "万"
                }
                return res
            }
        }
    }
</script>

<style lang="less" scoped>
.listviewTop {
    padding: 0 0.4rem;
    .bg {
        position: fixed;
        left: 0;
        top: 0;
        height: auto;
        z-index: -1;
        filter: blur(30px);
    }
    .listviewTopNav{
        display: flex;
        height: 1.2rem;
        align-items: center;
        justify-content: space-between;
        font-size: 0.35rem;
        // line-height: 1.2rem;
        .icon {
            height: 0.5rem;
            width: 0.5rem;
        }
        .title {
            margin-left: 0.4rem;
        }
        .search {
            margin-right: 0.4rem;
        }
        .back {
            display: flex;
            align-items: center;
            color: #000; 
        }
        .right{
            display: flex;
            align-items: center;
            color: #fff; 
        }
        
    }
    // .back .right {
    //     display: flex;
    //     align-items: center;
    //     color: #fff;
    // }
    .content{
        display: flex;
        margin-top: 0.3rem;
        justify-content: space-between;
        .contentLeft {
            position: relative;
            img {
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 0.1rem;
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
                    font-weight: 900;
                }
            }
        }
        .contentRight {
            width: 3.5rem;
            h3 {
                font-size: 0.3rem;
                color: #fff;
            }
            .author {
                display: flex;
                align-items: center;
                margin: 0.2rem 0;
                img.header {
                    width: 0.6rem;
                    height: 0.6rem;
                    border-radius: 0.3rem;
                    margin-right: o.2rem;
                }
                span {
                    color: #ccc;
                }
            }
            .description {
                font-size: 0.24rem;
                color: #ccc;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
    }
    .iconlist {
        display: flex;
        justify-content: space-around;
        margin-top: 0.4rem;
        .iconitem {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 0.3rem ;
                .icon {
                    padding-bottom: 0.1rem;
                    fill: #fff;
                    width: 0.5rem;
                    height: 0.5rem;
                }
                span {
                    font-size: 0.3rem;
                    color: #fff;
                }
        }
    }
}
</style>