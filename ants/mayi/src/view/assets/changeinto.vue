<template>
	<div>
		<div>
			<van-nav-bar title="转入余额宝" left-text="返回" right-text="交易规则" left-arrow @click-left="onClickLeft" />
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			onClickLeft() {
				this.$router.push({
					path: "/ebao"
				})
			},
		}

	}
</script>

<style>

</style>
