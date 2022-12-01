import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/Home.view.vue';

const routes: Array<RouteRecordRaw> = [
	/** @type {RouteRecordRaw} */
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'AnyOther',
		component: HomeView,
	},
	// {
	// 	path: '/about',
	// 	name: 'about',
	// 	component: () => import('@/views/About.view.vue'),
	// },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
