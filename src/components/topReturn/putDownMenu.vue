<template>
  <div class="selectBox">
    <select v-model="selVal" @change="changeVal(selVal)">
      <option :value="item" v-for="item in provinceList" :key="item">{{item}}</option>
    </select>
    <i class="iconfont selecticon">&#xe65a;</i>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selVal: '请选择'
    }
  },
  props: {
    provinceList: {
      type: Array
    },
    changeVal: {
      type: Function
    }
  }
}
</script>
<style scoped lang="scss">
.selectBox {
  position: relative;
}
select {
  @include wh(387px, 80px);
  border: 0;
  font-size: 34px;
  appearance:none;
  padding-left: 20px;
}
.selecticon {
  position: absolute;
  right: 10px;
  top: 25px;
}
i {
  font-size: 35px;
  color: #dce0e0;
}
</style>
