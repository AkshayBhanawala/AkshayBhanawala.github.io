import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import store from './store';
import Vue3Cookies from 'vue3-cookies';
import router from './router';

// import { SharedElementRouteGuard, SharedElementDirective } from 'v-shared-element';
// router.beforeEach(SharedElementRouteGuard);
createApp(App)
	// .use(SharedElementDirective)
	.use(store)
	.use(Vue3Cookies)
	.use(router)
	.mount('#app');
