<template>
  <div class="adduserdress" @click="addAddress">
    <i class="iconfont newAddress">&#xe651;</i>
    <span class="newText">新增地址</span>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    addAddress () {
      this.$router.push('/newAddress')
    }
  }
}
</script>
<style scoped lang="scss">
.adduserdress {
  @include wh(100%, 88px);
  background: #fff;
  @include flex();
  color: #ff712b;
}
.newAddress {
  font-size: 15px;
}
.newText {
  line-height: 20px;
  margin-left: 10px;
}
</style>
