import axios from '@/utils/request'

const api = {
  msgCode: async (data) => {
    let code = await axios.get('/api/user/msgCode', data)
    return code
  },
  userLogin: async (data) => {
    let login = await axios.get('/api/user/login', data)
    return login
  },
  typeList: async () => {
    let listData = await axios.get('/api/type/list')
    return listData
  },
  listFood: async (data) => {
    let listfood = await axios.get('/api/type/food', data)
    return listfood
  },
  getDetail: async (data) => {
    let detailData = await axios.get('/api/type/detail', data)
    return detailData
  },
  addCar: async (data) => {
    let addcar = await axios.post('/api/food/addCar', data)
    return addcar
  }
}

export default api
