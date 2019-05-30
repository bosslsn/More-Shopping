<template>
  <div class="checkAddress">
    <ReturnTop :isSelect=true />
    <SearchAddress />
    <tryAddress />
    <addUserdress />
  </div>
</template>
<script>
import tryAddress from './components/tryAddress.vue'
import addUserdress from './components/addUserdress'
export default {
  components: {
    tryAddress,
    addUserdress
  },
  data () {
    return {

    }
  }
}
</script>
<style scoped lang="scss">
.checkAddress {
  @include wh(100%, 100%);
  display: flex;
  flex-direction: column;
  background: #f6f6f6;
}
</style>
