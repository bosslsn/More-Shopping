<template>
  <div class="nowAddress">
    <div class="leftAdd" @click="toAddress">
      <i class="iconfont iconsaddress">&#xe64f;</i>
      <span class="nowaddresss">送至：{{nowAdd}}</span>
      <i class="iconfont iconsright">&#xe65b;</i>
    </div>
    <i class="iconfont iconsserach">&#xe615;</i>
    <span class="userImg">
      <img :src="userImg" alt="">
    </span>
  </div>
</template>
<script>
import store from '@/store'
export default {
  data () {
    return {
      nowAdd: '',
      userImg: ''
    }
  },
  mounted () {
    this.userImg = store.state.into.photo
    this.nowAdd = store.state.gps_loction.name
  },
  methods: {
    toAddress () {
      this.$router.push({
        path: '/address',
        query: {
          callback: 'toHome'
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
.nowAddress {
  @include wh(100%, 84px);
  @include flex(row, flex-start, center);
}
.userImg {
  @include wh(48px, 48px);
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}
.userImg img{
  @include wh(100%, 100%);
}
.iconsaddress {
  font-size: 48px;
  color: #aaa;
}
.iconsright {
  font-size: 40px;
  color: #ddd;
}
.iconsserach {
  font-size: 40px;
  color: #aaa;
  margin: 20px 30px;
}
.leftAdd {
  flex: 1;
}
.nowaddresss {
  display: inline-block;
  width: 450px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
}
</style>
