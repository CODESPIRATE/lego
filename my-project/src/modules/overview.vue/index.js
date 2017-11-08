import myInput from '../my-input.vue';
export default {
	name:"overview",
	data() {
		return {
			overview:"this is overview page!",
			model: {
                username: 'jack',
                email: '123@163.com',
                phone: '1234567890',
            },
            value:true,
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, trigger: 'blur', message: '请输入4~12个字符' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入邮箱' },
                    { type: 'email', trigger: 'blur', message: '邮箱格式不正确' },
                ],
                phone: [
                    { type: 'string', pattern: /^\d{11}$/, trigger: 'blur', message: '手机号码格式不正确' },
                ],
            },
		}
	},
	methods: {
        submit() {
            this.$refs.form.validate()
                .then(() => console.log('提交成功'), (err) => console.log(err))
                .catch(() => {});
        },
    },
	created(){
		console.log('overview',this)
	},
	components:{
		[myInput.name]:myInput
	}
}