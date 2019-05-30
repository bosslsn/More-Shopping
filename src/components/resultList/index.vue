<template>
  <ul class="resultListBox">
    <li @click="toHome(item)" class="dataList" v-for="item in listDatas" :key="item.id">
      <p>{{item.name}}</p>
      <p>{{item.district || item.address}}</p>
    </li>
  </ul>
</template>
<script>
import store from '@/store'
import storage from '@/utils/storage'
export default {
  data () {
    return {
      listData: []
    }
  },
  props: {
    listDatas: {
      type: Array
    }
  },
  methods: {
    toHome (data) {
      const path = this.$route.query.callback || '/tohome'
      storage.setItem('dmallData', data)
      store.state.gps_loction = data
      this.$router.replace(path)
    }
  }
}
</script>
<style scoped lang="scss">
.resultListBox {
  flex: 1;
  width: 100%;
  background: rgba(0, 0, 0, .3);
  overflow: scroll;
  position: relative;
  z-index: 99;
}
.dataList {
  @include wh(100%, 140px);
  background: #f6f6f6;
  border-bottom: 1px solid #eee;
  padding-left: 20px;
}
.dataList p {
  width: 100%;
  height: 60px;
  line-height: 60px;
}
</style>
