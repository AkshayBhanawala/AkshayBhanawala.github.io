<template>
	<PathView :name="pathName" :stops="pathStops" :marginTop="pathMarginTop" />
	<div class="content">
		<div class="avatar-wrapper">
			<div class="avatar">
				<div class="avatar-image">
					<div class="top-half">
						<img class="avatar-img" src="/img/WD2 Marcus [Front] [Top].webp" alt="Marcus" />
					</div>
					<div class="bottom-half">
						<img class="avatar-img" src="/img/WD2 Marcus [Front] [Bottom].webp" alt="Marcus" />
					</div>
				</div>
				<div class="pentagons">
					<SVGPentagonSkewed />
					<SVGPentagonSkewed />
					<SVGPentagonSkewed />
				</div>
			</div>
		</div>
		<div class="info-wrapper">
			<div class="name-profession">
				<h2 class="gradient-animated-text c1">
					<strong>{{ state.aboutMe.name }}</strong>
				</h2>
				<h5>
					&nbsp;&nbsp;<span class="font-line">{{ state.aboutMe.positionP1 }}</span
					>&nbsp;<code>{{ state.aboutMe.positionP2 }}</code>
				</h5>
			</div>
			<div class="about" data-visual-tag="about">
				<h3>{{ state.aboutMe.messageMain }}</h3>
				<p class="greetings">{{ state.aboutMe.messageSecondary }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue';
import { computed } from '@vue/reactivity';
import { AboutMeData, PathName } from '@/types';
import { getAboutMeData } from '@/services/data.service';
import SVGPentagonSkewed from '@/assets/SVG.PentagonSkewed.vue';
import PathView from '@/components/Path.component.vue';

const state = reactive({
	aboutMe: {} as AboutMeData,
});

const pathName = computed((): PathName => {
	return { value: '<scroll>' };
});

const pathStops = computed((): string[] => {
	return ['0'];
});

const pathMarginTop = computed((): string => {
	return 'calc(45vh + calc(130px * var(--size-scale)))';
});

onBeforeMount(() => {
	getAboutMeData()
		.then((response) => {
			state.aboutMe = response.data;
		})
		.catch(console.error);
});
</script>

<style lang="scss" scoped>
.content {
	.info-wrapper {
		z-index: 1;
		padding-top: calc(0px * var(--size-scale));

		.name-profession {
			display: inline-block;
			text-align: left;
		}

		.about {
			padding-top: calc(20px * var(--size-scale));
			padding-left: var(--indent-follow-path);
			padding-right: calc(10px * var(--size-scale));
			text-align: left;

			.greetings {
				font-size: calc(15px * var(--size-scale));
				margin-block-start: calc(10px * var(--size-scale));
				margin-block-end: 0;
			}
		}
	}

	.avatar-wrapper {
		--avatar-size: calc(45vh);
		justify-content: center;
		display: flex;
		position: relative;
		width: 100%;
		height: calc(var(--avatar-size) + calc(50px * var(--size-scale)));

		.avatar {
			position: relative;
			display: flex;
			justify-content: center;
			width: 100%;
			width: var(--avatar-size);
			height: var(--avatar-size);

			&::before {
				z-index: 0;
				position: absolute;
				content: '';
				top: -50%;
				left: -50%;
				height: 200%;
				width: 200%;
				transform-origin: center center;
				background: radial-gradient(circle, rgba(var(--text-color), 0.3), #00000000 50%);
				background-position: center;
				background-size: contain;
			}

			.avatar-image {
				position: absolute;
				display: flex;
				justify-content: center;
				width: 100%;
				height: 100%;

				> * {
					flex-grow: 1;
				}

				.top-half,
				.bottom-half {
					position: absolute;
					display: flex;
					justify-content: center;
					top: 0;
					overflow: hidden;
					width: 100%;
					height: 100%;

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}

				.top-half {
					z-index: 2;
				}

				.bottom-half {
					z-index: 0;
				}
			}

			.pentagons {
				z-index: 1;
				position: absolute;
				display: flex;
				justify-content: center;
				align-items: flex-end;
				top: calc(0px * var(--size-scale));
				width: 100%;
				height: 100%;

				svg {
					width: 135%;
					position: absolute;
					overflow: visible;
					transform: translateY(calc(5px * var(--size-scale))) scale(1);

					:deep(path) {
						stroke-width: 15;
						// filter: drop-shadow(calc(0px * var(--size-scale)) calc(13px * var(--size-scale)) calc(4px * var(--size-scale)) rgba(0, 0, 0, 0.4));
					}
				}

				svg:nth-child(2) {
					opacity: 1;
					animation-name: pentagon-fade-down;
					animation-duration: 4s;
					animation-delay: 0ms;
					animation-timing-function: linear;
					animation-iteration-count: infinite;
					animation-direction: normal;

					:deep(path) {
						animation-name: pentagon-fade-down-stroke;
						animation-duration: 4s;
						animation-delay: 0ms;
						animation-timing-function: linear;
						animation-iteration-count: infinite;
						animation-direction: normal;
					}
				}

				svg:nth-child(1) {
					opacity: 1;
					animation-name: pentagon-fade-down;
					animation-duration: 4s;
					animation-delay: 2s;
					animation-timing-function: linear;
					animation-iteration-count: infinite;
					animation-direction: normal;

					:deep(path) {
						animation-name: pentagon-fade-down-stroke;
						animation-duration: 4s;
						animation-delay: 2s;
						animation-timing-function: linear;
						animation-iteration-count: infinite;
						animation-direction: normal;
					}
				}

				@keyframes pentagon-fade-down {
					to {
						opacity: 0;
						// width: 142%;
						transform: translateY(calc(50px * var(--size-scale))) scale(1.019);
					}
				}

				@keyframes pentagon-fade-down-stroke {
					to {
						stroke-width: 1;
					}
				}
			}
		}
	}
}
</style>
