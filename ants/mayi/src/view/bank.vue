<template>
	<div>
		<van-nav-bar left-arrow @click-left="$router.back(-1)" left-text="返回" />

		<div v-for="(val,index) in bankList" :key="index">
			<van-row class="bankbg" v-if="isShow" type="flex" justify="center">
				<van-col span="3">
					<span>
						<img style="margin-top:0.6rem ;" :src="require('../assets/small_logo/'+val.Icon+'.png')" width="50px" height="40px">
					</span>
				</van-col>
				<van-col span="18">
					<p>{{val.bankName}}</p>
					<p>{{val.cardType}}</p>
					<span>{{val.cardNo}}</span>
				</van-col>

			</van-row>
		</div>
		<div v-if="isShow">
			<div style="margin-top: 2rem;">
				<van-row type="flex" justify="center">
					<van-col span="15">
						<van-button type="info" block @click="AddBank" round size='small'>添加银行卡</van-button>
					</van-col>
				</van-row>
			</div>
		</div>
		<div class="navBackground" v-else>
			<div style="margin-top:2em">
				<van-row justify="center">
					<van-col span="24">
						<h2>添加银行卡</h2>
					</van-col>
				</van-row>
				<van-row justify="center">
					<van-col span="24">
						<h5 class="h5">请绑定持卡人本人的银行卡</h5>
					</van-col>
				</van-row>
				<van-row justify="center">
					<van-col span="24">
						<van-form style="position: relative;">
							<van-field v-model="nameUser" name label="持卡人" label-width="50px"></van-field>
							<div class="occlusion"></div><!-- 遮罩层 -->
							<van-field v-model="Card " name="卡号" label="卡号" placeholder="卡号" label-width="50px" />
							<div style="margin: 16px;">
								<van-button round block type="info" size="small" native-type="submit" @click="btnSearch">下一步</van-button>
							</div>
						</van-form>
					</van-col>
				</van-row>
			</div>
		</div>

	</div>
</template>

<script type="text/javascript">
	import bankInfo from "../utils/bank.js";
	import {
		get
	} from "@/utils/custom.js";

	import {
		Toast
	} from "vant";
	export default {
		data() {
			return {
				nameUser: "吴彦祖",
				Card: "",
				// 6217232108000053673
				// 6217003400005988558
				// 6230351861424428
				// 6228480858823000170
				// 6228480831781064918
				bankList: [],
				isShow: true
			};
		},
		components: {
			[Toast.name]: Toast,
		},
		async created() {
			let obj = localStorage.getItem('bankList')
			console.log(obj)
			let blist = [];
			if (localStorage.getItem('bankList')) {
				let list = localStorage.getItem('bankList').split(':');

				for (var i = 0; i < list.length - 1; i++) {
					let arr = list[i].split(',');
					let obj = {};
					obj.cardNo = arr[1];
					obj.Icon = arr[3];
					obj.bankName = arr[2];
					obj.cardType = arr[0];
					blist.push(obj);
				}
				// console.log(list);
			}
			this.bankList = blist;
			// localStorage.clear();//清缓存
			// return false
		},
		methods: {
			AddBank() {
				this.isShow = !this.isShow;
			},
			async btnSearch() {
				var result = await this.$get('https://ccdcapi.alipay.com/validateAndCacheCardInfo.json?cardNo=' + this.Card +
					'&cardBinCheck=true').then(function(res) {
					return res;
				})

				switch (result.cardType) {
					case 'DC':
						result.cardType = '储蓄卡';
						break;
					case 'CC':
						result.cardType = '信用卡';
						break;
					case 'SCC':
						result.cardType = '准贷记卡';
						break;
					case 'PC':
						result.cardType = '预付费卡';
						break;
				}

				// 声明一个 变量   用来接收  银行卡列表信息
				let bankList = [];

				if (result.validated == true) {
					var num = Number(bankInfo.bankList.indexOf(result.bank)) + 1;
					this.isShow = !this.isShow;
					var bankName = bankInfo.bankList[num];
					// setTimeout(() => {

					// }, 2000);
					// Toast(bankName + '银行卡添加成功');

					//  组装好  返回的来数据  
					let obj = {};
					let local = '';
					// 判断当前本地缓存中  是否有存在  银行卡列表信息
					if (localStorage.getItem('bankList')) {
						local = localStorage.getItem('bankList');
						// console.log(local);
					} else {
						local = '';
					}

					// console.log(result);

					obj.cardType = result.cardType;
					obj.cardNo = result.key;
					obj.bankName = bankName;
					obj.Icon = result.bank;

					local += obj.cardType + ',' + obj.cardNo + ',' + obj.bankName + ',' + obj.Icon + ':';
					// console.log(local);
					// 本地缓存
					localStorage.setItem('bankList', local);
					// 把刚才添加成功的银行卡   放入到我们的 银行列表中
					bankList.push(obj);
					// console.log(bankList);

					// 判断是否有本地缓存信息
					if (localStorage.getItem('bankList')) {
						let list = localStorage.getItem('bankList').split(',');
						// console.log(list);
					}

					let blist = [];
					if (localStorage.getItem('bankList')) {
						let list = localStorage.getItem('bankList').split(':');

						// 把本地存储的银行卡信息  转换数据类型
						for (var i = 0; i < list.length - 1; i++) {
							let arr = list[i].split(',');
							let obj = {};
							obj.cardNo = arr[1];
							obj.Icon = arr[3];
							obj.bankName = arr[2];
							obj.cardType = arr[0];
							blist.push(obj);
						}
						// console.log(list);
					}
					this.bankList = blist;

				} else {
					Toast.fail('银行卡添加失败, 请检查卡号是否填写正确');
				}
				// console.log(result)
			},
			onClickLeft() {
				this.$router.push({
					path: "/my"
				});
			}
		},

	};
</script>

<style>
	.bankbg {
		background-color: #0570DB;
		color: white;
		border-radius: 5px 5px 0 0;
		margin-top: 0.2rem;
		height: 5rem;
	}

	.occlusion {
		position: absolute;
		top: 0;
		width: 17rem;
		height: 50px;
		background: transparent;
		z-index: 5;
	}

	.navBackground {
		height: 100%;
		width: 100%;
		color: black;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h2,
	.h5 {
		text-align: center;
	}
</style>
