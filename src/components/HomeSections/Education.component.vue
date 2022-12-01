<template>
	<PathView :stops="pathStops" />
	<div class="section-title">EDUCATION</div>
	<div class="content">
		<div
			class="education-section tagify"
			:data-tagify-name="tagifiedName(education.stage)"
			v-for="education in state.educationData"
			:key="education.stage"
		>
			<div class="education-wrapper">
				<div class="education">
					<div class="institute">
						<div class="details">
							<div class="name">
								<a :href="education.institute.website" target="_blank">
									{{ education.institute.name }}
								</a>
							</div>
							<div class="hq detail">
								<span class="label">📍:</span>
								<span class="value">{{ education.institute.location }}</span>
							</div>
						</div>
						<div class="logo">
							<a :href="education.institute.website" target="_blank">
								<img
									:src="`/img/logos/${education.institute.logo}`"
									:alt="`${education.institute.name} Logo`"
								/>
							</a>
						</div>
					</div>
					<div class="info">
						<div class="detail">
							<span class="label">⌚:</span>
							<span class="value">{{ education.type }}</span>
						</div>
						<div class="detail">
							<span class="label">Course:</span>
							<span class="value">{{ education.course }}</span>
						</div>
						<div class="detail">
							<span class="value">{{ formatDate(education.timeline.from) }}</span>
							<ArrowLongRight class="icon label" />
							<span class="value">
								{{ formatDate(education.timeline.to) ?? 'Present' }}
							</span>
						</div>
						<div class="detail">
							<span class="value">Passed with</span>
							<span class="label">{{ education.result }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue';
import { computed } from '@vue/reactivity';
import { EducationData } from '@/types';
import { getTagifiedName, getMonthFormat } from '@/services/util.service';
import { getEducationData } from '@/services/data.service';
import PathView from '@/components/Path.component.vue';
import ArrowLongRight from '../../assets/ArrowLongRight.vue';

const state = reactive({
	educationData: [] as EducationData[],
});

const pathStops = computed((): string[] => {
	return ['25px'];
});

function tagifiedName(sectionName: string): string {
	return getTagifiedName(sectionName);
}

function formatDate(date: string | undefined): string | undefined {
	if (date) {
		try {
			const dateObj = new Date(date);
			return `${getMonthFormat(dateObj.getMonth())} ${dateObj.getFullYear()}`;
		} catch (error) {
			console.error('Error while parsing date:', error);
		}
	}
	return date;
}
onBeforeMount(() => {
	getEducationData()
		.then((response) => {
			state.educationData = response.data;
		})
		.catch(console.error);
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/Exp-Edu.styles.scss';
</style>
