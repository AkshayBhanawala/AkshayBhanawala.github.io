<template>
	<PathView :stops="pathStops" />
	<div class="section-title">EXPERIENCE</div>
	<div class="content">
		<div
			class="experience-section tagify"
			:data-tagify-name="tagifiedName(experience.position)"
			v-for="experience in state.experienceData"
			:key="experience.position"
		>
			<div class="experience-wrapper">
				<div class="experience">
					<div class="company">
						<div class="details">
							<div class="name">
								<a :href="experience.company.website" target="_blank">
									{{ experience.company.name }}
								</a>
							</div>
							<div class="hq detail">
								<span class="label">HQ:</span>
								<span class="value">{{ experience.company.hq }}</span>
							</div>
						</div>
						<div class="logo">
							<a :href="experience.company.website" target="_blank">
								<img
									:src="`/img/logos/${experience.company.logo}`"
									:alt="`${experience.company.name} Logo`"
								/>
							</a>
						</div>
					</div>
					<div class="info">
						<div class="detail">
							<span class="value">{{ formatDate(experience.timeline.from) }}</span>
							<ArrowLongRight class="icon label" />
							<span class="value">
								{{ formatDate(experience.timeline.to) ?? 'Present' }}
							</span>
						</div>
						<div class="detail">
							<span class="label">📍:</span>
							<span class="value">{{ experience.location }}</span>
						</div>
						<div class="detail">
							<span class="label">⌚:</span>
							<span class="value">{{ experience.type }}</span>
						</div>
						<div class="detail">
							<ul class="highlights">
								<li
									class="highlight value"
									v-for="(highlight, index) in experience.highlights"
									:key="index"
									v-html="highlight"
								/>
							</ul>
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
import { ExperienceData } from '@/types';
import { getTagifiedName, getMonthFormat } from '@/services/util.service';
import { getExperienceData } from '@/services/data.service';
import PathView from '@/components/Path.component.vue';
import ArrowLongRight from '../../assets/ArrowLongRight.vue';

const state = reactive({
	experienceData: [] as ExperienceData[],
});

const pathStops = computed((): string[] => {
	return ['calc(25px * var(--size-scale))'];
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
	getExperienceData()
		.then((response) => {
			state.experienceData = response.data;
		})
		.catch(console.error);
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/Exp-Edu.styles.scss';
</style>
