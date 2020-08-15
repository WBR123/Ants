<template>
  <div class>
    <div>
      <van-nav-bar
        title="财富专栏"
        left-text="返回"
        right-text="去有料"
        left-arrow
        @click-left="$router.back()"
      />
    </div>

    <div>
      <van-row>
        <van-col span="1"></van-col>
        <van-col span="22">
          <div class="banners"></div>
        </van-col>
        <van-col span="1"></van-col>
      </van-row>
      <van-row>
        <van-col span="24">
          <van-cell title="24小时热榜" is-link value="10分钟前更新" />
        </van-col>
      </van-row>
    </div>
    <div style="margin:1em">
      <h3>其他专栏</h3>
    </div>

    <div>
      <van-row>
        <van-col span="6">
          <img
            :src="require('@/assets/images/cat.jpg')"
            width="70"
            height="100"
            style="margin-left:1em"
          />
        </van-col>

        <van-col span="18">
          <div style="font-size:1em;padding-left:.6em;">北斗导航闪耀星空 如何把握投资机会</div>
          <div style="opacity:.5;font-size:0.6em;margin-top:5.5em;padding-left:1em;">1小时前 更新</div>
        </van-col>
      </van-row>
      <!-- 2 -->
      <van-row style="margin-top:.8em;">
        <van-col span="6">
          <img
            :src="require('@/assets/images/cat.jpg')"
            width="70"
            height="100"
            style="margin-left:1em"
          />
        </van-col>

        <van-col span="18">
          <div style="font-size:1em;padding-left:.6em;">券商板块单骑救主</div>
          <div style="opacity:.5;font-size:0.6em;margin-top:5.5em;padding-left:1em;">2小时前 更新</div>
        </van-col>
      </van-row>

      <van-row style="margin-top:.8em;">
        <van-col span="6">
          <img
            :src="require('@/assets/images/cat.jpg')"
            width="70"
            height="100"
            style="margin-left:1em"
          />
        </van-col>

        <van-col span="18">
          <div style="font-size:1em;padding-left:.6em;">企业营业成本的几个关键点</div>
          <div style="opacity:.5;font-size:0.6em;margin-top:5.5em;padding-left:1em;">2小时前 更新</div>
        </van-col>
      </van-row>

      <van-row style="margin-top:.8em;">
        <van-col span="6">
          <img
            :src="require('@/assets/images/cat.jpg')"
            width="70"
            height="100"
            style="margin-left:1em"
          />
        </van-col>

        <van-col span="18">
          <div style="font-size:1em;padding-left:.6em;">手头100万，要不要提前还房款</div>
          <div style="opacity:.5;font-size:0.6em;margin-top:5.5em;padding-left:1em;">3小时前 更新</div>
        </van-col>
      </van-row>

      <van-row style="margin-top:.8em;">
        <van-col span="6">
          <img
            :src="require('@/assets/images/cat.jpg')"
            width="70"
            height="100"
            style="margin-left:1em"
          />
        </van-col>

        <van-col span="18">
          <div style="font-size:1em;padding-left:.6em;">个股集体涨停，A股这个题材</div>
          <div style="opacity:.5;font-size:0.6em;margin-top:5.5em;padding-left:1em;">3小时前 更新</div>
        </van-col>
      </van-row>
    </div>

  </div>
</template>

<script type="text/javascript">
import { ActionBar, Toast } from "mand-mobile";
export default {
  data() {
    return {
			image: require("@/assets/images/1.jpg"),
		};
  },

  components: {},
  methods: {
    onReturn() {
      this.$router.push({ path: "/community" });
    },
  },
};
</script>
<style scoped="scoped">
.banners {
  width: 100%;
  height: 200px;
  background-color: red;
/*  display: flex;
  justify-content: center;
  align-items: center; */
	/* background-image:url(../assets/images/3.jpg); */
/* 	background-position: center;
	background-size: cover; */
}

</style>


