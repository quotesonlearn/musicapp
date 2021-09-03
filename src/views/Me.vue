<template>
    <div class="user">
        <div class="one">
            <div class="bg">
                <img src="../assets/img/swiper1.jpg" alt="">
            </div>
            <div class="back">
                <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                    <use xlink:href="#icon-arrowLeft"></use>
                </svg>
                <svg class="icon" aria-hidden="true" >
                    <use xlink:href="#icon-shezhi1"></use>
                </svg>
            </div>    
        </div>
        <div class="second">
            <div class="userDetail">
                <div class="pic">
                    <img src="../assets/img/swiper1.jpg" alt="">
                </div>
                <div class="detail">
                    <p class="nikName">恶霸</p>
                    <span>关注:8</span>
                    <span>粉丝:10000</span>
                </div>
            </div>
        </div>
        <div class="three">
            <p>个性装扮</p>
            <p>边听边存</p>
            <p>青少年模式</p>
            <p>夜间模式</p>
            <p>关于</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.user{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // height: 9rem;
    .one{
        position: relative;
        margin-top: 1rem;
        height: 8%;
        background-color: #fff;
        .bg{
            position: fixed;
            top: 0;
            left: 0;
            img{
                height: 100%;
                width: 100%;
                filter: blur(10px);
            }
        }
        .back{
            display: flex;
            justify-content: space-between;
            position: fixed;
            top: 0.2rem;
            left: 0.2rem;
            width: 6.6rem;
            padding: 0.2rem;
            .icon{
                color: #fff;
                width: 0.5rem;
                height: 0.5rem;
            }
        }
    }
    .second{
        margin: 0.5rem;
        position: relative;
        height: 2rem;
        background: #fff;
        border-radius: 0.4rem;
        
        .userDetail{
            display: flex;
            padding: 0.2rem;
            height: 2rem;
            .pic {
                padding: 0.05rem 0.2rem 0;
                height: 1.4rem;
                width: 1.4rem;
                img {
                    border-radius: 0.7rem;
                    width: 100%;
                    height: 100%;
                }
            }
            .detail {
                padding-right: 0.2rem;
                height: 2rem;
                .nikName{
                    height: 0.8rem;
                    padding: 0.1rem;
                    font-weight: 900;
                    font-size: 0.5rem;
                }
                span {
                    padding: 0 0.1rem;
                }
            }
        }

    }
    .three {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 8.2rem;
        background-color: #fff;
        p{
            padding: 0 0.6rem;
            font-size: 0.3rem;
            height: 1rem;
            border-bottom: 1px solid #ccc;

        }
    }
}
</style>