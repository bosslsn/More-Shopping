<template>
  <div class="listBox">
    <dl class="eveList" v-for="item in listData" :key="item.id">
      <dt>
        <img @click="callback(item)" :src="item.img" alt="">
      </dt>
      <dd>
        <p class="foodT" @click="callback(item)">{{item.name}}</p>
        <div class="priceCar">
          <span class="foodName">
            <sup>￥</sup>{{item.price}}
          </span>
          <div class="slotBox">
            <slot name="add"></slot>
          </div>
        </div>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {
    listData: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    },
    callback: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
<style scoped lang="scss">
.listBox {
  @include wh(100%, auto);
  @include flex(column);
}
.eveList {
  @include wh(100%, 200px);
  @include flex();
}
.eveList dt {
  @include wh(160px, 160px);
}
.eveList dt img {
  @include wh(100%, 100%);
}
.eveList dd {
  height: 100%;
  @include flex(column, flex-start, flex-start);
  margin-left: 20px;
  flex: 1;
}
.eveList dd p {
  height: 60px;
  line-height: 60px;
  margin-top: 20px;
}
.priceCar {
  width: 100%;
  margin-top: 15px;
  flex: 1;
  @include flex(row, flex-start, flex-start);
}
.foodName {
  font-size: 40px;
  font-weight: 800;
  flex: 1;
}
.foodName sup {
  font-size: 24px;
  margin-left: 6px;
  font-weight: 800;
}
.slotBox {
  @include flex(row, center, flex-end);
  margin-right: 60px;
}
.foodT {
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
