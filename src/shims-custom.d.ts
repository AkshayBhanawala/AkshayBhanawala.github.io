/* eslint-disable */
import { Store } from 'vuex';
import { Theme } from './types';
import { VueCookies } from 'vue-cookies';

declare module '@vue/runtime-core' {
	// Declare your own store states.
	interface State {
		currentTheme: Theme,
		isMainLoaded: boolean,
	}
	interface ComponentCustomProperties {
		$store: Store<State>;
		$cookies: VueCookies;
	}
}
