import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue';

Vue.component('app-home', Home); // registrovanje globalnih komponenti

export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
