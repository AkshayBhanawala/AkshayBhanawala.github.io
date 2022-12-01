<template>
	<ThemeSheet :disabled="isThemeDark" href="/styles/themes/light.theme.css" />
	<MainSiteLoader v-if="showMainLoaded" :class="state.mSLRemoveClass" />
	<section class="main-content">
		<AppHeader :class="state.mSLRemoveClass" />
		<router-view />
	</section>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, reactive } from 'vue';
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
import { useCookies } from 'vue3-cookies';
import { Theme } from '@/types';
import AOS from 'aos';
import config from '@/config';
import ThemeSheet from '@/components/ThemeSheet.component.vue';
import MainSiteLoader from '@/components/MainSiteLoader.component.vue';
import AppHeader from '@/components/AppHeader.component.vue';

const store = useStore();

const { cookies } = useCookies();

const state = reactive({
	isVPRatioEventSet: false,
	vpRatio: 0,
	mSLRemoveClass: '',
});

// const screenInfoSting = computed(() => {
// 	return `${window.screen.availWidth} x ${window.screen.availHeight} | ${window.screen.pixelDepth}`;
// });

const isThemeDark = computed(() => {
	return store.state.currentTheme === Theme.DARK;
});

const showMainLoaded = computed(() => {
	return !store.state.isMainLoaded;
});

// function setVPRatio(htmlTag: HTMLHtmlElement | null): void {
// 	const vmin = Math.min(window.screen.availWidth, window.screen.availHeight);
// 	const vmax = Math.max(window.screen.availWidth, window.screen.availHeight);
// 	state.vpRatio = vmin / vmax;
// 	if (state.vpRatio > 0.5 && vmax < 1000) {
// 		state.vpRatio /= state.vpRatio - 0.5 + 1.3;
// 	} else if (state.vpRatio > 0.5 && vmax >= 1000) {
// 		state.vpRatio /= 1000 / vmax + 0.6;
// 	}
// 	htmlTag?.style.setProperty('--vp-ratio', state.vpRatio.toString());
// }

function getSavedTheme(): Theme | false {
	if (cookies.isKey(config.themeKey)) {
		let cValue = cookies.get(config.themeKey);
		cValue = cValue ? String(cValue).trim() : '';
		if (cValue) {
			if (Theme.DARK === String(cValue)) {
				return Theme.DARK;
			} else if (Theme.LIGHT === String(cValue)) {
				return Theme.LIGHT;
			}
		}
	}
	return false;
}

onBeforeMount(() => {
	AOS.init({
		offset: 50, // offset (in px) from the original trigger point
		delay: 200, // values from 0 to 3000, with step 50ms
		duration: 800, // values from 0 to 3000, with step 50ms
		easing: 'ease-out', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
	});
});

onMounted(() => {
	const htmlTag = document.getElementsByTagName('html')?.item(0);
	// setVPRatio(htmlTag);
	// if (!state.isVPRatioEventSet) {
	// 	window.addEventListener('resize', () => {
	// 		setVPRatio(htmlTag);
	// 	});
	// 	state.isVPRatioEventSet = true;
	// }

	if (htmlTag) {
		htmlTag.classList.add('overflow-hidden');
	}
	const theme = getSavedTheme();
	if (theme) {
		store.commit('changeTheme', { theme, $cookies: cookies });
	}
	setTimeout(() => {
		// Assign main loader remove class to loader icon
		state.mSLRemoveClass = config.mainSiteLoaderRemoveClass;
		setTimeout(() => {
			store.commit('setMainLoaded');

			// Set Transition function and time globally after loading
			if (htmlTag) {
				htmlTag.classList.remove('overflow-hidden');
				htmlTag.classList.add('global-transition');
			}
		}, 700);
	}, 6000);
});
</script>

<style lang="scss">
@import '/src/assets/styles/Global.styles.scss';

html,
body {
	background-color: rgba(var(--bg-color));
	color: rgba(var(--text-color));
	min-width: 320px;
}

#app {
	text-align: center;
}

.main-content {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.main-content.block {
	display: block;
}
</style>
