<template>
	<PathView :stops="pathStops" />
	<div class="section-title">SKILLS</div>
	<div class="content">
		<div
			class="skill-section tagify"
			:data-tagify-name="tagifiedName(skillSection.name)"
			v-for="skillSection in state.skillsData"
			:key="skillSection.name"
		>
			<div class="skills">
				<div class="skill" v-for="skill in skillSection.skills" :key="skill.name">
					<span
						class="percentage"
						:style="`width: ${skill.percentage}%;`"
						data-aos="skill-percentage"
					></span>
					<span class="label">{{ skill.name }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue';
import { computed } from '@vue/reactivity';
import { SkillsData } from '@/types';
import { getTagifiedName } from '@/services/util.service';
import { getSkillsData } from '@/services/data.service';
import PathView from '@/components/Path.component.vue';

const state = reactive({
	skillsData: [] as SkillsData[],
});

const pathStops = computed((): string[] => {
	return ['calc(25px * var(--size-scale))'];
});

function tagifiedName(sectionName: string): string {
	return getTagifiedName(sectionName);
}

onBeforeMount(() => {
	getSkillsData()
		.then((response) => {
			state.skillsData = response.data;
		})
		.catch(console.error);
});
</script>

<style lang="scss" scoped>
@function getSkillBorderWidth($width: 1px, $negative: false) {
	@if $negative {
		@return calc(0px - $width * var(--size-scale));
	}
	@return calc($width * var(--size-scale));
}

$skill-height: calc(30px * var(--size-scale));
$skill-border-width: 1px;

.content {
	display: flex;
	flex-direction: row;
	column-gap: calc(10px * var(--size-scale));
	row-gap: calc(10px * var(--size-scale));
	margin-top: calc(50px * var(--size-scale));

	.skill-section {
		width: 100%;
		padding-left: var(--indent-follow-path);
		padding-right: calc(50px * var(--size-scale));

		.skills {
			z-index: 1;
			position: relative;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			column-gap: calc(10px * var(--size-scale));
			row-gap: calc(10px * var(--size-scale));
			width: 100%;

			.skill {
				flex-grow: 1;
				flex-shrink: 1;
				position: relative;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				text-align: center;
				height: calc(30px * var(--size-scale));
				min-width: 190px;
				max-width: 250px;
				width: 100%;
				border-radius: calc($skill-height / 2);
				border: solid getSkillBorderWidth($skill-border-width) transparent;
				background: rgba(var(--bg-color));
				background-clip: padding-box;
				cursor: pointer;

				&:before {
					z-index: -1;
					content: '';
					position: absolute;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					margin: getSkillBorderWidth($skill-border-width, true);
					border-radius: inherit;
					background: linear-gradient(90deg, var(--rainbow-gradient-2));
					opacity: 0.4;
				}

				.percentage {
					border-radius: inherit;
					height: calc(getSkillBorderWidth($skill-border-width) * 2 + 100%);
					margin: getSkillBorderWidth($skill-border-width, true);
					mask: linear-gradient(#fff 0 0);

					&:before {
						content: '';
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						margin: inherit;
						border-radius: inherit;
						background: linear-gradient(90deg, var(--rainbow-gradient-2));
						opacity: 0.7;
					}
				}

				.label {
					z-index: 1;
					position: absolute;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: calc(14px * var(--size-scale));
					width: 100%;
					height: 100%;
					text-shadow: calc(1px * var(--size-scale)) calc(1px * var(--size-scale))
						calc(1px * var(--size-scale)) rgba(0, 0, 0, 0.4);
					user-select: none;
					// mix-blend-mode: difference;
				}

				&:hover,
				&:active {
					&:before {
						opacity: 0.7;
					}

					.percentage:before {
						opacity: 1;
					}
				}
			}
		}
	}
}

[data-aos='skill-percentage'] {
	width: 0%;
	opacity: 0;

	&.aos-animate {
		animation: skill-percentage 0.7s both;
	}

	@keyframes skill-percentage {
		from {
			opacity: 1;
			width: 0%;
		}

		to {
			opacity: 1;
		}
	}
}
</style>
