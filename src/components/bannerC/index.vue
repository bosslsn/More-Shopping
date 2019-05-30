<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in dataList" :key="index">
          <img :src="item" alt="">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {

    }
  },
  mounted () {
    // eslint-disable-next-line no-new
    new Swiper('.swiper-container', {
      observer: true, // 修改swiper自己或子元素时，自动初始化swiper
      observeParents: true // 修改swiper的父元素时，自动初始化swiper
    })
  },
  props: {
    dataList: {
      type: Array
    }
  }
}
</script>
<style scoped lang="scss">
.swiper-container, .swiper-wrapper, .swiper-slide, img {
  @include wh(100%, auto);
}
</style>
