<template>
	<div>
		<div>
			<van-nav-bar title="股票" left-text="返回" left-arrow @click-left="onClickLeft"> 
				<template #right>
					<van-icon name="search" size="18" />
				</template>
			</van-nav-bar>
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
					path: "/home"
				})
			},
		},
	};
</script>

<style>
</style>
