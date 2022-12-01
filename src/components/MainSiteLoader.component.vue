<template>
	<section class="main-site-loader" :class="{ 'remove-to-header': state.removeToHeader }">
		<div class="logo">
			<SVGCircle class="circle-outline" />
			<SVGLogo ref="logoRef" class="logo-icon" :style="transformVars" />
		</div>
	</section>
</template>

<script setup lang="ts">
import { ComponentPublicInstance, onMounted, reactive, ref } from 'vue';
import { computed } from '@vue/reactivity';
import SVGCircle from '@/assets/SVG.Circle.vue';
import SVGLogo from '@/assets/SVG.Logo.vue';

class LogoTransformProps {
	constructor(X: number, Y: number, scaleX: number, scaleY: number) {
		this.X = X;
		this.Y = Y;
		this.scaleX = scaleX;
		this.scaleY = scaleY;
	}
	X: number;
	Y: number;
	scaleX: number;
	scaleY: number;
}

const state = reactive({
	removeToHeader: false,
	logoRemoveData: new LogoTransformProps(0, 0, 1, 1),
});

const logoRef = ref<ComponentPublicInstance<typeof SVGLogo>>();

const transformVars = computed((): string => {
	return `--data-remove-x: ${state.logoRemoveData.X}px; --data-remove-y: ${state.logoRemoveData.Y}px; --data-remove-scale-x: ${state.logoRemoveData.scaleX}; --data-remove-scale-y: ${state.logoRemoveData.scaleY};`;
});

function updateRemoveData(headerLogoWrapper: Element) {
	const headerRect = headerLogoWrapper.getBoundingClientRect();
	const rect = logoRef?.value?.$el?.getBoundingClientRect();
	// console.log('headerRect:', headerRect);
	// console.log('rect:', rect);
	const X = headerRect.left - rect.left + window.scrollY;
	const Y = headerRect.top - rect.top + window.scrollX;
	const scaleX = headerRect.width / rect.width;
	const scaleY = headerRect.height / rect.height;
	const transformRect = new LogoTransformProps(X, Y, scaleX, scaleY);
	state.removeToHeader = true;
	// console.log('transformRect:', transformRect);
	state.logoRemoveData = transformRect;
}

onMounted(() => {
	const headerLogoWrapper = document
		.getElementById('header')
		?.getElementsByClassName('logo-wrapper')
		?.item(0);
	if (headerLogoWrapper && logoRef) {
		setTimeout(() => {
			updateRemoveData(headerLogoWrapper);
			headerLogoWrapper.addEventListener('resize', () => {
				updateRemoveData(headerLogoWrapper);
			});
		}, 5000);
	}
});
</script>

<style lang="scss" scoped>
.main-site-loader {
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99999999;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(var(--bg-color));
	backdrop-filter: blur(50px);

	.logo {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50vmin;
		width: 50vmin;
		min-width: 200px;
		min-height: 200px;
		max-width: 500px;
		max-height: 500px;

		.circle-outline {
			position: absolute;
			width: 100%;
			stroke-dasharray: 4000;
			stroke-dashoffset: 4000;

			:deep(path) {
				animation-name: main-logo-circle-outline-load-animation;
				animation-duration: 6s;
				animation-timing-function: ease-out;
				animation-fill-mode: both;
				animation-iteration-count: 1;
				animation-direction: normal;
			}
		}

		.logo-icon {
			height: 60%;
			width: 60%;
			position: absolute;

			:deep(path.main-ab) {
				stroke-dasharray: 4000;
				stroke-dashoffset: 4000;
				animation-name: main-logo-ab-load-animation;
				animation-delay: 1s;
				animation-duration: 3s;
				animation-timing-function: ease-out;
				animation-fill-mode: both;
				animation-iteration-count: 1;
				animation-direction: normal;
			}

			:deep(path.a-bg) {
				opacity: 0;
				animation-name: fade-in;
				animation-delay: 4s;
				animation-duration: 0.7s;
				animation-timing-function: ease-out;
				animation-fill-mode: both;
				animation-iteration-count: 1;
				animation-direction: normal;
			}

			:deep(g.shadows) {
				opacity: 0;
				animation-name: fade-in-shadows;
				animation-delay: 4s;
				animation-duration: 0.7s;
				animation-timing-function: ease-out;
				animation-fill-mode: both;
				animation-iteration-count: 1;
				animation-direction: normal;
			}

			@keyframes main-logo-circle-outline-load-animation {
				0% {
					stroke-width: 5;
					stroke-dasharray: 215;
					stroke-dashoffset: 3010;
				}

				73% {
					stroke-width: 10;
					stroke-dasharray: 215;
					stroke-dashoffset: 0;
				}

				100% {
					stroke-dasharray: 0;
					stroke-width: 0;
				}
			}

			@keyframes main-logo-ab-load-animation {
				to {
					/* stroke-dasharray: 0; */
					stroke-dashoffset: 0;
				}
			}

			@keyframes fade-in-shadows {
				to {
					opacity: 0.3;
				}
			}
		}
	}

	&.remove {
		transition: 0.7s ease-out;
		backdrop-filter: blur(0px);
		background-color: rgba(var(--bg-color), 0);

		&:not(.remove-to-header) .logo {
			transition: inherit;
			transform-origin: center;
			transform: scale(0);
			opacity: 0;
		}

		&.remove-to-header {
			.logo-icon {
				$translateX: translateX(var(--data-remove-x));
				$translateY: translateY(var(--data-remove-y));
				$scaleX: scaleX(var(--data-remove-scale-x));
				$scaleY: scaleY(var(--data-remove-scale-y));

				transition: 0.5s ease-out;
				opacity: 1;
				position: absolute;
				min-width: unset;
				min-height: unset;
				transform-origin: top left;
				transform: $translateX $translateY $scaleX $scaleY;
			}

			& ~ :deep(.main-content #header .logo-wrapper) {
				opacity: 0;
				animation-name: fade-in;
				animation-delay: 450ms;
				animation-duration: 0.2s;
				animation-timing-function: ease-out;
				animation-fill-mode: both;
				animation-iteration-count: 1;
				animation-direction: normal;
			}
		}
	}

	@keyframes fade-in {
		to {
			opacity: 1;
		}
	}
}
</style>
