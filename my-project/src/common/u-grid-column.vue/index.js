import Flex from "../u-flex.vue"
export default {
	name:"u-grid-column",
	props:{
		column:{
			type:String,
			default:undefined
		},
		span:{
			type:Number,
			default:undefined
		},
		pull:{
			type:Number,
			default:undefined
		},
		push:{
			type:Number,
			default:undefined
		},
		offset:{
			type:Number,
			default:0
		},
	},
	mixins:[Flex],
	data(){
		return {
			parent:this.$parent,
		}
	},
	computed:{
		// _start() {
		// 	if(!this.start && this.column) {
		// 		if(/\s+/.test(this.column)) {
		// 			return parseInt(this.column.split(" ")[0].trim());
		// 		} else {
		// 			return this.column;
		// 		}
		// 	} else {
		// 		return this.start;
		// 	}
		// },
		// _span() {
		// 	if(!this.span && this.column && /\s+/.test(this.column)) {
		// 		return parseInt(this.column.split(" ")[1].trim());
		// 	} else {
		// 		return this.span ? this.span : 1;
		// 	}
		// },
		columnStyleObject() {
			let width = this.span ? this.getUnitValue(this.span) : "auto";
			let left = this.push ? this.getUnitValue(this.push) : "auto";
			let right = this.pull ? this.getUnitValue(this.pull) : "auto";
			let marginLeft = this.getUnitValue(this.offset);
			let paddingLeft = this.parent.gapsStyleObject.marginLeft.slice(1);
			let paddingRight = this.parent.gapsStyleObject.marginRight.slice(1);
			let styleObject = {
				width,
				right,
				left,
				marginLeft,
				paddingLeft,
				paddingRight
			};
			if(this.parent.type==="flex" && this.flexType==="item")return Object.assign(styleObject,this.flexStyleObject);
			else return styleObject;
		},
		// columnStyle() {
		// 	let parent = this.$parent;
		// 	let unit = parent.unit;
		// 	let width = 1 / parent.repeat + "%";
		// 	let left = "auto";
		// 	let marginLeft = 0;
		// 	if (parent.columnsInfo) {
		// 		if(Array.isArray(parent.columnsInfo)) {
		// 			let start = this._start!==undefined ? this._start : parent.currentIndex;
		// 			let end = start + this._span;
		// 			width = this.getSubArraySum(start,end,parent.columnsInfo) + unit;
		// 			left = this.getSubArraySum(0,start,parent.columnsInfo) + unit;
		// 			marginLeft = this.getSubArraySum(end-1,end+this.offset-1,parent.columnsInfo) + unit;
		// 			parent.currentIndex = end;
		// 		} else {
		// 			width = parseInt(parent.columnsInfo) * this._span + unit;
		// 			left = parseInt(parent.columnsInfo) * this._start + unit;
		// 			marginLeft = parseInt(parent.columnsInfo) * this.offset + unit;
		// 		}
		// 	} else {
		// 			width = this.getUnitValue(this._span,parent.repeat);
		// 			left = this.getUnitValue(this._start,parent.repeat);
		// 			marginLeft = this.getUnitValue(this.offset,parent.repeat);
		// 	}
		// 	return {width,left,marginLeft};
		// },
	},
	methods:{
		getUnitValue(Numerator,Denominator) {
			if(this.parent.unit==="px") return Numerator + "px";
			let denominator = Denominator ? Denominator : this.parent.repeat;
			return Numerator / denominator * 100 + this.parent.unit;
		},
		// getSubArraySum(start,end,arr) {
		// 	let sum = 0;
		// 	if(start<0 || start>=end)return 0;
		// 	for(let i = start; i<end; i++) {
		// 		sum += parseInt(arr[i]);
		// 	}
		// 	return sum;
		// },
	},

}