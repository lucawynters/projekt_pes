import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './components/App.vue';
import Homepage from './components/Homepage.vue';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';

import App from './components/App';
import './index.html';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [

    { path: '/homepage', component: Page1 },

    { path: '/page2/:id', component: Page2 },
    { path: '/page2/petrinske-sady', component: Page2 },
    { path: '/page2/:riegrovy-sady', component: Page3 },
    { path: '/page2/:vitkov', component: Page3 },
    { path: '/page2/:kunraticko-michelsky-les', component: Page4 },
    { path: '/page2/:kosire-motol', component: Page5 },
    { path: '/page2/:prokopsko-dalejske-udoli', component: Page5 },
    { path: '/page2/:lysolaje-sarka', component: Page6 },
    { path: '/page2/:obora-hvezda', component: Page7 },
    { path: '/page2/:letenske-sady', component: Page8 },
    { path: '/page2/:id', component: Page9 },
    { path: '/page2/:id', component: Page10 },
    { path: '/page2/:id', component: Page11 },
    { path: '/page2/:id', component: Page12 },
    { path: '/page2/:id', component: Page13 },
    { path: '/page2/:id', component: Page14 },
    { path: '/page2/:id', component: Page15 },
    { path: '/page2/:id', component: Page16 },
    { path: '/page2/:id', component: Page17 },
    { path: '/page2/:id', component: Page18 },



  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});