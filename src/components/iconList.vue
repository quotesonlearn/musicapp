<template>
  <div class="iconList">
      <div class="iconItem">
          <svg class="icon search" aria-hidden="true">
          <use xlink:href="#icon-tuijian"></use>
          </svg>
          <span>每日推荐</span>
      </div>
      <div class="iconItem">
          <svg class="icon search" aria-hidden="true">
          <use xlink:href="#icon-yinleku"></use>
          </svg>
          <span>私人FM</span>
      </div>
      <div class="iconItem">
          <svg class="icon search" aria-hidden="true">
          <use xlink:href="#icon-icon-"></use>
          </svg>
          <span>歌单</span>
      </div>
      <div class="iconItem">
          <svg class="icon search" aria-hidden="true">
          <use xlink:href="#icon-paihangbang"></use>
          </svg>
          <span>排行榜</span>
      </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.iconList {
    display: flex;
    justify-content: space-between;
    padding: 0.3rem;
    .iconItem {
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
        width: 0.7rem;
        height: 0.7rem;
        }
        span {
            font-size: 0.28rem;
        }
    }
    
}
</style>