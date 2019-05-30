<template>
  <div class="detailList">
    <ListC :listData="listData" :callback="callback">
      <span @click="changeNum('+')" v-if="!isShow" class="addBtn" slot="add">+</span>
      <changNumC :callback="changeNum" v-if="isShow" slot="add" />
    </ListC>
    <!-- <p @click="callback(item)" v-for="item in listData" :key="item.id">{{item.name}}</p> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  props: {
    listData: {
      type: Array,
      required: true
    },
    callback: {
      type: Function,
      default: () => {}
    },
    changeNum: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
<style scoped lang="scss">
.detailList {
  width: 100%;
  height: 1070px;
  overflow: scroll;
}
.addBtn {
  display: block;
  @include wh(55px, 45px);
  background: #ff712b;
  text-align: center;
  line-height: 43px;
  color: #fff;
  border-radius: 10px;
}
</style>
