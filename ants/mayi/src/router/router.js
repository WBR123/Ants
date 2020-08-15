/***
 * @creater:wjiban
 * @create_time:20-8-1 12:42:44
 * @last_modify:wjiban
 * @modify_time:20-8-12 8:49:51
 * @line_count:105
 **/

import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';
import qs from 'qs';

import my from "@/view/my.vue";
import community from "@/view/community.vue";
import study from "@/view/study.vue";
import home from "@/view/home.vue";
import login from "@/view/login.vue";
import bank from "@/view/bank.vue";
import setUp from "@/view/assets/setUp.vue";
import security from "@/view/assets/security.vue";
import biology from "@/view/assets/biology.vue";
import payment from "@/view/assets/payment.vue";
import currency from "@/view/assets/currency.vue";
import privacy from "@/view/assets/privacy.vue";
import about from "@/view/assets/about.vue";
import packages from "@/view/assets/package.vue";
import bigShot from "@/view/assets/bigShot.vue";
import special from "@/view/assets/special.vue";
import watch from "@/view/assets/watch.vue";
import ebao from "@/view/assets/ebao.vue";
import changeinto from "@/view/assets/changeinto.vue";
import shares from "@/view/shares.vue";
import Insurance from "@/view/assets/Insurance.vue";
import guarantee from "@/view/guarantee.vue";
import borrow from "@/view/assets/borrow.vue";




Vue.prototype.$axios = Axios
Vue.use(VueRouter);
const routes = [{
		path: "/",
		component: home
	},
	{
		path: "/my",
		component: my
	},
	{
		path: "/community",
		component: community
	},
	{
		path: "/study",
		component: study
	},
	{
		path: "/home",
		component: home
	},
	{
		path: "/login",
		component: login
	},
	{
		path: "/bank",
		component: bank
	}, {
		path: "/setUp",
		component: setUp
	},
	{
		path: "/security",
		component: security
	},
	{
		path: "/biology",
		component: biology
	}, {
		path: "/payment",
		component: payment
	},
	{
		path: "/currency",
		component: currency
	}, {
		path: "/privacy",
		component: privacy
	}, {
		path: "/about",
		component: about
	}, {
		path: "/packages",
		component: packages
	}, {
		path: "/bigShot",
		component: bigShot
	}, {
		path: "/special",
		component: special
	}, {
		path: "/watch",
		component: watch
	}, {
		path: "/ebao",
		component: ebao
	}, {
		path: "/changeinto",
		component: changeinto
	},
	{
		path: "/shares",
		component: shares
	},
	{
		path: "/Insurance",
		component: Insurance
	}, {
		path: "/guarantee",
		component: guarantee
	},
	{
		path: "/borrow",
		component: borrow
	},



]

export default new VueRouter({
	//mode: 'history', //打包注释掉
	routes
})
// export default router;
