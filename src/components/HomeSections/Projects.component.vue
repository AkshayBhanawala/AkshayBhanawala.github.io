<template>
	<PathView :stops="pathStops" />
	<div class="section-title">PROJECTS</div>
	<div class="content">
		<h1 data-aos="fade-left">H1 Text</h1>
		<h2 data-aos="fade-right">H2 Text</h2>
		<h3 data-aos="fade-left">H3 Text</h3>
		<h4 data-aos="fade-right">H4 Text</h4>
		<h5 data-aos="fade-left">H5 Text</h5>
		<h6 data-aos="fade-right">H6 Text</h6>
		<p data-aos="fade-left">Paragraph</p>
	</div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import PathView from '@/components/Path.component.vue';

const pathStops = computed((): string[] => {
	return ['calc(25px * var(--size-scale))'];
});
</script>

<style lang="scss" scoped>
.content {
}
</style>
