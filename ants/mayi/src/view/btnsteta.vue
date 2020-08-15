<template>
  <div class="">
      <button @click="addFn()">点击加1</button>
      <!-- @click="$store.state.num++" num这是表示值在变化 -->
      <!-- 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。 -->
       <button @click="$store.dispatch('decreaseAsync')">点击减1</button>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {

    }
  },
  components: {

  },
  methods:{
      addFn(){
        //   调用store中的mutations里的increment方法
        // 传参payload  传入额外的参数
          this.$store.commit('increment',10); //参数（10）
      }
  }
}
</script>

<style>
</style>
