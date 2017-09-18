import Flex from "../u-flex.vue"
export default {
	name:"u-grid-row",
	mixins:[Flex],
	props:{
		repeat:{
			type:Number,
			default:24
		},
		// columns:{
		// 	type:String,
		// 	default:undefined
		// },
		gaps:{
			type:Number,
			default:0
		},
		unit:{
			type:String,
			default:"%"
		},
		type:{
			type:String,
			default:undefined
		}
	},
	data(){
		return {
			currentIndex:0,
		}
	},
	computed:{
		// columnsInfo() {
		// 	if (this.columns) {
		// 		if(/\s+/.test(this.columns)) {
		// 			return this.columns.split(" ");
		// 		} else {
		// 			return this.columns;
		// 		}
		// 	}
		// },
		gapsStyleObject() {
			return {
				marginLeft:"-" + this.gaps/2 + "px",
				marginRight:"-" + this.gaps/2 + "px"
			}
		},
		rowStyleObject() {
			if(this.type === "flex") {
				return Object.assign(this.gapsStyleObject,this.flexStyleObject);
			} else {
				return this.gapsStyleObject
			}
		}
		// unit() {
		// 	if(/\%/.test(this.columns)) return "%";
		// 	else return "px";
		// }
	}
}