<template>
  <div class>
    <div>
      <van-nav-bar left-arrow @click-left="onClickLeft" left-text="通用" />
    </div>
    <div>
      <div style="margin-top:0.7em">
        <van-cell title="新信息通知" is-link />
      </div>

      <div style="margin-top:0.7em">
        <van-cell title="多语言" is-link />
        <van-cell title="字体大小" is-link />
        <van-cell title="聊天背景" is-link />
        <van-cell title="表情管理" is-link />
      </div>

      <div style="margin-top:1em">
        <van-cell center title="使用听筒播放语音">
          <template #right-icon>
            <van-switch v-model="checked1" size="24" />
          </template>
        </van-cell>
        <van-cell center title="刷新音效">
          <template #right-icon>
            <van-switch v-model="checked2" size="24" />
          </template>
        </van-cell>
        <van-cell center title="回车键发送信息">
          <template #right-icon>
            <van-switch v-model="checked3" size="24" />
          </template>
        </van-cell>
        <van-cell title="NFC" is-link />
      </div>
      <div style="margin-top:1em">
        <van-cell title="存储空间管理" is-link value="清理缓存" />
        <van-cell title="清空聊天记录" is-link />
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
        checked1:false,
        checked2:false,
        checked3:false
    };
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
