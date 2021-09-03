<template>
    <div class="topNav">
      <div class="topLeft">
        <svg class="icon search" aria-hidden="true">
          <use xlink:href="#icon-gedan"></use>
        </svg>
      </div>
<!-- 中间导航开始 -->
      <div class="topCenter">
        <span class="navBtn" @click="$router.push('/me')">我的</span>
        <span class="navBtn active">发现</span>
        <span class="navBtn">云村</span>
        <span class="navBtn">视频</span>
      </div>
<!-- 中间导航结束 -->
      <div class="topRight" @click="$router.push('./searchview')">
        <svg class="icon  search" aria-hidden="true">
          <use xlink:href="#icon-icon-1"></use>
        </svg>
      </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.topNav{
    height: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
    .icon{
        width: 0.5rem;
        height: 1rem;
    }
    .search {
        width: 0.45rem;
        height: 0.45rem;
    }
    .topCenter {
        width: 4.5rem;
        display: flex;
        justify-content: space-around;
        .navBtn {
          font-size: 0.35rem;;
        }
        .active {
            font-weight: 900;
            // font-size: 20px;
        }
    }

}
</style>