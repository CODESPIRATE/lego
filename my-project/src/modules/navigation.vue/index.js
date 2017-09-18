export default {
	name:"navigation",
	data(){
		return {
			active:"/home"
		}
	},
	computed:{
		path() {
			if(this.$route.path)
				return this.$route.path;
			else 
				return "/home";
		}
	},
	methods:{
		handleNavSelect(){
			console.log("handleNavSelect")
		}
	},
}