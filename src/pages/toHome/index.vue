<template>
  <div class="toHome">
    <TopAddress />
    <div class="homeCenter">

    </div>
  </div>
</template>
<script>
import TopAddress from './components/topAddress'
export default {
  data () {
    return {

    }
  },
  components: {
    TopAddress
  }
}
</script>
<style scoped lang="scss">
.toHome {
  width: 100%;
  flex: 1;
  @include flex(column, center, center)
}
.homeCenter {
  width: 100%;
  flex: 1;
  margin-bottom: 100px;
  overflow: scroll;
}
</style>
