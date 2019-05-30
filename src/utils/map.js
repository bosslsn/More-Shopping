import AMap from 'AMap'
import storage from '@/utils/storage'
let Map = {
  geolocation (type) {
    return new Promise((resolve, reject) => {
      AMap.plugin('AMap.Geolocation', () => {
        // eslint-disable-next-line no-undef
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          // eslint-disable-next-line no-undef
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: 'RB',
          extensions: 'all'
        })
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', (data) => {
          if (type === 'try') {
            resolve(data)
          } else {
            let dmallData = data.aois[0]
            storage.setItem('dmallData', dmallData)
            resolve(data)
          }
        })
        AMap.event.addListener(geolocation, 'error', (data) => {
          reject(data)
        })
      })
    })
  },
  autocomplete () {
    AMap.plugin('AMap.Autocomplete', function () {
      // 实例化Autocomplete
      var autoOptions = {
        // city 限定城市，默认全国
        city: '010'
      }
      var autoComplete = new AMap.Autocomplete(autoOptions)
      autoComplete.search('南锣鼓巷', function (status, result) {
        // 搜索成功时，result即是对应的匹配数据
        console.log(result)
      })
    })
  },
  searchAddress (city, keyword) {
    return new Promise((resolve, reject) => {
      AMap.plugin('AMap.Autocomplete', function () {
        // 实例化Autocomplete
        var autoOptions = {
          // city 限定城市，默认全国
          city: '010',
          citylimit: true
        }
        var autoComplete = new AMap.Autocomplete(autoOptions)
        autoComplete.search(keyword, function (status, result) {
          // 搜索成功时，result即是对应的匹配数据
          resolve(result)
        })
      })
    })
  }
}
export default Map
