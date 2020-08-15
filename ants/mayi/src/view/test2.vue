<template>
  <div class>
    <h2>test2页面num:{{num}}</h2>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {};
  },
  computed: {
    num() {
      return this.$store.state.num; //第二种方式
    },
  },
  components: {},
};
</script>

<style>
</style>
