import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.interceptors.request.use(config => {
  console.log('发送请求之前')
  return config
}, error => {
  // console.log('请求出错')
  return Promise.reject(error)
})


axios.interceptors.response.use(response => {
  return response
})


createApp(App).use(store).use(router).mount('#app')
