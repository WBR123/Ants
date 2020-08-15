<template>
	<div>
		<div>
			<van-nav-bar style="" left-text="返回" left-arrow @click-left="onClickLeft" :border="false"></van-nav-bar>
		</div>
		<div class="main-box">
			<!-- 居中 -->
			<van-row type="flex" justify="center">
				<van-col span="24">
					<h3 style="color:white; text-align: center; margin: 1rem;">年金保险</h3>
				</van-col>
			</van-row>
			<van-tabbar :fixed="false" style="background-color: #1777FF;" :border="false" inactive-color="#fff">
				<van-tabbar-item name="home" icon="chart-trending-o">固定收益</van-tabbar-item>
				<van-tabbar-item name="search" icon="notes-o">100%领取</van-tabbar-item>
				<van-tabbar-item name="friends" icon="refund-o
">不会亏</van-tabbar-item>
			</van-tabbar>

			<div class="annuity">
				<van-row>
					<van-col span="20">
						<h4 style="margin: 1rem;">TOP1年金推荐</h4>
					</van-col>
				</van-row>

				<van-row>
					<van-col span="20">
						<h4 style="margin:.5rem 1rem;">小金猪资产配置计划<van-tag mark type="danger">新人专享</van-tag>
						</h4>
					</van-col>
				</van-row>
				<van-row style="margin: 1rem;">
					<van-col span="11" offset="1">
						<div style="color:#EBA784;">5.75%</div>
						<div>历史年化单利</div>
					</van-col>
					<van-col span="11">
						<div>限售<span style="color:#EBA784;">1000</span>份</div>
						<div>售完为止</div>
					</van-col>
				</van-row>

				<van-row type="flex" justify="center">
					<van-col span="20">
						<van-button type="info" block>立即投入</van-button>
					</van-col>
				</van-row>
			</div>
		</div>
		<!-- 2 -->
		<div class="annuity1">
			<van-row>
				<van-col span="20">
					<h4 style="margin: 1rem;">20~35岁年金推荐</h4>
				</van-col>
			</van-row>

			<van-row>
				<van-col span="20">
					<h4 style="margin:.5rem 1rem;">来攒钱</h4>
				</van-col>
			</van-row>
			<van-tabbar :fixed="false" :border="false" inactive-color="blue">
				<van-tabbar-item name="home" icon="chart-trending-o">攒钱买房</van-tabbar-item>
				<van-tabbar-item name="search" icon="notes-o">攒钱买车</van-tabbar-item>
				<van-tabbar-item name="friends" icon="refund-o
			">攒钱出国</van-tabbar-item>
				<van-tabbar-item name="search" icon="notes-o">赞小金库</van-tabbar-item>
			</van-tabbar>
			<van-row style="margin: 1rem;">
				<van-col span="11" offset="1">
					<div style="color:#EBA784;">5.75%</div>
					<div>历史年化单利</div>
				</van-col>
				<van-col span="11">
					<div>限售<span style="color:#EBA784;">1000</span>份</div>
					<div>售完为止</div>
				</van-col>
			</van-row>

			<van-row type="flex" justify="center">
				<van-col span="20">
					<van-button type="info" block>立即开启攒钱计划</van-button>
				</van-col>
			</van-row>
		</div>

		<!-- 3 -->
		<div class="annuity2">
			<van-row>
				<van-col span="20">
					<h4 style="margin: 1rem;">35~50岁年金推荐</h4>
				</van-col>
			</van-row>

			<van-row>
				<van-col span="20">
					<h4 style="margin:.5rem 1rem;">福佑今生</h4>
				</van-col>
			</van-row>
			<van-row style="margin: 1rem;">
				<van-col span="11" offset="1">
					<div style="color:#EBA784;">4.4%</div>
					<div>历史年化单利</div>
				</van-col>
				<van-col span="11">
					<div>销量王<span style="color:#EBA784;">1000</span>份</div>
					<div>2019年统计</div>
				</van-col>
			</van-row>

			<van-row type="flex" justify="center">
				<van-col span="20">
					<van-button type="info" block>立即开启</van-button>
				</van-col>
			</van-row>
		</div>

		<!-- 4 -->
		<div class="annuity2">
			<van-row>
				<van-col span="20">
					<h4 style="margin: 1rem;">家庭保险推荐</h4>
				</van-col>
			</van-row>

			<van-row>
				<van-col span="20">
					<h4 style="margin:.5rem 1rem;">全民保·定期寿险</h4>
				</van-col>
			</van-row>
			<van-row style="margin: 1rem;">
				<van-col span="11" offset="1">
					<div style="color:#EBA784;">享百万保障</div>
					<div>每天3块多</div>
				</van-col>
				<van-col span="11">
					<div>销量王<span style="color:#EBA784;">全网销量第一</span>份</div>
					<div>网销寿险类产品</div>
				</van-col>
			</van-row>

			<van-row type="flex" justify="center">
				<van-col span="20">
					<van-button type="info" block>立即开启保障</van-button>
				</van-col>
			</van-row>
		</div>

		<van-row type="flex" justify="center">
			<van-col span="6"></van-col>
			<van-col span="10">
				<van-divider>蚂蚁保险</van-divider>
			</van-col>
			<van-col span="6"></van-col>
		</van-row>
		<van-row type="flex" justify="center">
			<van-col span="10" style="color: #969799;margin:-0.5rem ;">让每个家庭都有保障</van-col>
		</van-row>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {};
		},
		components: {},
		methods: {
			onClickLeft() {
				this.$router.push({
					path: "/home"
				})
			},
		},
	};
</script>

<style scoped="scoped">
	.main-box {
		background-color: #1777FF;
		width: 100%;
		height: 13.75rem;
		border-radius: 0 0 40px 40px;
		position: relative;
	}

	.annuity {
		background-color: white;
		width: 90%;
		height: 15.75rem;
		position: absolute;
		top: 8rem;
		left: 50%;
		border-radius: 20px;
		transform: translateX(-50%);
		box-shadow: 0px 0px 20px whitesmoke;
	}

	.annuity1,
	.annuity2 {
		background-color: white;
		width: 90%;
		height: 17.75rem;
		margin-top: 13rem;
		margin-left: 50%;
		transform: translateX(-50%);
		border-radius: 20px;
		box-shadow: 0px 0px 20px whitesmoke;
	}

	.annuity2 {
		margin-top: 2rem;
	}
</style>
