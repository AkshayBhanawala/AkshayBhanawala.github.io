<template>
	<PathView :stops="pathStops" />
	<div class="section-title">CONTACT ME</div>
	<div class="content">
		<div class="scale-size-sitting-marcus">
			<img class="" src="/img/WD2 Marcus [LegSizeFiller].webp" alt="Marcus" />
		</div>
		<div class="contact-me-wrapper">
			<div class="contact-me">
				<div class="sitting-marcus">
					<img class="" src="/img/WD2 Marcus [Sitting].webp" alt="Marcus" />
				</div>
				<div class="scale-size-sitting-marcus">
					<img class="" src="/img/WD2 Marcus [LegSizeFiller].webp" alt="Marcus" />
				</div>
				<div class="links">
					<a class="link" target="_blank" title="LinkedIn" :href="state.linkedIn">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
							<path
								class="fg"
								d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
							/>
						</svg>
					</a>
					<a class="link" target="_blank" title="Email" :href="state.email">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path
								class="fg"
								d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64z"
							/>
						</svg>
					</a>
					<a v-if="state.phone" class="link" target="_blank" title="Phone" :href="state.phone">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path
								class="fg"
								d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
							/>
						</svg>
					</a>
					<a class="link" target="_blank" title="Where I Live" :href="state.location">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
							<path
								class="fg"
								d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z"
							/>
						</svg>
					</a>
					<a class="link" target="_blank" title="GitHub" :href="state.github">
						<svg version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
							<g class="fg" transform="matrix(1.3333 0 0 -1.3333 522 735.98)">
								<g transform="matrix(3.1794 0 0 3.1937 -1314.2 -1028.2)">
									<g transform="translate(350.61 493.55)">
										<path
											d="m0 0c-33.347 0-60.388-27.035-60.388-60.388 0-26.68 17.303-49.316 41.297-57.301 3.018-0.559 4.126 1.31 4.126 2.905 0 1.439-0.056 6.197-0.082 11.243-16.8-3.653-20.345 7.125-20.345 7.125-2.747 6.979-6.705 8.836-6.705 8.836-5.479 3.748 0.413 3.671 0.413 3.671 6.064-0.426 9.257-6.224 9.257-6.224 5.386-9.231 14.127-6.562 17.573-5.019 0.543 3.902 2.107 6.567 3.834 8.075-13.413 1.526-27.513 6.705-27.513 29.844 0 6.592 2.359 11.98 6.222 16.209-0.627 1.521-2.694 7.663 0.586 15.981 0 0 5.071 1.622 16.61-6.191 4.817 1.338 9.983 2.009 15.115 2.033 5.132-0.024 10.302-0.695 15.128-2.033 11.526 7.813 16.59 6.191 16.59 6.191 3.287-8.318 1.22-14.46 0.593-15.981 3.872-4.229 6.214-9.617 6.214-16.209 0-23.195-14.127-28.301-27.574-29.796 2.166-1.874 4.096-5.549 4.096-11.183 0-8.08-0.069-14.583-0.069-16.572 0-1.608 1.086-3.49 4.147-2.898 23.982 7.994 41.263 30.622 41.263 57.294 0 33.353-27.037 60.388-60.388 60.388"
										/>
									</g>
									<g transform="translate(313.09 406.85)">
										<path
											d="m0 0c-0.133-0.301-0.605-0.391-1.035-0.185-0.439 0.198-0.684 0.607-0.542 0.908 0.13 0.308 0.602 0.394 1.04 0.188 0.438-0.197 0.688-0.61 0.537-0.911"
										/>
									</g>
									<g transform="translate(315.54 404.12)">
										<path
											d="m0 0c-0.288-0.267-0.852-0.143-1.233 0.279-0.396 0.421-0.469 0.985-0.177 1.255 0.297 0.267 0.843 0.142 1.238-0.279 0.396-0.426 0.473-0.984 0.172-1.255"
										/>
									</g>
									<g transform="translate(317.92 400.65)">
										<path
											d="m0 0c-0.37-0.258-0.976-0.017-1.35 0.52-0.37 0.538-0.37 1.182 9e-3 1.44 0.374 0.258 0.971 0.025 1.35-0.507 0.369-0.546 0.369-1.19-9e-3 -1.453"
										/>
									</g>
									<g transform="translate(321.18 397.29)">
										<path
											d="m0 0c-0.331-0.365-1.036-0.267-1.552 0.232-0.528 0.486-0.675 1.177-0.344 1.542 0.336 0.366 1.045 0.263 1.565-0.231 0.524-0.486 0.683-1.182 0.331-1.543"
										/>
									</g>
									<g transform="translate(325.68 395.33)">
										<path
											d="m0 0c-0.147-0.473-0.825-0.687-1.509-0.486-0.683 0.207-1.13 0.76-0.992 1.238 0.142 0.476 0.824 0.7 1.513 0.485 0.682-0.206 1.13-0.756 0.988-1.237"
										/>
									</g>
									<g transform="translate(330.62 394.97)">
										<path
											d="m0 0c0.017-0.498-0.563-0.911-1.281-0.92-0.722-0.016-1.307 0.387-1.315 0.877 0 0.503 0.568 0.911 1.289 0.924 0.718 0.014 1.307-0.387 1.307-0.881"
										/>
									</g>
									<g transform="translate(335.22 395.75)">
										<path
											d="m0 0c0.086-0.485-0.413-0.984-1.126-1.117-0.701-0.129-1.35 0.172-1.439 0.653-0.087 0.498 0.42 0.997 1.121 1.126 0.714 0.124 1.353-0.168 1.444-0.662"
										/>
									</g>
								</g>
							</g>
						</svg>
					</a>
					<a class="link" target="_blank" title="Website" :href="state.website">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
							<path
								class="fg"
								d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
							/>
						</svg>
					</a>
					<a class="link" target="_blank" title="Resume/CV" :href="state.resume">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
							<path
								class="fg"
								fill-rule="evenodd"
								transform="scale(1.2) translate(-4.3 -4)"
								d="M15.51 8H11.5C9.57 8 8 9.57 8 11.5v29c0 .93.37 1.82 1.03 2.47.66.66 1.55 1.03 2.47 1.03h25c.93 0 1.82-.37 2.47-1.03.66-.66 1.03-1.55 1.03-2.47v-29C40 9.57 38.43 8 36.5 8h-4.01c.33.94.51 1.95.51 3a9 9 0 0 1-18 0c0-1.05.18-2.06.51-3zM15 33c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm5 3c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3s-1.34-3-3-3H23c-1.66 0-3 1.34-3 3zm-5-1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1H23c-.55 0-1-.45-1-1zm-7-12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm5 3c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3s-1.34-3-3-3H23c-1.66 0-3 1.34-3 3zm-5-1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1H23c-.55 0-1-.45-1-1zm-1.84-10.15a6.997 6.997 0 0 0 7.67.01 4.007 4.007 0 0 0-7.51-.46c-.04.1-.1.26-.16.45zm-1.59-1.43a6.004 6.004 0 0 1 2.51-2.67 4 4 0 0 1-1.1-2.75c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.06-.42 2.03-1.09 2.75 1.09.61 1.98 1.55 2.52 2.68A6.965 6.965 0 0 0 30.99 11c0-3.86-3.14-7-7-7s-7 3.14-7 7c0 1.68.59 3.22 1.58 4.42zM23.99 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
							/>
						</svg>
					</a>
				</div>
				<div class="scale-size-sitting-marcus">
					<img class="" src="/img/WD2 Marcus [LegSizeFiller].webp" alt="Marcus" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { computed } from '@vue/reactivity';
