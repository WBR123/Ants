<template>
  <div class>
    <div>
      <van-nav-bar left-arrow @click-left="onClickLeft" left-text="支付设置" />
    </div>
    <div>
      <div style="margin-top:0.7em">
        <van-cell title="扣款顺序" is-link />
      </div>
      <div style="margin-top:0.7em">
        <van-cell title="免密支付/自动扣款" is-link />
      </div>

      <div style="margin-top:0.7em">
        <van-cell title="生物支付" is-link value="指纹、手机刷脸支付" />
      </div>

      <div style="margin-top:0.7em">
        <van-cell title="智能设备" is-link value="手表、手环、智能卡等" />
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
</style>
