<template>
  <div class>
    <div>
      <van-nav-bar left-arrow @click-left="onClickLeft" left-text="安全设置" />
    </div>
    <div>
      <div style="margin-top:0.7em">
        <van-cell title="手机号" is-link value="189******40"/>
        <van-cell title="密码设置" is-link />
        <van-cell title="账号授权" is-link />
        <van-cell title="安全产品" is-link />
      </div>

      <div style="margin-top:1em">
          <van-cell title="解锁设置"  is-link size="large" label="设置指纹/手势解锁来保护隐私信息" />
      </div>
       <div style="margin-top:1em">
          <van-cell title="安全中心"  is-link size="large" label="解决安全问题，获取安全质询，请点击" />
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
