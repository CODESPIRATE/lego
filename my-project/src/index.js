import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import routes from './config/routes'
var router = new VueRouter({routes});

import Vuex from "vuex";
Vue.use(Vuex)
import Store from "./store"
var store = new Vuex.Store(Store);

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);

import ProtoUI from "../../../../vusion/proto-ui/"
Vue.use(ProtoUI);

import CommonUI from "./common"
Vue.use(CommonUI);

new Vue({
	router,
    store,
    el: '#app',
    render: h => h(App),
});
