import Vue from 'vue'
import App from './App.vue'
import List from './List.vue';
import Pic from './Pic.vue';

Vue.component("list", List)
Vue.component("pic", Pic)

new Vue({
  el: '#app',
  render: h => h(App)
}
)
