<template>
  <div class="detailBox">
    <ReturnTop />
    <BannerC :dataList="listData"/>
    <div class="food_detail">
      <h3 class="food_title">{{detailData.name}}</h3>
      <p class="food_det">{{detailData.name}}</p>
      <span class="priceBox">￥<span class="prices">{{detailData.price}}</span></span>
    </div>
    <p class="getTime">现在下单，预计今天12:00-13:30送达</p>
    <div v-html="detailData.details" class="detailImg"></div>
    <CarBtn :callback="clickCar"/>
  </div>
</template>
<script>
import api from '@/api'
import CarBtn from './components/carBtn'
export default {
  data () {
    return {
      listData: [],
      detailData: {}
    }
  },
  components: {
    CarBtn
  },
  created () {
    api.getDetail({id: this.$route.query.id}).then((res) => {
      this.detailData = res
      this.listData = JSON.parse(res.imgList)
      this.listData.unshift(res.img)
    })
  },
  methods: {
    clickCar () {
      api.addCar({id: this.detailData.id}).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style scoped lang="scss">
.detailBox {
  padding-bottom: 104px;
}
.food_detail {
  @include wh(100%, auto);
  padding: 0 20px;
}
.food_title {
  font-size: 36px;
  line-height: 70px;
}
.food_det {
  font-size: 28px;
  color: #808080;
}
.priceBox {
  display: block;
  height: 60px;
  color: #FF712B;
  font-size: 24px;
}
.prices {
  font-size: 40px;
}
.getTime {
  height: 96px;
  padding: 0 20px;
  line-height: 96px;
  color: #21292B;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
</style>
<style>
.detailImg p {
  width: 100%;
}
.detailImg p img {
  width: 100% !important;
}
</style>
