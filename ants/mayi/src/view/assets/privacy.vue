<template>
  <div class>
    <div>
      <van-nav-bar left-arrow @click-left="onClickLeft" left-text="隐私" />
    </div>
    <div>

      <div style="margin-top:.7em">
          <van-cell title="常用隐私设置"  is-link size="large" label="添加朋友验证、朋友动态和通讯录黑名单等常用设置" />
      </div>
       <div style="margin-top:1em">
          <van-cell title="授权管理"  is-link size="large" label="管理已授权的产品和设备" />
      </div>
       <div style="margin-top:1em">
          <van-cell title="解锁设置"  is-link size="large" label="设置指纹/手势解锁来保护隐私信息" />
      </div>
       <div style="margin-top:1em">
          <van-cell title="系统权限管理"  is-link size="large" label="管理支付访问位置，相机，通讯录等系统权限" />
      </div>
      <div style="margin-top:0.7em">
        <van-cell title="支付隐私权政策" is-link/>
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
