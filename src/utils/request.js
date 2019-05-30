import axios from 'axios'

const request = axios.create({
  baseURL: '/api',
  timeout: 2000
})

axios.get = (url, data) => {
  if (document.cookie.indexOf('token') !== -1) {
    let token = changeCook(document.cookie, 'token')
    return request.get(url, {
      params: data,
      headers: {
        token
      }
    })
  } else {
    return request.get(url, {
      params: data
    })
  }
}

axios.post = (url, data) => {
  if (document.cookie.indexOf('token') !== -1) {
    let token = changeCook(document.cookie, 'token')
    return request.post(url, data, {
      headers: {
        token
      }
    })
  } else {
    return request.post(url, data)
  }
}
function changeCook (str, key) {
  let token = str.split('=')
  let obj = {}
  token.forEach((item, index) => {
    if (token[index + 1]) {
      obj[item] = token[index + 1]
    }
  })
  return obj[key]
}

// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
request.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default axios
