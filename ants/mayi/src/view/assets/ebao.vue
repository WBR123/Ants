<template>
	<html>
		<head></head>
		<body>
			<div class="main">
				<div class="navs">
					<van-nav-bar title="余额宝" left-text="返回" left-arrow="" @click-left="$router.back()" :border="false" style="background: #FF5429;">
						<van-icon name="question-o" slot="right" />
					</van-nav-bar>
				</div>
				<div class="mainBg">
					<div class="main-one" style="font-size: .3rem;opacity: 0.6;">
						昨日收益(元)
					</div>
					<div>
						<h2>暂无收益</h2>
					</div>
					<div class="main-one" style="font-size: .5rem;">
						总金额0.00元
					</div>
					<ul class="main-two">
						<li> <span>累计收益(元)</span>
							<div>
								0.00
							</div>
						</li>
						<li> <span>万份收益(元)</span>
							<div>
								0.00
							</div>
						</li>
						<li> <span>七日年化(%)</span>
							<div>
								0.00
							</div>
						</li>
					</ul>
				</div>
				<div>
					<van-collapse accordion v-model="activeNames">
						<van-collapse-item title="资金管理" name="1" icon="gold-coin-o">
							<van-cell center="" title="工资理财" label="从银行卡定时把资金转入到余额宝" />
							<van-cell center="" title="还贷管家" label="从余额宝定时把资金转入到银行卡自动还款" />
							<van-cell title="余额宝自动转入" value="未转" />
						</van-collapse-item>
						<van-collapse-item title="心愿储存" name="2" icon="like-o" value="帮你的心愿管住钱">
							<van-cell title="心愿管理" is-link />
						</van-collapse-item>
						<van-collapse-item title="讨论" name="3" icon="more-o">
							<van-cell title="暂无评论" />
						</van-collapse-item>
					</van-collapse>
				</div>
				<div>
					<van-row type="flex" justify="center" style="margin:2rem">
						<van-col span="20" style="font-size:0.1rem;opacity: 0.6;">
							余额宝对应金币基金销售服务由网商银行提供
						</van-col>
					</van-row>
				</div>
				<div style="position:absolute;bottom:0rem;width: 100%;">
					<van-row type="flex" justify="space-between">
						<van-col span="12">
							<van-button block="" type="default" style="color: #0570DB;">
								转出
							</van-button>
						</van-col>
						<van-col span="12">
							<van-button block="" type="info" to="/changeinto">
								转入
							</van-button>
						</van-col>
					</van-row>
				</div>
			</div>
		</body>
	</html>
</template>

<script>
	export
	default {
		data() {
			return {
				activeNames: ['0'],
			};
		},
		methods: {},
	};
</script>

<style scoped>
	.mainBg {
		background: #FF5429;
		height: 14.75rem;
		width: 100%;
		color: white;
	}

	.main-one {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1.5rem 0;
	}

	.main-two {
		display: flex;
		justify-content: space-around;
		align-items: center;
		text-align: center;
		font-size: .6rem;
	}
</style>
