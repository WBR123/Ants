<template>
	<div class="main">
		<div class>
			<van-search shape="round" background="#2672FC" show-action placeholder="科技/动画/最新/房价/基金">
				<template #action>
					<div @click="onLogin" style="color:white;">登录</div>
				</template>
			</van-search>
		</div>
		<div>
			<van-notice-bar left-icon="volume-o" text="蚂蚁财富基于互联网的思想和技术，开放平台给金融机构，并由金融机构向投资者提供金融产品及相应的金融服务。" />
		</div>

		<div class="rotationBanner1">
			<van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false">
				<van-swipe-item class="banner1"></van-swipe-item>
				<van-swipe-item class="banner2"></van-swipe-item>
				<van-swipe-item class="banner3"></van-swipe-item>
				<van-swipe-item class="banner4"></van-swipe-item>
			</van-swipe>
		</div>

		<div style="margin-top: 1em;">
			<van-tabbar :fixed="false" inactive-color="#666" active-color="#666">
				<van-tabbar-item icon="printer" to="/ebao">
					余额宝
					<van-icon class-prefix="my-icon" name="yuebao" slot="icon" />
				</van-tabbar-item>
				<van-tabbar-item icon="smile-comment" to="/shares">
					股票
					<van-icon class-prefix="my-icon" name="gupiao" slot="icon" />
				</van-tabbar-item>
				<van-tabbar-item icon="point-gift" to="/Insurance">
					年金险
					<van-icon class-prefix="my-icon" name="baoxian" slot="icon" />
				</van-tabbar-item>
			</van-tabbar>
		</div>
		<!---->
		<div>
			<van-cell title="关于相机的研究" icon="send-gift" />
			<van-cell title="【善于发现】不一样看法" />
			<van-image width="100%" height="8rem" :src="images1" />
			<van-row style="padding: 0.3em 0;">
				<van-col span="3" style="padding-left:1rem">
					<van-image round width="1rem" height="1rem" :src="images" />
				</van-col>
				<van-col span="8">
					<div class="titleOne">夏天的猫/1小时前</div>
				</van-col>
				<van-col span="4"></van-col>
				<van-col span="5">
					<van-icon name="smile" />5000+
				</van-col>
				<van-col span="4">
					<van-icon name="chat" />11333
				</van-col>
			</van-row>
		</div>

		<div>
			<van-cell title="关于科技的研究" icon="send-gift" />
			<van-cell title="引领世界的科技" />
			<van-image width="100%" height="8rem" :src="images2" />
			<van-row style="padding: 0.3em 0;">
				<van-col span="3"  style="padding-left:1rem">
					<van-image round width="1rem" height="1rem" :src="images" />
				</van-col>
				<van-col span="8">
					<div class="titleOne">科技猫/3小时前</div>
				</van-col>
				<van-col span="4"></van-col>
				<van-col span="5">
					<van-icon name="smile" />44116
				</van-col>
				<van-col span="4">
					<van-icon name="chat" />11K
				</van-col>
			</van-row>
		</div>

		<div style="padding-bottom:4em">
			<van-cell title="关于航天的研究" icon="send-gift" />
			<van-cell title="【启航】新世界" />
			<van-image width="100%" height="8rem" :src="images3" />
			<van-row style="padding: 0.3em 0;">
				<van-col span="3" style="padding-left:1rem">
					<van-image round width="1rem" height="1rem" :src="images" />
				</van-col>
				<van-col span="8">
					<div class="titleOne">未来致电/1小时前</div>
				</van-col>
				<van-col span="4"></van-col>
				<van-col span="5">
					<van-icon name="smile" />1000+
				</van-col>
				<van-col span="4">
					<van-icon name="chat" />11
				</van-col>
			</van-row>
		</div>

		<!--按钮添加发布信息-->
		<div class="btnAdd">
			<van-button icon="plus" type="info" round size="normal" />
		</div>

		<!--footer-->
		<footerBar></footerBar>
	</div>
</template>

<script>
	import footerBar from "@/components/footer.vue";

	export default {
		components: {
			footerBar,
		},
		data() {
			return {
				images: require("@/assets/images/1.jpg"),
				images1: require("@/assets/images/4.jpg"),
				images2: require("@/assets/images/5.jpg"),
				images3: require("@/assets/images/3.jpg"),
			};
		},
		methods: {
			onLogin() {
				this.$router.push({
					path: "/login"
				});
			},
		},
	};
</script>

<style scoped="scoped">

	.titleOne {
		font-size: 5px !important;
	}

	.btnAdd {
		position: fixed;
		right: 1.5em;
		bottom: 5em;
	}

	.my-swipe {
		height: 180px;
	}

	.my-swipe .van-swipe-item:nth-child(1) {
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-image:url(../assets/images/banner1.jpg);
		background-position: center;
		background-size: cover;
	}
	.my-swipe .van-swipe-item:nth-child(2) {
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-image:url(../assets/images/banner2.jpg);
		background-position: center;
		background-size: cover;
	}
	.my-swipe .van-swipe-item:nth-child(3) {
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-image:url(../assets/images/banner3.jpg);
		background-position: center;
		background-size: cover;
	}
	.my-swipe .van-swipe-item:nth-child(4) {
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-image:url(../assets/images/banner4.jpg);
		background-position: center;
		background-size: cover;
	}

	.rotationBanner {
		width: 100%;
		height: 200px !important;
	}
</style>
