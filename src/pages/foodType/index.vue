<template>
  <div class="typeBox">
    <TabCheck
     :listData="listData"
     :listType="'max'"
     :callback="nowchange"
     :rightIcon="'\ue615'"
     :nowc="titnum"
     :toZero="titZero"
    />
    <div class="centerCk">
      <LeftCheck
       :leftList="leftList"
       :callback="rightCbk"
       :nowc="leftnum"
       :toZero="leftZero"
      />
      <div class="rightBtn">
        <TabCheck
         :listData="rightData"
         :callback="buttonCbk"
         :listType="'min'"
         :rightIcon="'\ue601'"
         :nowc="nowc"
         :toZero="toZero"
        />
        <DetailList :changeNum="changeNum" :callback="checkdet" :listData="bottomData"/>
      </div>
    </div>
  </div>
</template>
<script>
import TabCheck from './components/tabCheck'
import LeftCheck from './components/leftCheck'
import DetailList from './components/detailList'
import api from '@/api'
export default {
  data () {
    return {
      listData: [],
      leftList: [],
      rightData: [],
      bottomData: [],
      nowc: 0,
      leftnum: 0,
      titnum: 0
    }
  },
  components: {
    TabCheck,
    LeftCheck,
    DetailList
  },
  created () {
    api.typeList().then((res) => {
      this.listData = res
      this.nowchange(this.listData[0])
    })
  },
  methods: {
    nowchange (item) {
      this.leftList = item.children
      this.rightCbk(this.leftList[0])
      this.leftnum = 0
    },
    rightCbk (item) {
      this.rightData = item.children
      this.buttonCbk(this.rightData[0])
      this.nowc = 0
    },
    buttonCbk (item) {
      api.listFood({id: item.categoryId}).then((res) => {
        this.bottomData = res || []
      })
    },
    toZero (index) {
      this.nowc = index
    },
    leftZero (index) {
      this.leftnum = index
    },
    titZero (index) {
      this.titnum = index
    },
    checkdet (item) {
      this.$router.push({
        path: '/detailpage',
        query: {
          id: item.id
        }
      })
    },
    changeNum (type) {
      if (type === '+') {
        api.typeList().then((res) => {
          this.listData = res
          this.nowchange(this.listData[0])
        })
      }
    }
  }
}
</script>
<style scoped lang="scss">
.typeBox {
  width: 100%;
  flex: 1;
  @include flex(column, center, center);
}
.centerCk {
  @include wh(100%, auto);
  flex: 1;
  @include flex(row, flex-start, flex-start);
  padding-bottom: 100px;
}
.rightBtn {
  @include wh(100%, auto);
  flex: 1;
  @include flex(column, flex-start, flex-start);
}
</style>
