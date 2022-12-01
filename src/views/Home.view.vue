<template>
	<section class="pages width-breakpoint">
		<section id="Me" class="page page-1" v-if="state.showSection.intro">
			<div class="content-wrapper">
				<MySelf />
			</div>
		</section>

		<section id="Skills" class="page page-2" v-if="state.showSection.skills">
			<div class="content-wrapper">
				<Skills />
			</div>
		</section>

		<section id="Experience" class="page page-3" v-if="state.showSection.experience">
			<div class="content-wrapper">
				<Experience />
			</div>
		</section>

		<section id="Education" class="page page-4" v-if="state.showSection.education">
			<div class="content-wrapper">
				<Education />
			</div>
		</section>

		<section id="Projects" class="page page-5" v-if="state.showSection.projects">
			<div class="content-wrapper">
				<Projects />
			</div>
		</section>

		<section id="ContactMe" class="page page-6" v-if="state.showSection.contactMe">
			<div class="content-wrapper">
				<ContactMe />
			</div>
		</section>

		<section id="Footer" class="page page-5" v-if="state.showSection.footer">
			<div class="content-wrapper">
				<AppFooter />
			</div>
		</section>
	</section>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import config from '@/config';
import MySelf from '@/components/HomeSections/MySelf.component.vue';
import Skills from '@/components/HomeSections/Skills.component.vue';
import Experience from '@/components/HomeSections/Experience.component.vue';
import Education from '@/components/HomeSections/Education.component.vue';
import Projects from '@/components/HomeSections/Projects.component.vue';
import ContactMe from '@/components/HomeSections/ContactMe.component.vue';
import AppFooter from '@/components/HomeSections/AppFooter.component.vue';

const state = reactive({ showSection: config.showSection });
</script>

<style lang="scss" scoped>
.pages {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;

	.page {
		position: relative;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		width: 100%;

		.content-wrapper {
			flex-grow: 1;
			position: relative;

			&,
			:deep(.content) {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 100%;
			}

			:deep(.content) {
				z-index: 1;
				margin-bottom: calc(80px * var(--size-scale));
			}

			:deep(.section-title) {
				position: absolute;
				top: calc(-5px * var(--size-scale));
				right: calc(5px * var(--size-scale));
				font-size: calc(50px * var(--size-scale));
				font-weight: 900;
				white-space: nowrap;
				background: linear-gradient(0deg, #00000000, rgba(var(--text-color), 0.3));
				background-size: 100% 75%;
				background-clip: text;
				background-repeat: no-repeat;
				-webkit-text-fill-color: transparent;
				user-select: none;
			}
		}
	}

	.page:nth-child(2n + 2) {
		&::before {
			position: absolute;
			display: block;
			content: '';
			left: 0;
			width: 1000%;
			height: 100%;
			transform: translateX(-50%);
			background-color: rgba(var(--alt-bg-color));
		}
	}

	.page-1 {
		position: relative;
		padding-top: calc(100px * var(--size-scale));
	}
}
</style>
