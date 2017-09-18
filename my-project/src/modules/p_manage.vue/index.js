
import { mapGetters,mapActions } from 'vuex'
export default {
	name:"p_manage",
	data() {
		return {
			id:0,
			name:"",
			property:0
		}
	},
	computed:{
		...mapGetters(["__users"])
	},
	created(){
		this.getUsers({id:0});
	},
	methods:{
		...mapActions(["getUsers","saveUsers","updateUsers","deleteUsers"]),
		__get() {
			if(typeof this.id === undefined){
				this.$alert("warn","id is not defined")
				return;
			}
			this.getUsers({id:this.id})
		},
		__save() {
			if(typeof this.id === undefined){a
				this.$alert("warn","id is not defined");
				return;
			}
			let params = {id:this.id}
			this.name && (params.name = this.name);
			this.property && (params.property = this.property);
			this.saveUsers(params);
		},
		__update() {
			if(typeof this.id === undefined){a
				this.$alert("warn","id is not defined");
				return;
			}
			let params = this.__users.filter(item=>item.id==this.id)[0];
			delete params._id;
			this.name && (params.name = this.name);
			this.property && (params.property = this.property);
			this.updateUsers(params)
		},
		__delete() {
			if(typeof this.id === undefined){a
				this.$alert("warn","id is not defined");
				return;
			}
			this.deleteUsers({id:this.id})
		}
	}
}