import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

import demo1 from "../pages/demo1";

const routes = [{
    name: 'demo1',
    path: '/demo1',
    component: demo1
}]

let router = new VueRouter({
    mode: 'hash',
    base: '/',
    routes
})

export default router
