<template>
  <div class>
    <div>
      <van-nav-bar left-arrow @click-left="onClickLeft" left-text="关于" />
    </div>
    <div>
      <div>
        <div class="payment">
          <img :src="require('@/assets/images/payment.jpg')" width="200" height="170" alt />
        </div>
        <div class="edition">版本号10.1.97</div>
      </div>
      <div style="margin-top:0.7em">
        <van-cell title="检测更新" is-link value="已是最新版本"></van-cell>
        <van-cell title="去评分" is-link />
        <van-cell title="自动下载安装包" is-link value="仅WIFI网络" />
        <van-cell title="版权信息" is-link />
        <van-cell title="服务协议" is-link />
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
      this.$router.push({ path: "/setUp" });
    },
  },
};
</script>

<style>
.edition,
.payment {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
