<template>
  <div class="buy_shop">
    <div class="shop_car_icon">
      <i class="iconfont iconcar">&#xe70e;</i>
    </div>
    <button class="addcar" @click="callback">
      加入购物车
    </button>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {
    callback: {
      type: Function,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
.buy_shop {
  @include wh(100%, 104px);
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  @include flex()
}
.shop_car_icon {
  flex: 1;
}
.addcar {
  @include wh(220px, 104px);
  border: 0;
  background: #ff712b;
  text-align: center;
  line-height: 102px;
  color: #fff;
}
.iconcar {
  font-size: 80px;
  margin-left: 35px;
  color: #777;
}
</style>
