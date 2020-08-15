<template>
  <div>
    <van-tabbar
      :fixed="true"
      inactive-color="#A8B0BC"
      route
      :safe-area-inset-bottom="true"
      z-index="999"
    >
      <van-tabbar-item icon="fire" replace to="/home">发现 </van-tabbar-item>
      <van-tabbar-item icon="column" replace to="/study">自选 <van-icon class-prefix="my-icon" name="zixuan" slot="icon"/></van-tabbar-item>
      <van-tabbar-item icon="comment" replace to="/community">社区 <van-icon class-prefix="my-icon" name="shequxuanzhong" slot="icon"/></van-tabbar-item>
      <van-tabbar-item icon="balance-list" replace to="/my">资产<van-icon class-prefix="my-icon" name="zichan" slot="icon"/></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>
