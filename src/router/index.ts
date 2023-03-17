import {
	createRouter,
	createWebHistory,
	type RouteRecordRaw,
} from "vue-router";
import Layout from "@/layouts/index.vue";

const routes: RouteRecordRaw[] = [

];

const router = createRouter({
	// 采用 hash 模式 URL不显示路径
	// history: createWebHashHistory(),
	// 采用 history 模式 域名后面不带 # 号
	history: createWebHistory(),
	routes,
});

export default router;
