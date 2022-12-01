<template>
	<header id="header" class="header width-breakpoint">
		<router-link to="/" class="router-link brand">
			<div class="logo-wrapper">
				<SVGLogo class="logo-icon" />
			</div>
			<div class="name gradient-animated-text c1" :class="{ hide: state.hideSiteName }">
				<span>{{ siteName }}</span>
			</div>
		</router-link>
		<div class="theme-toggle-btn">
			<button @click="toggleTheme" :title="toggleThemeBtnTitle">
				<SVGLightBulbOff v-if="!isThemeDark" />
				<SVGLightBulbOn v-if="isThemeDark" />
			</button>
		</div>
	</header>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
import { useCookies } from 'vue3-cookies';
import { Theme } from '@/types';
import config from '@/config';
import SVGLogo from '@/assets/SVG.Logo.vue';
import SVGLightBulbOff from '@/assets/SVG.LightBulb.Off.vue';
import SVGLightBulbOn from '@/assets/SVG.LightBulb.On.vue';

const store = useStore();

const { cookies } = useCookies();

const state = reactive({
	onScrollEventAdded: false,
	hideSiteName: true,
});

const siteName = computed((): string => {
	return config.siteName;
});
const isThemeDark = computed((): boolean => {
	return store.state.currentTheme === Theme.DARK;
});

const toggleThemeBtnTitle = computed((): string => {
	return isThemeDark ? 'Turn on the Lights' : 'Turn off the Lights';
});

function toggleTheme() {
	store.dispatch('toggleTheme', cookies).then((theme) => {
		cookies.set(config.themeKey, theme, 60 * 60 * 12);
	});
}

onMounted(() => {
	if (!state.onScrollEventAdded) {
		window.addEventListener('scroll', () => {
			if (window.scrollY > window.screen.availHeight / 1.5) {
				state.hideSiteName = false;
			} else {
				state.hideSiteName = true;
			}
		});
		state.onScrollEventAdded = true;
	}
});
</script>

<style lang="scss" scoped>
.header {
	z-index: 999;
	position: fixed;
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 80%;
	height: calc(60px * var(--size-scale));
	border-radius: calc(10px * var(--size-scale));
	top: calc(20px * var(--size-scale));
	padding: calc(10px * var(--size-scale)) calc(8px * var(--size-scale));
	overflow: hidden;
	background-color: rgba(var(--text-color), 0.03);
	border: calc(1px * var(--size-scale)) solid rgba(var(--alt-gray), 0.5);
	box-shadow: calc(0px * var(--size-scale)) calc(10px * var(--size-scale))
		calc(10px * var(--size-scale)) calc(-6px * var(--size-scale)) rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(calc(30px * var(--size-scale)));

	.brand {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: rgba(var(--text-color));
		column-gap: calc(10px * var(--size-scale));

		.logo-wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			height: calc(30px * var(--size-scale));
			width: calc(30px * var(--size-scale));
			overflow: hidden;
			filter: drop-shadow(
				calc(0px * var(--size-scale)) calc(1px * var(--size-scale)) calc(1px * var(--size-scale))
					rgba(0, 0, 0, 0.5)
			);
		}

		.name {
			display: flex;
			height: 100%;
			align-items: center;
			font-weight: 900;
			text-align: left;
			max-width: 100%;
			overflow: hidden;

			> span {
				margin-left: 0;
				transition: 2s cubic-bezier(0.3, 1, 0.3, 1);
			}

			&.hide {
				> span {
					margin-left: -100%;
				}
			}
		}
	}

	nav {
		padding: calc(30px * var(--size-scale));

		a {
			font-weight: bold;

			&.router-link-exact-active {
				color: rgba(var(--text-color));
			}
		}
	}

	.theme-toggle-btn {
		button,
		button:hover {
			display: block;
			background: transparent;
			cursor: pointer;
			height: calc(25px * var(--size-scale));
			width: calc(25px * var(--size-scale));
			border: 0;
			padding: 0;
			border-radius: 50%;
		}
	}
}
</style>
