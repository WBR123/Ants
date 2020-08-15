<template>
	<div>
		<div class="topSearch">
			<van-search class="slots" show-action shape="round" background="#2672FC" placeholder="科技/动画/最新/房价/基金">
				<template #action>
					<van-cell center>
						<van-icon name="chat-o" size="25" color="#B9D1F9" />
					</van-cell>
				</template>
			</van-search>
		</div>

		<div>
			<van-tabbar v-model="active" :fixed="false" style="margin-top: 1em;" :border="false" active-color="#646566">
				<van-tabbar-item icon="diamond" to="/bigShot">大咖 <van-icon class-prefix="my-icon" name="huangjin" slot="icon"/></van-tabbar-item>
				<van-tabbar-item icon="bookmark" to="/special">专栏 <van-icon class-prefix="my-icon" name="huabanfuben" slot="icon"/></van-tabbar-item>
				<van-tabbar-item icon="eye" to="/watch">看点 <van-icon class-prefix="my-icon" name="kandian" slot="icon"/></van-tabbar-item>
				<van-tabbar-item icon="play-circle">短视频 <van-icon class-prefix="my-icon" name="shipin" slot="icon"/></van-tabbar-item>
			</van-tabbar>
		</div>

		<div>
			<van-tabs v-model="active">
				<van-tab title="热卖">
					<!-- 1 -->
					<div class="tabsList">
						<van-icon name="friends-o" />群伟伟
						<van-button type="default" size="mini" style="position: absolute;right: 20px;" color="#8CC6E2">+关注</van-button>
						<div>
							<h3>7.28|诺安成长|阶段性低位</h3>
						</div>

						<van-row>
							<van-col span="18">每个交易日下午两点分享个人基金操作,以及基金趋势数据每日更新，感兴趣的朋友们可以点击右上角关注下...</van-col>
							<van-col span="5">
								<van-image :src="require('@/assets/images/fund.jpg')" style="width:100%;height:55px;margin-left:.5em;" radius="5px" />
							</van-col>
						</van-row>
						<van-row>
							<van-col span="10" style="text-align: center;">
								<van-cell center>1小时前</van-cell>
							</van-col>
							<van-col span="4">
								<van-cell center>···</van-cell>
							</van-col>
							<van-col span="5">
								<van-cell center>
									<van-icon name="thumb-circle-o" size="15" color="#676767" />36</van-cell>
							</van-col>
							<van-col span="5">
								<van-cell center>
									<van-icon name="comment-o" size="15" color="#676767" />25</van-cell>
							</van-col>
						</van-row>
					</div>
					<!-- 2 -->
					<div class="tabsList">
						<van-icon name="friends-o" />红茶品股
						<van-button type="default" size="mini" style="position: absolute;right: 20px;" color="#8CC6E2">+关注</van-button>
						<div>
							<h3>7.28|诺安成长|阶段性低位</h3>
						</div>

						<van-row>
							<van-col span="18">每个交易日下午两点分享个人基金操作,以及基金趋势数据每日更新，感兴趣的朋友们可以点击右上角关注下...</van-col>
							<van-col span="5">
								<van-image :src="require('@/assets/images/fund.jpg')" style="width:100%;height:55px;margin-left:.5em;" radius="5px" />
							</van-col>
						</van-row>
						<van-row>
							<van-col span="10" style="text-align: center;">
								<van-cell center>1小时前</van-cell>
							</van-col>
							<van-col span="4">
								<van-cell center>···</van-cell>
							</van-col>
							<van-col span="5">
								<van-cell center>
									<van-icon name="thumb-circle-o" size="15" color="#676767" />36</van-cell>
							</van-col>
							<van-col span="5">
								<van-cell center>
									<van-icon name="comment-o" size="15" color="#676767" />25</van-cell>
							</van-col>
						</van-row>
					</div>

					<!--3-->
					<div class="tabsList">
						<van-icon name="friends-o" />江南夜视仪
						<van-button type="default" size="mini" style="position: absolute;right: 20px;" color="#8CC6E2">+关注</van-button>
						<div>
							<h3>7.28|诺安成长|阶段性低位</h3>
						</div>

						<van-row>
							<van-col span="18">每个交易日下午两点分享个人基金操作,以及基金趋势数据每日更新，感兴趣的朋友们可以点击右上角关注下...</van-col>
							<van-col span="5">
								<van-image :src="require('@/assets/images/fund.jpg')" style="width:100%;height:55px;margin-left:.5em;" radius="5px" />
							</van-col>
						</van-row>
						<van-row>
							<van-col span="10" style="text-align: center;">
								<van-cell center>1小时前</van-cell>
							</van-col>
							<van-col span="4">
								<van-cell center>···</van-cell>
							</van-col>
							<van-col span="5">
								<van-cell center>
									<van-icon name="thumb-circle-o" size="15" color="#676767" />36</van-cell>
							</van-col>
							<van-col span="5">
								<van-cell center>
									<van-icon name="comment-o" size="15" color="#676767" />25</van-cell>
							</van-col>
						</van-row>
					</div>

					<!-- 4 -->
					<div class="tabsList">
						<van-icon name="friends-o" />群伟伟
						<van-button type="default" size="mini" style="position: absolute;right: 20px;" color="#8CC6E2">+关注</van-button>
						<div>
							<h3>7.28|诺安成长|阶段性低位</h3>
						</div>

						<van-row>
							<van-col span="18">每个交易日下午两点分享个人基金操作,以及基金趋势数据每日更新，感兴趣的朋友们可以点击右上角关注下...</van-col>
							<van-col span="5">
								<van-image :src="require('@/assets/images/fund.jpg')" style="width:100%;height:55px;margin-left:.5em;" radius="5px" />
							</van-col>
						</van-row>
						<van-row>
							<van-col span="10" style="text-align: center;">
								<van-cell center>1小时前</van-cell>
							</van-col>
							<van-col span="4">
								<van-cell center>···</van-cell>
							</van-col>
							<van-col span="5">
								<van-cell center>
									<van-icon name="thumb-circle-o" size="15" color="#676767" />36</van-cell>
							</van-col>
							<van-col span="5">
								<van-cell center>
									<van-icon name="comment-o" size="15" color="#676767" />25</van-cell>
							</van-col>
						</van-row>
					</div>
					<!-- 5 -->
					<div class="tabsList">
						<van-icon name="friends-o" />群伟伟
						<van-button type="default" size="mini" style="position: absolute;right: 20px;" color="#8CC6E2">+关注</van-button>
						<div>
							<h3>7.28|诺安成长|阶段性低位</h3>
						</div>

						<van-row>
							<van-col span="18">每个交易日下午两点分享个人基金操作,以及基金趋势数据每日更新，感兴趣的朋友们可以点击右上角关注下...</van-col>
							<van-col span="5">
								<van-image :src="require('@/assets/images/fund.jpg')" style="width:100%;height:55px;margin-left:.5em;" radius="5px" />
							</van-col>
						</van-row>
						<van-row>
							<van-col span="10" style="text-align: center;">
								<van-cell center>1小时前</van-cell>
							</van-col>
							<van-col span="4">
								<van-cell center>···</van-cell>
							</van-col>
							<van-col span="5">
								<van-cell center>
									<van-icon name="thumb-circle-o" size="15" color="#676767" />36</van-cell>
							</van-col>
							<van-col span="5">
								<van-cell center>
									<van-icon name="comment-o" size="15" color="#676767" />25</van-cell>
							</van-col>
						</van-row>
					</div>

					<!--6-->
					<div class="tabsList">
						<van-icon name="friends-o" />群伟伟
						<van-button type="default" size="mini" style="position: absolute;right: 20px;" color="#8CC6E2">+关注</van-button>
						<div>
							<h3>7.28|诺安成长|阶段性低位</h3>
						</div>

						<van-row>
							<van-col span="18">每个交易日下午两点分享个人基金操作,以及基金趋势数据每日更新，感兴趣的朋友们可以点击右上角关注下...</van-col>
							<van-col span="5">
								<van-image :src="require('@/assets/images/fund.jpg')" style="width:100%;height:55px;margin-left:.5em;" radius="5px" />
							</van-col>
						</van-row>
						<van-row>
							<van-col span="10" style="text-align: center;">
								<van-cell center>1小时前</van-cell>
							</van-col>
							<van-col span="4">
								<van-cell center>···</van-cell>
							</van-col>
							<van-col span="5">
								<van-cell center>
									<van-icon name="thumb-circle-o" size="15" color="#676767" />36</van-cell>
							</van-col>
							<van-col span="5">
								<van-cell center>
									<van-icon name="comment-o" size="15" color="#676767" />25</van-cell>
							</van-col>
						</van-row>
					</div>

				</van-tab>
				<van-tab title="讨论区">
					<div class="tabsList">
						<van-icon name="friends-o" />群伟伟
						<van-button type="default" size="mini" style="position: absolute;right: 20px;" color="#8CC6E2">+关注</van-button>
						<div>
							<h3>7.28|诺安成长|阶段性低位</h3>
						</div>

						<van-row>
							<van-col span="18">每个交易日下午两点分享个人基金操作,以及基金趋势数据每日更新，感兴趣的朋友们可以点击右上角关注下...</van-col>
							<van-col span="5">
								<van-image :src="require('@/assets/images/fund.jpg')" style="width:100%;height:55px;margin-left:.5em;" radius="5px" />
							</van-col>
						</van-row>
						<van-row>
							<van-col span="10" style="text-align: center;">
								<van-cell center>1小时前</van-cell>
							</van-col>
							<van-col span="4">
								<van-cell center>···</van-cell>
							</van-col>
							<van-col span="5">
								<van-cell center>
									<van-icon name="thumb-circle-o" size="15" color="#676767" />36</van-cell>
							</van-col>
							<van-col span="5">
								<van-cell center>
									<van-icon name="comment-o" size="15" color="#676767" />25</van-cell>
							</van-col>
						</van-row>
					</div>
				</van-tab>
				<van-tab title="关注">
					<div class="tabsList">
						<van-icon name="friends-o" />群伟伟
						<van-button type="default" size="mini" style="position: absolute;right: 20px;" color="#8CC6E2">+关注</van-button>
						<div>
							<h3>7.28|诺安成长|阶段性低位</h3>
						</div>

						<van-row>
							<van-col span="18">每个交易日下午两点分享个人基金操作,以及基金趋势数据每日更新，感兴趣的朋友们可以点击右上角关注下...</van-col>
							<van-col span="5">
								<van-image :src="require('@/assets/images/fund.jpg')" style="width:100%;height:55px;margin-left:.5em;" radius="5px" />
							</van-col>
						</van-row>
						<van-row>
							<van-col span="10" style="text-align: center;">
								<van-cell center>1小时前</van-cell>
							</van-col>
							<van-col span="4">
								<van-cell center>···</van-cell>
							</van-col>
							<van-col span="5">
								<van-cell center>
									<van-icon name="thumb-circle-o" size="15" color="#676767" />36</van-cell>
							</van-col>
							<van-col span="5">
								<van-cell center>
									<van-icon name="comment-o" size="15" color="#676767" />25</van-cell>
							</van-col>
						</van-row>
					</div>
				</van-tab>
			</van-tabs>
		</div>

		<!-- footer -->
		<footerBar></footerBar>
	</div>
</template>

<script>
	import footerBar from "@/components/footer.vue";
	export default {
		data() {
			return {
				active: 'home',
				active1: '0',
				active2: 'home',
			};
		},
		components: {
			footerBar
		}
	};
</script>

<style>
	.tabsList {
		padding: 25px;
	}
</style>