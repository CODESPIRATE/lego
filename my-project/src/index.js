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

import * as ProtoUI from "../../../../vusion/proto-ui/";
for (const key in ProtoUI){
	if(ProtoUI[key].name)
    	Vue.component(ProtoUI[key].name, ProtoUI[key]);
}
// Vue.use(ProtoUI.Persist);

import CommonUI from "./common"
Vue.use(CommonUI);

// import {InputField, Persist, Form, FormItem} from "../../../../vusion/cloud-ui/";
// Vue.component('c-input', InputField);
// Vue.component('c-form', Form);
// Vue.component('c-form-item', FormItem);
// Vue.use(Persist);

var app = new Vue({
	router,
    store,
    el: '#app',
    render: h => h(App),
});

