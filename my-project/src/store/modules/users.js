import {resource_users} from "../../resource"
const state = {
	__users:undefined
}
const getters = {
	__users() {
		return state.__users
	}
}
const mutations = {
	setUsers(state,users) {
		state.__users = users
	}
}
const actions = {
	getUsers({commit},params) {
		resource_users.get(params).then(res=>{
			 commit("setUsers",res.data.users);
		}).catch(e=>{throw e})
	},
	saveUsers({commit},payload) {
		resource_users.save('',payload).then(res=>{
			 commit("setUsers",res.data.users);
		}).catch(e=>{throw e})
	},
	deleteUsers({commit},params) {
		resource_users.delete(params).then(res=>{
			 commit("setUsers",res.data.users);
		}).catch(e=>{throw e})
	},
	updateUsers({commit},params) {
		resource_users.update({id:params.id},params).then(res=>{
			 commit("setUsers",res.data.users);
		}).catch(e=>{throw e})
	},
}
export default {state,getters,mutations,actions}