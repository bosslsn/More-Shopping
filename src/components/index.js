import Footers from './footer/footer.vue'
import ReturnTop from './topReturn'
import SearchAddress from './searchAddress'
import ResultList from './resultList'
import BannerC from './bannerC'
import ListC from './listC'
import changNumC from './changNumC'

let components = {
  Footers,
  ReturnTop,
  SearchAddress,
  ResultList,
  BannerC,
  ListC,
  changNumC
}

export default {
  install (Vue) {
    for (let i in components) {
      Vue.component(i, components[i])
    }
  }
}
