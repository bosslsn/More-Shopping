<template>
  <div class="login">
    <ReturnTop :topText="'验证手机'" />
    <div class="phoneIn">
      <img src="http://img.dmallcdn.com/common/e2767579-05b5-4b08-87b1-12d4fc62d59f_750H" alt="">
      <phoneLogin />
    </div>
  </div>
</template>
<script>
import phoneLogin from './components/phoneLogin.vue'
export default {
  components: {
    phoneLogin
  },
  data () {
    return {
      // http://img.dmallcdn.com/common/e2767579-05b5-4b08-87b1-12d4fc62d59f_750H
    }
  }
}
</script>
<style scoped lang="scss">
.login {
  @include wh(100%, 100%);
  background: #f6f6f6;
}
.phoneIn, .phoneIn img {
  @include wh(100%, auto);
}
</style>
