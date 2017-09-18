import Vue from "vue"
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.http.options.root = "http://localhost:1639";
Vue.http.interceptors.push((request,next)=>{
	next((response)=>{
		var code = response.status && response.status/100;
		if(code<=3){
			return response
		}else if(code>=4){
			alert(response.body.message
				||"未知错误!\n错误码:   "+response.status
				+"\n请求URL:   "+request.url
				+"\n响应数据:   "+JSON.stringify(response.body).slice(0,32))
		}else{
			alert("未知错误")
		}
	})
})

export var resource_users = Vue.resource('users{/id}');