<template>
  <div class="locationBox">
    <img src="http://static.dmall.com/kayak-project/address/dist/address/common/image/logo-slogan-new.png" alt="">
  </div>
</template>
<script>
import Map from '@/utils/map'
import store from '@/store'
export default {
  data () {
    return {

    }
  },
  mounted () {
    const path = this.$route.query.callback || '/tohome'
    console.log(path)
    Map.geolocation().then((res) => {
      store.state.gps_loction = res.crosses[0]
      this.$router.replace('/tohome')
    }).catch(() => {
      this.$router.replace({
        path: '/address',
        query: {
          callback: path
        }
      })
    })
  }
}
</script>
<style scoped lang="scss">
.locationBox {
  @include wh(100%, 100%);
  background: #F6F6F6;
}
#map {
  @include wh(100%, 500px);
}
</style>
