/**
 * Imports
 */
// Vue
import { createApp } from 'vue'
// App component
import App from './App.vue'
// Router
import router from './router'
// Store
import store from './store'
// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

/**
 * Create app
 */
const app = createApp(App)

/**
 * Directives
 */
app.directive('click-outside', {
  beforeMount (el: any, binding: any) {
    // Click function
    el.clickOutsideEvent = function (event: any) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el)
      }
    }
    // # Init event
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted (el: any) {
    // # Remove event
    document.body.removeEventListener('click', el.clickOutsideEvent)
  }
})

/**
 * Use
 */
app.use(store).use(router).use(VueAxios, axios).mount('#app')
