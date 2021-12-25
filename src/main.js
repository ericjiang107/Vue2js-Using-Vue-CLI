import Vue from 'vue'
import App from './App.vue'
// importing another component here:
import names from './ninjaComponent.vue'

// to showcase an object from another component:
Vue.component('randomName', names);

// creating an Event Bus
// Event Bus is an instance that can emit events in one component, listen, and react to another event from another component
const bus = new Vue();

new Vue({
  el: '#app',
  // the render: h => h(App) is what renders the App.vue component from what we imported in 
  render: h => h(App)
})
