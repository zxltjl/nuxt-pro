
import Vuex from 'vuex';
import mutations from './mutations';
import state from './state';
new Vuex.Store({
    // 存放公用数据
    state,
    // 同步放数据
    mutations
})