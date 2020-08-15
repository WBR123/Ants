/***
 * 
 * @create_time:20-8-1 14:42:48
 * @last_modify:wjiban
 * @modify_time:20-8-11 16:52:50
 * @line_count:40
 **/

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router/router.js';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'

import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/iconfont/iconfont.css';

// 引入axios
import Axios from 'axios';

// import Button from "@/components/customButton/index.js";
import Button from "npmbuttonwbr"; //自定义组件


// 引入vuex-store  
// https://blog.csdn.net/qq_43363884/article/details/95948884
import store from './store/index.js';

import {
	post,
	get
} from './utils/http.js';
Vue.prototype.$axios = Axios
Vue.prototype.$post = post
Vue.prototype.$get = get

Vue.use(ElementUI).use(Vant).use(mandMobile).use(Button);

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
