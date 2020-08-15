<template>
  <div class>
    <div>
      <van-nav-bar title="卷包" left-text="返回" right-text="失效卷" left-arrow @click-left="onReturn()" />
    </div>
    <div class="Package">
        <img :src="require('@/assets/images/package.jpg')" width="300" height="300"/>
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
    onReturn() {
      this.$router.push({ path: "/my" });
    },
  },
};
</script>

<style>
.Package{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
