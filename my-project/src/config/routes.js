import Vue from 'vue';
import overview from '../modules/overview.vue';
import p_manage from '../modules/p_manage.vue';
var routes = [
	{
		path:'/',
		redirect:"/home",
	},
	{
		path:'/home/',
		component:overview,
	},
	{
		path:"/p_manage/",
		component:p_manage
	}
];
export default routes