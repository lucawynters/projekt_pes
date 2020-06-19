import Vue from 'vue';
import VueRouter from 'vue-router'

import Page1 from './components/Page1.vue';

import Homepage from './components/Homepage.vue';
import App from './components/App.vue';
import './index.html';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/homepage', component: Homepage },
    { path: '/trasa/:id', component: Page1 },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});