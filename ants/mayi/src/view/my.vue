<template>
	<div>
		<div class="topBackground">
			<van-sticky>
				<van-row type="flex" justify="space-between" class="navTop-list navbarMax">
					<van-col span="3" class="navbar" style="padding-left:.9em;">我的</van-col>
					<van-col span="18"></van-col>
					<van-col span="3" @click="jump" class="navbar">设置</van-col>
				</van-row>
			</van-sticky>

			<div class="navTop">
				<van-row type="flex" justify="center" class>
					<van-col span="4">
						<van-image round width="3rem" height="3rem" :src="require('@/assets/images/cat.jpg')" @click="onClickImg" />
						<input type="file" ref="file" hidden>
					</van-col>
					<van-col span="6" style="font-size: .5em;padding-top: 2em;">
						China
						<div>理财的第n天</div>
					</van-col>
					<van-col span="9"></van-col>
					<van-col span="5" style="color: #5185E1;font-size: .8em;padding-top: 1.2em;font-weight: 600;">
						理财新方式
						<div class="opens">开启三笔钱</div>
					</van-col>
				</van-row>
				<van-cell title="理财有风险，入市需谨慎" style="color: #BDBEC3;font-size: .5em" icon="shop-o">
					<!-- 使用 right-icon 插槽来自定义右侧图标 -->
					<template #right-icon>
						<van-icon class="search=icon" />
					</template>
				</van-cell>
			</div>
		</div>
		<!--我的资产-->
		<div class="opa">
			<van-cell title="我的资产" is-link value="账户安全保障" to="/guarantee" />
			<van-cell title="总资产" value="昨日收益" />
			<van-cell title="1.00" class="total" value="0.00" />
			
			<van-row style="margin-top: .5rem;" type="flex" justify="space-around">
				<van-col span="6">
					<van-cell title="余额" label="1.00" />
				</van-col>
				<van-col span="8"></van-col>
					<van-col span="9">
						<van-cell title="余额宝" label="0.01" value="0.00"/>
					</van-col>
			</van-row>
			
			<van-row  style="margin-top: 0.3rem;">
				<van-col span="6">
					<van-cell title="理财产品" label="收益保障" />
				</van-col>
				<van-col span="8"></van-col>
					<van-col span="6">
						<van-cell title="基金" label="费率1折起" />
					</van-col>
			</van-row>
			
			<van-row  style="margin-top: 0.3rem;">
				<van-col span="6">
					<van-cell title="黄金" label="1元起买" />
				</van-col>
				<van-col span="8"></van-col>
			</van-row>
		</div>

		<!--我的保障-->
		<div >
			<van-row>
				<van-cell title="我的保障" />
			</van-row>
			<van-row class="opa">
				<van-cell title="保险" label="家人保障中" />
			</van-row>

		</div>

		<!--cell单元格-->
		<div style="margin-top: 1rem;">
			<van-cell title="账单" icon="bag" is-link>
				<van-icon class-prefix="my-icon" name="zhangdan" slot="icon" />
			</van-cell>
			<van-cell title="余额 " icon="fire" is-link value="1.00元" to="/ebao">
				<van-icon class-prefix="my-icon" name="yuebao" slot="icon" />
			</van-cell>
			<van-cell title="银行卡" icon="todo-list" is-link to="/bank" value="">
				<van-icon class-prefix="my-icon" name="yinhangqia" slot="icon" />
			</van-cell>
			<van-cell title="卷包" icon="more" is-link to="/packages">
				<van-icon class-prefix="my-icon" name="wodejuanbao" slot="icon" />
			</van-cell>

			<van-cell title="活动 " icon="fire" is-link>
				<van-icon class-prefix="my-icon" name="faxian1" slot="icon" />
			</van-cell>
			<van-cell class="Borrow" title="借呗 " icon="point-gift" is-link to="/borrow">
				<van-icon class-prefix="my-icon" name="jiebei-jieqian" slot="icon" />
			</van-cell>
			<van-cell title="我的客服 " icon="fire" is-link>
				<van-icon class-prefix="my-icon" name="yinhangqia" slot="icon" />
			</van-cell>
		</div>


		<!--footer-->
		<footerBar></footerBar>

	</div>
</template>

<script>
	import footerBar from "@/components/footer.vue";
	// import npmsortmethod from "npmsortmethod";

	// import { sorting } from '../node_modules/npmsortmethod/index.js';
	// let sor = require('./npmsortmethod/index.js');

	export default {
		data() {
			return {};
		},
		components: {
			footerBar,
		},
		computed: {

		},
		mounted() {
			//生命周期函数
			// let arr = ["3", "2", "7", "0", "-1"];
			// // npmsortmethod.sorting(arr);
			// console.log(arr);
			// console.log(npmsortmethod);
		},
		methods: {
			jump() {
				this.$router.push({
					path: "/setUp"
				});
			},
			onClickImg() {
				this.$refs['file'].click();
			}
		},
	};
</script>

<style>
	.opa{
		opacity: 0.5;
	}
	.navbar {
		color: white;
	}

	.navTop-list {
		padding: 1em 0;
		background: linear-gradient(#0dc5fb, #44a1fe, #2c75fd 40%);
	}

	.topBackground {
		width: 100%;
		height: 150px;
		background: linear-gradient(#0dc5fb, #44a1fe, #2c75fd 40%);
	}

	.navTop {
		padding: 0.9em;
		background: white;
		width: 90%;
		border-radius: 10px 10px 0 0;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		bottom: 0em;
	}

	.opens {
		border-radius: 10px;
		background: #e3f1fd;
	}

	.total {
		margin-top: -1em;
		font-size: 0.2em;
	}

	.spacing {
		margin-top: 0.9em;
		font-size: 1rem;
		color: #99a9bf;
	}


	.total {
		font-size: 10px;
	}

	.guaran {
		margin-top: 3em;
		/* padding-left: 3em; */
		font-size: 1rem;
	}

	.Borrow {
		margin-top: 1em;
	}

	.el-row {
		margin-bottom: 20px;
	}

	.el-col {
		border-radius: 4px;
		text-align: center;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
</style>
