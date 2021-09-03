<template>
    <div class="searchTop">
        <div class="searchTopNav">
            <div class="back" @click="$router.go(-1)">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-arrowLeft"></use>
                </svg>
            </div>
            <div class="right">
               <input type="text" v-model="searchKeyword" :placeholder="placeholder" @keydown.enter="saveKeyword">
            </div>
        </div>
        <div class="history">
            <div class="historyLeft">
                历史
            </div>
            <div class="historyRight">
                <div class="keywordItem" v-for="(item,i) in keywordList" :key="i" @click="historySearch(item)">
                    {{item}}
                </div>
            </div>
            <div class="removeHistory">
                <svg class="icon" aria-hidden="true" @click="clear">
                    <use xlink:href="#icon-liebiao3"></use>
                </svg>
            </div>
        </div>

        <div class="searchSongs" v-show="searchSongs.length!==0">
            <div class="searchSongs-top">
                <div class="left">
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                    </svg>
                    <div class="text">
                        <div class="title">播放全部</div>
                        <div class="num">（共{{searchSongs.length}}首）</div>
                    </div>
                </div>
            </div>
            <div class="list">
                <div class="playItem" v-for="(item, i) in searchSongs" :key="i">
                    <div class="left" @click="setPlayIndex(item,i)">
                        <div class="index">{{i+1}}</div>
                        <div class="content">
                            <div class="title">{{item.name}}</div>
                            <div class="author">                      
                                <span class="hide">{{item.album.name}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <svg class="icon" aria-hidden="true" @click="setPlayIndex(item,i)">
                            <use xlink:href="#icon-bofang2"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-diandiandianshu"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {searchMusic} from '@/api/index.js';
import {mapMutations} from 'vuex'
    export default {
        props: ['playlist'],
        data() {
            return{
                placeholder: "陈奕迅",
                keywordList:[],
                searchKeyword: '',
                searchSongs: []
            }
        },
        beforeMount() {
            this.keywordList = localStorage.keywordList? JSON.parse(localStorage.keywordList): []
        },
        methods: {
            async saveKeyword(){
                this.keywordList.push(this.searchKeyword)
                this.keywordList = Array.from(new Set(this.keywordList))
                if(this.keywordList.length>10){
                    this.keywordList = this.keywordList.sclice(this.keywordList.length-10, this.keywordList.length)
                }
                localStorage.keywordList = JSON.stringify(this.keywordList)
                // console.log(this.keywordList);
                let result = await searchMusic(this.searchKeyword)
                // console.log(result);
                this.searchSongs = result.data.result.songs
            },
            clear(){
                window.localStorage.removeItem(this.keywordList)
                this.keywordList = []
            },
            ...mapMutations(['setPlayIndex']),
            historySearch(keyword){
                this.searchKeyword = keyword;
                this.saveKeyword()
            },
            setPlayIndex(item, i){
                item.al = item.album;
                item.al.picUrl = item.album.artist.img1v1Url
                this.$store.commit('pushPlaylist',item)
                this.$store.commit('setPlayIndex',this.$store.state.playlist.length-1)
                this.$store.commit('setPuased')
                
            }
        }
    }
</script>

<style lang="less" scoped>
.searchTop {
    padding: 0 0.4rem;
    .searchTopNav{
        display: flex;
        height: 1.2rem;
        line-height: 1.2rem;
        width: 100%;
        align-items: center;
        font-size: 0.35rem;
        .back {
            padding-right: 0.03rem;
            .icon {
            height: 0.5rem;
            width: 0.5rem;
            }
        }
        .right {
            padding: 0 0.5rem;
            flex: 1;
            input {
                width: 5.2rem;
                border: none;
                outline: none;
                border-bottom: 1px solid #666;
                font-size: 0.3rem;
            }
        }       
    }
    .history {
        display: flex;
        align-items: center;
        // justify-content: space-between; 
        .historyLeft {
            width: 1.4rem;
            height: 1.2rem;
            line-height: 1.2rem;
        }
        .historyRight {
            color: #666;
            display: flex;
            flex-wrap: wrap;
            flex: 1;
            .keywordItem {
                background-color: #eee;
                height:0.8rem;
                padding: 0 0.3rem;
                line-height: 0.8rem;
                border-radius: 0.5rem;
                font-size: 0.28rem;
                margin: 0.01rem 0.01rem;
            }
        }
        .removeHistory {
            // flex: 1;
            .icon {
                width: 0.6rem;
                height: 0.6rem;
            }
        }
    }
    .searchSongs {
        margin-top: 0.15rem;
        padding: 0 0.02rem;
        .searchSongs-top {
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
    
}
</style>