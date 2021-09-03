<template>
  <div class="home">
    <top-nav></top-nav>
    <swiper-com></swiper-com>
    <icon-list></icon-list>
    <music-list></music-list>
  </div>
</template>

<script>
// @ is an alias to /src
import topNav from '@/components/topNav.vue'
import swiperCom from '@/components/swiperCom.vue'
import iconList from '@/components/iconList.vue'
import musicList from '@/components/musicList.vue'
export default {
  name: 'Home',
  components: {
    swiperCom,
    topNav,
    iconList,
    musicList
  },
  data() {
    return {
       
    }
  },
  computed: {

  },
  
}
</script>
<style lang="less" scoped>


.icon {
       width: 0.3rem;
       height:0.3rem
}

</style>