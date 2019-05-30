<template>
  <div class="typeBoxs">
    <div v-if="listType==='max'" class="topCheckBox">
      <div class="topCheck">
        <div
          :class="nowc === index ? 'eveCheck eveClick' : 'eveCheck'"
          v-for="(item, index) in listData"
          :key="item.categoryId"
          @click="tabCk(index, item)"
        >{{item.categoryName}}
        </div>
      </div>
      <i class="iconfont rightIcon" v-if="rightIcon">{{rightIcon}}</i>
    </div>
    <div v-if="listType==='min'" class="topCheckBox">
      <div class="mintopCheck">
        <div
          :class="nowc === index ? 'mineveCheck mineveClick' : 'mineveCheck'"
          v-for="(item, index) in listData"
          :key="item.categoryId"
          @click="tabCk(index, item)"
        >{{item.categoryName}}
        </div>
      </div>
      <i class="iconfont rightIcon" v-if="rightIcon">{{rightIcon}}</i>
    </div>
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
      required: true
    },
    callback: {
      type: Function
    },
    rightIcon: {
      type: String
    },
    listType: {
      type: String,
      default: 'max'
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
    tabCk (index, item) {
      this.toZero(index)
      this.callback(item)
    }
  }
}
</script>
<style scoped lang="scss">
.typeBoxs {
  @include wh(100%, 100px);
  overflow: scroll;
}
::-webkit-scrollbar {
  @include wh(0, 0);
}
.topCheckBox {
  @include wh(100%, auto);
  @include flex();
}

.topCheck {
  @include wh(100%, 110px);
  border-bottom: 1px solid #eee;
  @include flex(row, flex-start, center);
  overflow: scroll;
}
.mintopCheck {
  @include wh(100%, 80px);
  border-bottom: 1px solid #eee;
  @include flex(row, flex-start, center);
  overflow: scroll;
}

.eveCheck {
  color: #4A4A4A;
  font-size: 32px;
  margin: 0 32px;
  flex-shrink: 0;
}
.mineveCheck {
  color: #4A4A4A;
  font-size: 26px;
  margin: 0 32px;
  flex-shrink: 0;
}

.eveClick {
  font-size: 36px;
  font-weight: 800;
}
.mineveClick {
  font-size: 28px;
  font-weight: 600;
}

.rightIcon {
  margin: 0 25px;
  color: #999;
  font-size: 35px;
}
</style>
