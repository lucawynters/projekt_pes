import Vue from 'vue';
import VueRouter from 'vue-router'
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import App from './components/App';
import './index.html';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page1 },
    { path: '/page3', component: Page1 },
    { path: '/page4', component: Page1 },
    { path: '/page5', component: Page1 },
    { path: '/page6', component: Page1 },
    { path: '/page7', component: Page1 },
    { path: '/page8', component: Page1 },
    { path: '/page9', component: Page1 },
    { path: '/page10', component: Page1 },
    { path: '/page11', component: Page1 },
    { path: '/page12', component: Page1 },
    { path: '/page13', component: Page1 },
    { path: '/page14', component: Page1 },
    { path: '/page15', component: Page1 },
    { path: '/page16', component: Page1 },
    { path: '/page17', component: Page1 },
    { path: '/page18', component: Page1 },
    { path: '/page19', component: Page1 },

    { path: '/page1', component: Page1 },

    { path: '/page2/:id', component: Page2 },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});