import Vue from 'vue';
import VueRouter from 'vue-router'

import Page1 from './components/Page1.vue';
// import Page2 from './components/Page2.vue';

import App from './components/App.vue';
import './index.html';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/homepage', component: App },
    // { path: '/page2/:id', component: Page2 },
    { path: '/trasa/:id', component: Page1 },
    // { path: '/trasa/riegrovy-sady', component: Page3 },
    // { path: '/trasa/vitkov', component: Page4 },
    // { path: '/trasa/kunraticko-michelsky-les', component: Page5 },
    // { path: '/trasa/kosire-motol', component: Page6 },
    // { path: '/trasa/prokopsko-dalejske-udoli', component: Page7 },
    // { path: '/trasa/lysolaje-sarka', component: Page8 },
    // { path: '/trasa/obora-hvezda', component: Page9 },
    // { path: '/trasa/letenske-sady', component: Page10 },
    // { path: '/trasa/stromovka', component: Page11 },
    // { path: '/trasa/drahan-troja', component: Page12 },
    // { path: '/trasa/dablicky-haj', component: Page13 },
    // { path: '/trasa/meandry-botice', component: Page14 },
    // { path: '/trasa/hostivar-zabehlice', component: Page15 },
    // { path: '/trasa/modranska-rokle', component: Page16 },
    // { path: '/trasa/u-haju', component: Page17 },
    // { path: '/trasa/les-lehovec', component: Page18 },
    // { path: '/trasa/cihadla', component: Page19 },
    // { path: '/trasa/chuchelsky-haj', component: Page20 },
    // { path: '/trasa/repy-motol', component: Page21 },
    // { path: '/trasa/letnany', component: Page22 },
    // { path: '/trasa/vinor-satalice', component: Page23 },
    // { path: '/trasa/klanovicky-les', component: Page24 },
    // { path: '/trasa/uhrineves', component: Page25 },

  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});