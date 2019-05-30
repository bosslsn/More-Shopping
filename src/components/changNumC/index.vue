<template>
  <div class="changNumBox">
    <span @click="callback('-')">-</span>
    <div>{{num}}</div>
    <span @click="callback('+')">+</span>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {
    num: {
      type: Number,
      default: 1
    },
    callback: {
      type: Function,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
.changNumBox {
  @include wh(130px, 50px);
  @include flex();
  border: 1px solid #ccc;
}
.changNumBox div {
  @include wh(50px, 100%);
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  text-align: center;
  line-height: 45px;
}
.changNumBox span {
  text-align: center;
  line-height: 45px;
  display: block;
  @include wh(40px, 50px);
}
</style>
