<template>
  <ul class="listDatas">
    <li
     v-for="(item, index) in leftList"
     :class="nowc === index ? 'allCk' : ''"
     :key="item.categoryId"
     @click="checkItem(index, item)"
    >{{item.categoryName}}</li>
  </ul>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {
    leftList: {
      type: Array,
      required: true
    },
    callback: {
      type: Function
    },
    nowc: {
      type: Number,
      default: 0
    },
    toZero: {
      type: Function
    }
  },
  methods: {
    checkItem (index, item) {
      this.toZero(index)
      this.callback(item)
    }
  }
}
</script>
<style scoped lang="scss">
.listDatas {
  @include wh(200px, 100%);
  overflow: scroll;
  margin-right: 20px;
  flex-shrink: 0;
}
.listDatas li {
  @include wh(100%, 112px);
  text-align: center;
  line-height: 112px;
  color: #999;
  background: #eee;
}
::-webkit-scrollbar {
  @include wh(0, 0);
}
.allCk {
  background: #fff !important;
  color: #000 !important;
}
</style>
