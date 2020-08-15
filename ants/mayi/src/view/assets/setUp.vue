<template>
	<div class>
		<div>
			<van-nav-bar left-arrow @click-left="onClickLeft" left-text="返回" />
		</div>
		<div>
			<div style="margin-top:.7em">
				<van-cell title="安全设置" is-link value="手机号、密码" to="/security" />
				<van-cell title="生物识别" is-link value="人脸、指纹、声纹" to="/biology" />
			</div>
			<div style="margin-top:1em">
				<van-cell title="支付设置" is-link to="/payment" />
				<van-cell title="通用" is-link to="/currency" />
				<van-cell title="隐私" is-link to="/privacy" />
				<van-cell title="关于" is-link value="版本号10.3.7" to="/about" />
			</div>

			<div style="margin-top:1em">
				<!-- <van-cell title="" is-link  /> -->
				<van-button type="default" block to="/login" style="border:none !important;">退出登录</van-button>
			</div>
		</div>
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
					path: "/my"
				});
			},
		},
	};
</script>

<style>
</style>
