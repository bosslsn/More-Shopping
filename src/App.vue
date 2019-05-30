<template>
  <div id="app">
    <input v-model='firstName' />
    <span v-bind:[firstName]="firstName" @click="clicks">{{firstName}}</span> <!--  v-once 不实时更新 v-on:[fun] fun是变量 -->
    <p>{{userProfile}}</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      firstName: 'Foo',
      lastName: 'Bar',
      dynamicId: null,
      userProfile: {
        name: 'Anika'
      }
    }
  },
  computed: {
    fullName: {
      get () {
        return this.firstName + ' ' + this.lastName
      },
      set (val) {
        console.log(val, 'val')
        const names = val.split(' ')
        console.log(names, 'names')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch: {
    firstName: (news, olds) => {
      console.log(_.chunk(['a', 'b', 'c', 'd'], 3))
    }
  },
  methods: {
    clicks () {
      this.userProfile = Object.assign({}, this.userProfile, {
        age: 27,
        favoriteColor: 'Vue Green'
      }) // 可以进行页面响应
      // Object.assign(this.userProfile, {
      //   age: 27,
      //   favoriteColor: 'Vue Green'
      // }) // 不能进行页面响应
    }
  }
}
</script>

<style lang="scss">
*{
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  box-sizing: border-box;
  font-weight: 400;
  font-size: $text-size-lx;
    font-style: normal;
  font-family: "微软雅黑";
  text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -o-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

ol,ul, li {
  list-style: none;
}
html {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  font-size: 100px;  /*font-size: 62.5%; 1rem=10px */
  /*font-size: 100px; 1rem=100px 0.1=10px */
}
html, body, #app{
  @include wh(100%, 100%);
}

img, div, body, html, ul, li, a {
  -webkit-touch-callout: none;
}
input, button {
  outline: 0;
}
button {
  cursor: pointer;
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  color:#ccc;
}
input{
  -webkit-appearance:none; border:0
}

.clearfix:after{
  content: "";
  height: 0;
  display: block;
  overflow: hidden;
  *zoom:1;
  visibility: hidden;
  clear: both;
}
</style>
