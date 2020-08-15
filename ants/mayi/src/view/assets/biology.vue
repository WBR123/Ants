<template>
  <div class>
    <div>
      <van-nav-bar left-arrow @click-left="onClickLeft" left-text="生物识别" />
    </div>
    <div>
      <div style="margin-top:0.7em">
        <van-cell title="刷脸设置" is-link />
        <van-cell title="指纹" is-link />
        <van-cell title="声音锁" is-link value="未开启" />
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
