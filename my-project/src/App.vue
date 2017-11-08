<template>
<div :class="$style.root">
    <u-layout :mode="2" :left-width="siderWidth" :left-background="siderColor" :fixSide="true">
		<div slot="header">
			<div :class="$style.sider">
			    <navigation></navigation>
			</div>
		</div>
		<div slot="left">
			<sider></sider>
		</div>
		<div slot="content">
			<router-view></router-view>
		</div>
	</u-layout>
</div>
</template>

<script>
import navigation from "./modules/navigation.vue"
import sider from "./modules/sider.vue"
import overview from "./modules/overview.vue"
import p_manage from "./modules/p_manage.vue"

import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			siderWidth:"150px",
			siderColor:"#eef1f6",
			activeIndex:"home",
		}
	},
	computed:{
		...mapGetters([
	      'getTitle'
	    ])
	},
	methods:{
		handleSelect(){

		}
	},
	mounted() {
	},
	components:{
		[navigation.name]:navigation,
		[sider.name]:sider,
		[overview.name]:overview,
		[p_manage.name]:p_manage,
	}
};
</script>

<style module>
$height: 15px;
.root {
    height: 100%;
    width: 100%;
}
</style>
