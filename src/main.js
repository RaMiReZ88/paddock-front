import Vue from 'vue'
import App from './App.vue'
import axios from "axios";

Vue.config.productionTip = false

console.log(axios.get("http://localhost:8080/user"))

new Vue({
  render: h => h(App),
}).$mount('#app')