<template>
  <div>
    <div class="phoneBox">
      <div class="phoneIpt">
        <input v-model="phoneNum" type="text" placeholder="请输入您的手机号">
        <button @click="getMsg">{{btnText}}</button>
      </div>
      <div class="msgCode">
        <input v-model="msgCode" type="text" placeholder="请输入验证码">
      </div>
      <p class="userAgreement">验证手机视为已阅读并同意用户协议</p>
      <div class="BtnBox">
        <button class="loginBtn" @click="loginBtn">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api'
import store from '@/store'
export default {
  data () {
    return {
      phoneNum: '',
      msgCode: '',
      btnText: '获取验证码'
    }
  },
  watch: {
    phoneNum (newPhone) {
      this.phoneNum = newPhone
    },
    msgCode (newMsg) {
      this.msgCode = newMsg
    }
  },
  methods: {
    getMsg () {
      api.msgCode({phone: this.phoneNum}).then(res => {
        console.log(res)
      })
    },
    loginBtn () {
      api.userLogin({phone: this.phoneNum, code: this.msgCode}).then((res) => {
        if (res.code === 1) {
          store.state.into = res.data
          const path = this.$route.query.callback || '/home'
          if (this.$route.query.id) {
            this.$router.replace({
              path,
              query: {
                id: this.$route.query.id
              }
            })
          } else {
            this.$router.replace(path)
          }
        } else {
          console.log('登录失败')
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
.phoneBox {
  @include wh(100%, auto);
  margin-top: 15px;
}
.phoneIpt, .msgCode {
  @include wh(100%, 120px);
  @include flex(row, flex-start, center);
  padding: 0 10px 0 20px;
  background: #fff;
  border-bottom: 1px solid #f6f6f6; /* no */
}
.phoneIpt input {
  flex: 1;
  font-size: 30px;
}
.phoneIpt button {
  @include wh(188px, 70px);
  border: 1px solid #FF712B; /* no */
  border-radius: 5px;
  background: #fff;
  color: #FF712B;
  margin: 0 10px;
}
.userAgreement {
  @include wh(100%, 34px);
  line-height: 34px;
  margin-top: 40px;
  text-align: right;
  padding-right: 20px;
  color: #808080;
}
.BtnBox {
  @include wh(100%, auto);
  @include flex();
}
.loginBtn {
  @include wh(95%, 78px);
  margin: 40px auto;
  border: 0;
  font-size: 28px;
  background: #FF712B;
  border-radius: 8px;
  color: #fff;
}
</style>
