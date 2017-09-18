import Flex from "../u-flex.vue"

export default {
	name:"u-layout",
	props:{
		leftWidth:{
			type:String,
			default:"auto"
		},
		rightWidth:{
			type:String,
			default:"auto"
		},
		leftBackground:{
			type:String,
			default:undefined
		},
		rightBackground:{
			type:String,
			default:undefined
		},
		mode:{
			type:Number,
			default:1
		}
	},
	data(){
		return {

		}
	},
	mixins:[Flex],
	computed:{
		unit() {
			if(/\%/.test(this.leftWidth) || /\%/.test(this.rightWidth)) return "%";
			else return "px";
		},
		leftSpan() {
			return this.getSpan(this.leftWidth);
		},
		rightSpan() {
			return this.getSpan(this.rightWidth);
		},
	},
	methods:{
		getSpan(span) {
			let num = parseInt(span);
			if(this.unit==="%") {
			 	return num / 24;
			} else {
			 	return num;
			}
		}
	}
}