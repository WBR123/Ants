<template>
  <div>
    <div>
      <van-row class="navBar" type="flex" justify="end">
        <van-col span="2">
          <van-icon name="calender-o" size="25" />
        </van-col>
        <van-col span="21">市场</van-col>
      </van-row>
    </div>

    <div style="margin-top:1.4em;">
      <!-- 两端对齐 -->
      <van-row type="flex" justify="space-between">
        <van-col span="6">
          <van-button class="timesbtn" round type="info">2020-8-9</van-button>
        </van-col>
        <van-col span="6">
          <div class="center">3334.04</div>
          <span class="span-icon">上证指数</span>
        </van-col>
        <van-col span="6">
          <div class="center">13648.00</div>
          <span class="span-icon">深证指数</span>
        </van-col>
        <van-col span="6">
          <div class="center">2749.11</div>
          <span class="span-icon">创业指数</span>
        </van-col>
      </van-row>
    </div>

    <div class="titleBottom">
      <van-tabbar :fixed="false" :border="false" inactive-color="#666" active-color="#666">
        <van-tabbar-item icon="expand-o">尊享 <van-icon class-prefix="my-icon" name="huangjin" slot="icon" /></van-tabbar-item>
        <van-tabbar-item icon="home-o">理财<van-icon class-prefix="my-icon" name="licai" slot="icon" /> </van-tabbar-item>
        <van-tabbar-item icon="search">黄金 <van-icon class-prefix="my-icon" name="baoxian" slot="icon" /></van-tabbar-item>
        <van-tabbar-item icon="friends-o">基金 <van-icon class-prefix="my-icon" name="jijin" slot="icon" /></van-tabbar-item>
      </van-tabbar>
    </div>

    <div class="titleBottom">
      <van-cell title="股神翻身仗" is-link value="查看全部" />
      <van-tabs>
        <van-tab title="投资顺风车">
          <div class="block">
            <div>近一周</div>
            <div>近一月</div>
            <div>近三月</div>
          </div>
        </van-tab>
        <van-tab title="攒点金子">
          <div class="block">
            <div>金价走势</div>
            <div>实时金价</div>
            <div>参考</div>
          </div>
        </van-tab>
        <van-tab title="稳健理财">
          <div class="block">
            <div>七日年化收益率</div>
            <div>万份收益</div>
            <div>产品亮点</div>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <div class="titleBottom">
      <van-cell title="跨境电商三亚" is-link value="查看全部" />
      <van-tabs>
         <van-tab title="精选组合">
          <div class="exhibition">
            <label for>领福利</label>
            <van-row>
              <van-col span="18" class="vague">
              活钱理财更优先选择，本组合已货币基金打底
              </van-col>
              <van-col span="5">
                <img :src="require('@/assets/images/4.jpg')" height="60px" />
              </van-col>
            </van-row>
            <div></div>
          </div>
        </van-tab>
        <van-tab title="进攻优选">
          <div class="exhibition">
            <label for>开放买入，开发卖出</label>
            <van-row>
              <van-col span="18" class="vague">
                基金销售服务由蚂蚁（杭州）基金销售优先公司提供
              </van-col>
              <van-col span="5">
                <img :src="require('@/assets/images/4.jpg')" height="60px" />
              </van-col>
            </van-row>
            <div></div>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <!-- footer底部 -->
    <footerBar></footerBar>
  </div>
</template>

<script>
import footerBar from "@/components/footer.vue";
export default {
  data() {
    return {
      active: 0,
    };
  },
  components: {
    footerBar,
  },
};
</script>

<style>
.exhibition {
  padding: 1.2em;
}
.vague {
  opacity: 0.5;
  margin-top: 5px;
  overflow: hidden;
  height: 80px;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
.block {
  width: 100%;
  height: 60px;
  /* background: blueviolet; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 2em;
}
.block div {
  width: 25%;
  height: 80px;
  border-radius: 20px;
  background: linear-gradient(#0dc5fb, #44a1fe, #2c75fd 40%) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.titleBottom {
  padding-top: 1.9em;
}
.navBar {
  padding-top: 0.5em;
  background: linear-gradient(#0dc5fb, #44a1fe, #2c75fd 40%) !important;
  color: white !important;
  height: 35px;
}
.timesbtn {
  border-radius: 0 30px 30px 0 !important;
}
.center {
  text-align: center;
}
.span-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  opacity: 0.5;
}
</style>