<template>
	<div>
		<div>
			<van-nav-bar style="" left-text="返回" left-arrow @click-left="$router.back()" :border="false"></van-nav-bar>
		</div>
		<div class="main-box"></div>
		<div class="annuity">
			<!-- 居中 -->
			<h2 style="margin-top: 2rem;">请在支付宝查看借呗状态</h2>
			<h6 style="text-align: center;margin-top: 2rem;">支付宝-我的-借呗</h6>
			<van-row type="flex" justify="center">
				<van-col span="1"></van-col>
				<van-col span="20" style="margin-top: 3rem;"><van-button type="info" block>去支付宝查看</van-button></van-col>
				<van-col span="1"></van-col>
			</van-row>
		</div>
	</div>
</template>

<script>
</script>

<style>
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
		top: 7rem;
		left: 50%;
		border-radius: 20px;
		transform: translateX(-50%);
		box-shadow: 0px 0px 20px whitesmoke;
	}
</style>
