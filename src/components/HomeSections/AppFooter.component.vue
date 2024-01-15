<template>
	<div class="content">
		<div class="detail col">
			<span class="label">Disclaimer and Credits:</span>
			<br />
			<span class="value">
				The images and logos used in this website are not owned by me,
				<br />except the [AB] logo.
				<br />Thank you to the respective owners of the used images.
			</span>
		</div>
		<div class="detail">
			<span class="value">Website designed by</span>
			<span class="label">TH3-AZ</span>
		</div>
		<div class="detail col">
			<span class="detail">
				<span class="value copyright-symbol">&copy;</span>
				<span class="label"> {{ currentUTCYear }}</span>
				<span class="value">by</span>
			</span>
			<span class="label">{{ myName }}</span>
			<span class="value">All Rights Reserved</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';

const currentUTCYear = computed((): number => {
	return new Date().getUTCFullYear();
});

const myName = computed((): string => {
	return `Akshay 'TH3-AZ' Bhanawala`;
});
</script>

<style lang="scss" scoped>
.content {
	margin: calc(30px * var(--size-scale)) calc(0px * var(--size-scale)) !important;
	row-gap: calc(20px * var(--size-scale));
}

.detail {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	column-gap: calc(10px * var(--size-scale));

	.label {
		font-weight: 600;
		opacity: 0.6;
	}

	.value {
		opacity: 0.4;
		font-weight: 100;
	}

	&.col {
		flex-direction: column;
	}

	.copyright-symbol {
		font-size: calc(32px * var(--size-scale));
		line-height: 0.65;
	}
}
</style>
