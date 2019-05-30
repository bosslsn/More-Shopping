<template>
  <div class="redirectAddress" @click="redirectAdd">
    <i class="iconfont iconaddress">&#xe61c;</i>
    <span class="addressText">
      定位到当前位置
    </span>
    <div class="alertAddress">
      <div class="bg" v-if="ishow"></div>
      <ResultList :listDatas="listData"/>
    </div>
  </div>
</template>
<script>
import Map from '@/utils/map'
export default {
  data () {
    return {
      ishow: false,
      listData: []
    }
  },
  methods: {
    redirectAdd () {
      Map.geolocation('try').then((res) => {
        this.ishow = true
        this.listData = res.pois
        console.log(res.pois)
      }).catch(() => {
        console.log('定位失败')
      })
    }
  }
}
</script>
<style scoped lang="scss">
.redirectAddress {
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 0;
  top: 200px;
  @include flex(row, flex-start, center);
  background: #fff;
}
.iconaddress {
  font-size: 50px;
  color: #ccc;
  margin: 15px 15px;
}
.addressText {
  line-height: 60px;
  color: #888;
}
.alertAddress {
  width: 100%;
  max-height: 70%;
  overflow: scroll;
  position: fixed;
  left: 0;
  bottom: 0;
}
.bg {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 12;
  @include wh(100%, 100%);
  background: rgba(0, 0, 0, .3);
}
</style>
