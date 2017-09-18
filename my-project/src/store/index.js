import Vuex from "vuex"
import home from "./modules/home"
import users from "./modules/users"
const store = {
	modules:{
		home,
		users,
	}
}
export default store;