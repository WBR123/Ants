<template>
	<div>
		<div>
			<van-nav-bar left-arrow @click-left="$router.back()" left-text="登录" />
		</div>
		<div class="sign" v-if="isShow">
			<van-nav-bar title="登录" />
			<van-form>
				<van-field v-model="userinfo.logName" label="用户名" placeholder="用户名" label-width="50px" />
				<van-field v-model="userinfo.logPwd" type="password" label="密码" placeholder="密码" label-width="50px" />
				<div style="margin: 16px;">
					<van-button round block type="info" size="small" native-type="submit" @click="logins()">登录</van-button>
				</div>
			</van-form>
		</div>
		<!-- 2 -->
		<div class="sign" v-else>
			<van-form>
				<van-nav-bar title="注册" />
				<van-field v-model="userinfo.regName" placeholder="用户名" />
				<van-field v-model="userinfo.regPwd" type="password" placeholder="密码" />
				<div style="margin: 16px;">
					<van-button round block type="warning" size="small" native-type="submit" @click="Reginas()">注册</van-button>
				</div>
			</van-form>
		</div>

		<div>
			<van-row type="flex" justify="space-around">
				<van-button class="btn-bg" type="default" size="small" disabled v-show="isHidden">忘记密码</van-button>
				<van-button class="btn-bg" type="default" size="small" @click="change" v-show="isHidden">用户名注册</van-button>
			</van-row>
			<van-row type="flex" justify="center">
				<h6 v-show="isHidden">!!!如没有注册用户名请点击用户名注册即可!!!</h6>
			</van-row>
		</div>

		<!-- https://www.cnblogs.com/web-record/p/9876916.html 导航守卫，登录页面 -->
		<!-- end -->

		<!--演示 vuex  -->
		<!-- <test1></test1>
    <test2></test2>
    <btns></btns>-->
		<!-- <switchbutton></switchbutton> -->

		<!-- <wbr-button type="info">保荣</wbr-button> -->
		<!-- <wbr-button>你可以额</wbr-button> -->

	</div>

</template>

<script type="text/javascript">
	// import test1 from "@/view/test1";
	// import test2 from "@/view/test2";
	// import btns from "@/view/btnsteta";

	// import dataInfo from "@/utils/users.js";//本地用户名信息表

	// import { mapMutations } from "vuex";
	// import userInfo from "@/utils/users.json";
	import {
		sorting,drop
	} from "npmsortmethod"

	import {
		get
	} from "@/utils/custom.js";
	import {
		Toast
	} from "vant";

	export default {
		data() {
			return {
				userinfo: {
					logName: "",
					logPwd: "",
					regName: "",
					regPwd: "",
				},
				isShow: true,
				isHidden: true,
			};
		},
		components: {
			// test1,
			// test2,
			// btns,
			[Toast.name]: Toast,
		},
		created() {
			// if (this.$store.state.username != "" || this.$store.state.username != null) {
			// 	this.$router.push({
			// 		path: "/home"
			// 	});
			// }
			// let arr = ["2", "1", "0", "6","-1","10"];
			// sorting(arr);
			// // drop(arr);
			// console.log(arr);
		},
		methods: {
			change() {
				this.isShow = !this.isShow;
				this.isHidden = !this.isHidden;
			},
			// 注册
			Reginas() {
				if (this.userinfo.regName != "" && this.userinfo.regPwd != "") {
					this.$store.commit("getUserInfo", {
						name: this.userinfo.regName
					});
					Toast("注册成功");
					setTimeout(() => {
						this.isShow = !this.isShow;
						this.isHidden = !this.isHidden;
					}, 2000);
				} else {
					Toast("请输入用户名或密码进行注册！！！");
				}
				// console.log("成功注册" + this.userinfo.regName);
			},
			// 登录
			logins() {
				if (this.$store.state.username == this.userinfo.logName) {
					setTimeout(() => {
						this.$router.push({
							path: "/home"
						});
					}, 1000);
				} else {
					Toast.fail("亲，用户名未注册,请先注册！！！");
				}
			},
			onSubmit() {
				// console.log("submit", values);
				// get("./utils/users.json", {}).then((res) => {
				//   console.log(res);
				// },(err)=>{
				//     console.log("失败");
				// });
				// console.log(dataInfo.banks);
				// if (this.userinfo.username != "" && this.userinfo.password != "") {
				//   Toast.success("登录成功");
				//   //使用location 记录用户信息
				//   // JSON.stringify() 将JSON转化成json字符串 。JavaScript 对象转换为 JSON 字符串
				//   // JSON.parse()     将JSON字符串转化成json格式 。将JSON字符串转为一个对象。
				//   if (!window.localStorage) {
				//     console.log("您的浏览器不支持localStorage");
				//   } else {
				//     localStorage.setItem("userInfo", JSON.stringify(this.userinfo));
				//     // console.log(localStorage.getItem("userInfo.name"))
				//   }
				//   setTimeout(() => {
				//     this.$router.push({ path: "/home" });
				//   }, 2000);
				// } else {
				//   Toast.fail("您输入的用户名或者密码不正确！");
			},

		},
	};
</script>

<style scoped="scoped">
	.sign {
		margin-top: 50%;
	}

	.btn-bg {
		margin-top: 20% !important;
		border: none !important;
	}
</style>
