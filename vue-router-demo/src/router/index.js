import Vue from 'vue'
import VueRouter from "vue-router";
import FindMusic from '@/views/FindMusic'
import MyMusic from '@/views/MyMusic'
import FriendMusic from '@/views/FriendMusic'
import Search from '@/views/Search'
import Detail from '@/views/Detail'
import Dynamic from '@/views/Dynamic'

// 安装注册
Vue.use(VueRouter)
// 创建路由对象
const router = new VueRouter({
    routes: [
        { path: '/find', component: FindMusic },
        { path: '/my', component: MyMusic },
        { path: '/friend', component: FriendMusic },
        { path: '/search', component: Search },
        { path: '/detail', component: Detail},
        { path: '/dynamic/:name', component: Dynamic},
    ]
})

export default router