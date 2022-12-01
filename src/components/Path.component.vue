<template>
	<div class="page-path-wrapper width-breakpoint">
		<div class="page-path" :style="pathStyle">
			<span class="path-name" :style="pathNameStyle">{{ pathName }}</span>
			<template v-for="(stop, index) in stops" :key="index">
				<SVGCircle class="dash-circle" :data-top="stop" :style="getPathStopStyle(index)" />
				<div class="dot" :style="getPathStopStyle(index)"></div>
			</template>
		</div>
	</div>
</template>

<script setup lang="ts">
import { PropType, StyleValue } from 'vue';
import { computed } from '@vue/reactivity';
import { PathName } from '@/types';
import SVGCircle from '@/assets/SVG.Circle.vue';

const props = defineProps({
	name: {
		type: Object as PropType<PathName>,
		required: false,
	},
	stops: {
		type: Object as PropType<string[]>,
		required: false,
	},
	marginTop: {
		type: String,
		required: false,
	},
	marginBottom: {
		type: String,
		required: false,
	},
});

const pathName = computed((): string => {
	return props.name?.value ?? '';
});
const pathNameTop = computed((): string | number => {
	return props.name?.top ?? '';
});
const pathNameBottom = computed((): string | number => {
	return props.name?.bottom ?? '';
});
const pathMarginTop = computed((): string | number => {
	return props.marginTop ?? '';
});
const pathMarginBottom = computed((): string | number => {
	return props.marginBottom ?? '';
});
const pathStyle = computed((): StyleValue => {
	return {
		marginTop: pathMarginTop.value,
		height: `calc(100% - ${pathMarginBottom.value}`,
	};
});
const pathNameStyle = computed((): StyleValue => {
	return {
		top: pathNameTop.value,
		bottom: pathNameBottom.value,
	};
});

function getPathStopStyle(stopIndex: number): StyleValue {
	if (props.stops) {
		return { top: props.stops[stopIndex] };
	}
	return '';
}
</script>

<style lang="scss" scoped>
.page-path-wrapper {
	z-index: 0;
	position: absolute;
	display: block;
	width: 100%;
	height: 100%;
	overflow: hidden;

	.page-path {
		position: absolute;
		display: block;
		color: rgba(var(--text-color));
		left: var(--indent-path);
		width: calc(1px * var(--size-scale));
		height: 100%;
		background-color: rgba(var(--text-color), 0.7);

		.path-name {
			position: absolute;
			display: block;
			left: 0;
			opacity: 0.5;
			white-space: nowrap;
			font-size: calc(12px * var(--size-scale));
			rotate: 90deg;
			translate: calc(-20px * var(--size-scale)) calc(25px * var(--size-scale));
			transform-origin: bottom;
			user-select: none;
		}

		.dash-circle {
			position: absolute;
			top: attr(data-top);
			left: 0;
			width: calc(25px * var(--size-scale));
			height: calc(25px * var(--size-scale));
			transform-origin: center;
			transform: translate(-50%, -50%);

			:deep(path) {
				stroke-dasharray: 25%;
				stroke-dashoffset: 360;
				animation-name: stroke-dashoffset-0;
				animation-duration: 2s;
				animation-timing-function: linear;
				animation-fill-mode: both;
				animation-iteration-count: infinite;
				animation-direction: normal;
			}
		}

		.dot {
			position: absolute;
			top: attr(data-top);
			left: 0;
			width: calc(15px * var(--size-scale));
			height: calc(15px * var(--size-scale));
			background-color: rgba(var(--text-color));
			border-radius: 50%;
			transform-origin: center;
			transform: translate(-50%, -50%);
		}
	}
}
</style>
