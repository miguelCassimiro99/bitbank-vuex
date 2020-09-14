import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import http from '@/http'

Vue.config.productionTip = false

Vue.prototype.$http = http;
/*
  $ on vue defines a global var
  so now, the $http is the http that uses axios and now can be used so long the project
  without the import in each file that uses it
*/

http.interceptors.request.use(function(config){
  const token = localStorage.getItem('token')
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, function(erro){
  return Promise.reject(erro)
})
/*
  the interceptor will make possible to catch the access_token
  on this function, in case of success we use a function to pass the axios configs
  in case of failure, it will return a Promise with the error (that won't be trated where)
*/



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