import PathView from '@/components/Path.component.vue';

const myData = {
	linkedIn: 'TH3-AZ',
	email: 'AkshayBhanawala@gmail.com',
	phone: '+918128833227',
	location: 'Surat, Gujarat',
	github: 'AkshayBhanawala',
	website: '//AkshayBhanawala.github.io',
	resume: 'https://drive.google.com/file/d/16XCKgfiegIn5m9yuqau_mVm3kMynBnby/view',
};

const state = reactive({
	linkedIn: `http://linkedin.com/in/${myData.linkedIn}`,
	email: `mailto:${myData.email}`,
	phone: null, //`tel:${myData.phone}`,
	location: `https://google.com/maps/place/${myData.location}`,
	github: `https://github.com/${myData.github}?tab=repositories`,
	website: `${myData.website}`,
	resume: `${myData.resume}`,
});

const pathStops = computed((): string[] => {
	return ['calc(25px * var(--size-scale))'];
});
</script>

<style lang="scss" scoped>
$link-size: calc(50px * var(--size-scale));
$sitting-marcus-max-width: calc(350px * var(--size-scale));

.section-title {
	left: var(--indent-follow-path);
	right: unset !important;
}

.content {
	.scale-size-sitting-marcus {
		display: flex;
		width: 100%;
		max-width: calc($sitting-marcus-max-width + calc(200px * var(--size-scale)));
	}

	.contact-me-wrapper {
		width: 100%;
		padding-left: var(--indent-follow-path);
		padding-right: calc(50px * var(--size-scale));

		.contact-me {
			position: relative;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			border-radius: calc(30px * var(--size-scale));
			border: calc(10px * var(--size-scale)) solid rgba(var(--text-color), 0.4);

			.scale-size-sitting-marcus {
				display: flex;
				width: 100%;
				max-width: $sitting-marcus-max-width;
			}

			.sitting-marcus {
				z-index: 1;
				position: absolute;
				width: 100%;
				max-width: $sitting-marcus-max-width;
				height: calc(0px * var(--size-scale));
				top: 0;
				right: 0;
				transform: rotateY(180deg);

				img {
					position: absolute;
					right: 0;
					max-width: 100%;
					transform: translate(-40%, -53.5%);
					filter: drop-shadow(
						calc(0px * var(--size-scale)) calc(2px * var(--size-scale))
							calc(1px * var(--size-scale)) rgba(0, 0, 0, 0.5)
					);
				}
			}

			.links {
				display: flex;
				flex-direction: row;
				justify-content: space-evenly;
				align-items: center;
				flex-wrap: wrap;
				min-width: calc(100% - calc(200px * var(--size-scale)));
				width: min-content;
				column-gap: calc(35px * var(--size-scale));
				row-gap: calc(35px * var(--size-scale));
				padding: calc(35px * var(--size-scale));
				border-radius: calc(20px * var(--size-scale));
				border: calc(5px * var(--size-scale)) solid rgba(var(--text-color), 0.3);

				a.link {
					z-index: 2;
					display: flex;
					justify-content: center;
					align-items: center;
					min-height: $link-size;
					min-width: $link-size;
					max-height: $link-size;
					max-width: $link-size;

					.fg {
						fill: rgba(var(--text-color), 1);
					}
				}
			}
		}
	}
}
</style>
