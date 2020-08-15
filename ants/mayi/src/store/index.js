/***
 * 在state下的index文件，就是用来做状态管理   --仓库--
 * @create_time:20-8-3 21:11:45
 * @last_modify:wjiban
 * @modify_time:20-8-5 18:28:37
 * @line_count:56
 **/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {//数据源 保存所有数据，
        num: 1,
        // pathName: "",
        username:localStorage.username,
        user: "",
        // regName: '' || localStorage.regName,
        // regPwd: '' || localStorage.regPwd,
    },
    getters: {},//
    mutations: {//保存所有方法，用来改变state的数据 如同methods ，但是它不能使用异步方法
        increment(state, payload) {//++
            state.num += payload ? payload : 1;
        },
        decrease(state) {//累计减减
            state.num--;
        },
        getUserInfo(state, user) {
            state.username = user.name
            localStorage.setItem('username', state.username)

        },
        // 登录 注销

        // login(){
        //     this.$store.disabled('home').then(()=>{
        //         this.$router.replace('/home')
        //     });
        // },

        // logout(){
        //     this.$router.replace('/home');
        // }

    },
    actions: {//行为。用于处理异步，实际修改状态的值，依然是mutations
        decreaseAsync(context) {
            context.commit("decrease");
        },


    },
    modules: {//模板

    }
})
// const store =   new Vue.Store({
// })
// export default store;