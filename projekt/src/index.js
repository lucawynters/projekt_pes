import Vue from 'vue';
import VueRouter from 'vue-router'
import VueAgile from 'vue-agile'

import Page1 from './components/Page1.vue';

import Homepage from './components/Homepage.vue';
import App from './components/App.vue';
import './index.html';

Vue.use(VueRouter);
Vue.use(VueAgile);

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', component: Homepage },
    { path: '/trasa/:id', component: Page1 },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});