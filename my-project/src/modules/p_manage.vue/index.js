
import { mapGetters,mapActions } from 'vuex'
import {uploadServer} from '../../config/base'
export default {
	name:"p_manage",
	data() {
		return {
			id:0,
			name:"",
			property:0,
			desc:"",
			fileList:[],
			picture:'',
			uploadServer:uploadServer
		}
	},
	computed:{
		...mapGetters(["__users"])
	},
	created(){
		this.getUsers({id:0});
	},
	watch:{
		name(){
			this.uploadServer = uploadServer + "?name=" + this.name+"&id="+this.id
		}
	},
	methods:{
		beforeUpload(file) {
			if(!this.name||!this.id) {
				this.$alert('name or id was undefined','error');
				return false;
			}
		},
		uploaded(response, file, fileList) {
			this.$message({
	          message: '上传成功',
	          type: 'success'
	        });
	        this.picture = response.file.filename;
		},
		// deleteUploadAll() {
		// 	this.$resource('deleteUploadAll').delete()
		// },
		__get() {
			if(!this.id && this.id !== 0){
				this.$alert("id is not defined","warn")
				return;
			}
			this.getUsers({id:this.id})
		},
		__save() {
			if(!this.id && this.id !== 0){
				this.$alert("id is not defined","warn");
				return;
			}
			let params = {id:this.id}
			this.name && (params.name = this.name);
			this.property && (params.property = this.property);
			this.desc && (params.desc = this.desc);
			this.picture && (params.picture = this.picture);
			this.saveUsers(params);
			this.$refs.upload && this.$refs.upload.clearFiles();
		},
		__update() {
			if(!this.id && this.id !== 0){
				this.$alert("id is not defined","warn");
				return;
			}
			let params = this.__users.filter(item=>item.id==this.id)[0];
			delete params._id;
			this.name && (params.name = this.name);
			this.property && (params.property = this.property);
			this.updateUsers(params)
		},
		__delete() {
			if(!this.id && this.id !== 0){
				this.$alert("id is not defined","warn");
				return;
			}
			if(this.id === 0) {
				this.$alert("delete all","warn",{
			          confirmButtonText: '确定',
			          callback: action => {
			            if(action === 'confirm') {
			            	this.deleteUsers({id:this.id})
			            }
 			        }
			    })
			}
		},
		...mapActions(["getUsers","saveUsers","updateUsers","deleteUsers"]),
	}
}