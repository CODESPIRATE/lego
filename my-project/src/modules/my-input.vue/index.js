import {sessionResume} from '../../lib/persist';
export default {
	name:'my-input',
	props: {
        value: { type: [String, Number] },
    },
	data(){
		return {
			currentValue:this.value
		}
	},
	mixins:[sessionResume],
	watch: {
        value(value) {
            this.currentValue = value;
        },
    },
	methods:{
		onInput(e){
			this.currentValue = e.target.value;
			this.$emit('update:value', e.target.value);
		}
	}
}