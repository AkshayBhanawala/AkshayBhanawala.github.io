import { createStore } from 'vuex';
import { VueCookies } from 'vue3-cookies/dist/interfaces';
import { Theme } from '@/types';
import { saveTheme } from '@/services/util.service';

export default createStore({
	state: {
		currentTheme: Theme.DARK,
		isMainLoaded: false,
	},
	getters: {},
	mutations: {
		changeTheme(state, payload: { theme: Theme; $cookies?: VueCookies }) {
			state.currentTheme = payload.theme;
			if (payload.$cookies) {
				saveTheme(payload.$cookies, payload.theme);
			}
		},
		setMainLoaded(state) {
			state.isMainLoaded = true;
		},
	},
	actions: {
		toggleTheme(context, cookies?: VueCookies): Theme {
			if (context.state.currentTheme === Theme.DARK) {
				context.commit('changeTheme', { theme: Theme.LIGHT, cookies });
				return Theme.LIGHT;
			} else {
				context.commit('changeTheme', { theme: Theme.DARK, cookies });
				return Theme.DARK;
			}
		},
	},
	modules: {},
});
