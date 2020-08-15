<template>
	<div>
		<div>
			<van-nav-bar left-arrow @click-left="$router.back()" left-text="返回" titlt="资金保障" />
		</div>
		<div class="main-three">

			<van-row type="flex" justify="center">
				<van-col span="3"></van-col>
				<van-col span="12">
					<h2 style="margin-top: 3rem;color: #fff;">账户资金 保障中</h2>
				</van-col>
				<van-col span="3"></van-col>
			</van-row>

			<van-row type="flex" justify="center">
				<van-col span="3"></van-col>
				<van-col span="12">
					<van-button type="info" block style="margin-top: 2rem;color: #fff;background-color:#15DDD0;border: none;border-radius:0.625rem;">免费安全保障</van-button>
				</van-col>
				<van-col span="3"></van-col>
			</van-row>
		</div>

<!-- 为什么需要保障安全险 -->
		<div>
			<van-row>
				<van-col span="1"></van-col>
				<van-col span="20"><h3 style="margin-top: 1.9rem;">为什么需要保障安全险？</h3></van-col>
				<van-col span="1"></van-col>
			</van-row>

		</div>
		
		<div>
			<van-row style="padding-top: 1.2rem;" type="flex" justify="center">
				<van-col span="3" style="text-align: center;line-height: 3.2rem;"><van-icon name="gold-coin" /></van-col>
				<van-col span="20" style="opacity:0.5">保障被保险人在支付账户内的所有资金，因被他人盗用而造成的损失</van-col>
				<van-col span="3"></van-col>
			</van-row>
			<van-row style="padding-top: 1.2rem;" type="flex" justify="center">
				<van-col span="3" style="text-align: center;line-height: 3.2rem;"><van-icon name="gold-coin" /></van-col>
				<van-col span="20" style="opacity:0.5">范围包括余额，快捷支付、余额宝、余利宝、理财资产、花呗、借呗等。</van-col>
				<van-col span="3"></van-col>
			</van-row>
			<van-row style="padding-top: 1.2rem;" type="flex" justify="center">
				<van-col span="3" style="text-align: center;line-height: 3.2rem;"><van-icon name="gold-coin" /></van-col>
				<van-col span="20"  style="opacity:0.5">我们承诺在保质期内，无赔付次数限制</van-col>
				<van-col span="3"></van-col>
			</van-row>
			
			<van-row type="flex" justify="center">
				<van-col span="4"></van-col>
				<van-col span="15">
					<van-divider>蚂蚁保险·账户安全险</van-divider>
				</van-col>
				<van-col span="4"></van-col>
			</van-row>
			<van-row type="flex" justify="center">
				<van-col span="4"></van-col>
				<van-col span="16" style="color: #969799;margin:-0.5rem ;text-align: center;">守护你的每一分钱</van-col>
				<van-col span="4"></van-col>
			</van-row>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
	};
</script>

<style scoped>
	.main-three {
		background-color: #2C75FD;
		width: 100%;
		height: 8.375rem;
	}
</style>
