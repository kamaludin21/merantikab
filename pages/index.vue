<script setup>
import {
	ArrowRightIcon,
	ArrowLeftIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	AppsIcon,
	SpeakerphoneIcon,
	ArrowUpRightIcon,
	WorldWwwIcon
} from 'vue-tabler-icons'

useHead({
	script: {
		src: 'https://widget.kominfo.go.id/gpr-widget-kominfo.min.js',
		type: 'text/javascript'
	}
})
</script>

<template>
	<!-- JUMBROTRON SECTION -->
	<section class="h-screen w-full">
		<div class="h-3/4  w-full relative overflow-y-hidden">
			<img src="./../assets/images/slp.png" alt="slp" class="h-full w-full object-cover" />
			<!-- <BackgroundsWaveBackground /> -->

		</div>
		<div class="w-2/3 relative h-32 -mt-16 p-4 bg-white shadow-md rounded-lg mx-auto">
			<!-- <div class=" w-full h-full absolute top-0 left-0 rounded-lg flex flex-wrap overflow-hidden" >
				<BackgroundsKuntumBackground class="w-16 h-16 fill-gray-200"/>	
				<BackgroundsKuntumBackground class="w-16 h-16 fill-gray-200"/>	
			</div> -->
			<div class="w-full h-full flex space-x-4">
				<div class="p-4 relative hover:bg-white rounded-lg hover:shadow-lg hover:ring-1 duration-300 ring-primaryGreen flex items-center flex-col space-y-2 w-full">
				<img src="./../assets/images/dashboard.png" class="w-auto h-10" alt="">
				<p class="text-sm font-medium">Dashboard</p>
			</div>
			<div class="p-4 relative hover:bg-white rounded-lg hover:shadow-lg hover:ring-1 duration-300 ring-primaryGreen flex items-center flex-col space-y-2 w-full">
				<img src="./../assets/images/compliant.png" class="w-auto h-10" alt="">
				<p class="text-sm font-medium">JDIH</p>
			</div>
			<div class="p-4 relative hover:bg-white rounded-lg hover:shadow-lg hover:ring-1 duration-300 ring-primaryGreen flex items-center flex-col space-y-2 w-full">
				<img src="./../assets/images/book.png" class="w-auto h-10" alt="">
				<p class="text-sm font-medium">PPID</p>
			</div>
			<div class="p-4 relative hover:bg-white rounded-lg hover:shadow-lg hover:ring-1 duration-300 ring-primaryGreen flex items-center flex-col space-y-2 w-full">
				<img src="./../assets/images/data.png" class="w-auto h-10" alt="">
				<p class="text-sm font-medium">Open Data</p>
			</div>
			<div class="p-4 relative hover:bg-white rounded-lg hover:shadow-lg hover:ring-1 duration-300 ring-primaryGreen flex items-center flex-col space-y-2 w-full">
				<img src="./../assets/images/open-door.png" class="w-auto h-10" alt="">
				<p class="text-sm font-medium">Satu Pintu</p>
			</div>
			</div>
		</div>
		<!-- <div class="relative h-screen w-full overflow-y-hidden">

		</div> -->
	</section>

	<!-- PETA SECTION -->
	<section class="h-auto w-full space-y-12 px-2 text-center md:px-10">
		<p class="text-3xl font-bold text-textDark md:text-4xl">
			Peta Kabupaten Kepulauan Meranti
		</p>
		<div class="flex flex-col items-start md:flex-row">
			<div class="h-full w-full md:w-1/2">
				<PetaPulauMeranti />
			</div>
			<div class="grid w-full space-y-4 text-start md:w-1/2">
				<p class="text-2xl font-semibold text-textDark">Pulau Selatpanjang</p>
				<div>
					<img src="./../assets/images/slp.png" alt="" class="h-44 w-full rounded-xl object-cover" />
				</div>
				<p class="text-justify text-lg text-textLight">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					laudantium temporibus accusamus commodi corporis provident, cumque
					omnis amet obcaecati quam!
				</p>
				<div class="space-x-4 justify-self-end text-white">
					<button
						class="rounded-lg ring-0 ring-white hover:ring-2 duration-300 bg-slate-800 px-3 py-2 hover:bg-primaryGreen">
						<arrow-left-icon />
					</button>
					<button class="rounded-lg bg-slate-800 ring-white hover:ring-2 duration-300 px-3 py-2 hover:bg-primaryGreen">
						<arrow-right-icon />
					</button>
				</div>
			</div>
		</div>
	</section>

	<!-- Berita Section -->
	<section class="space-y-6 py-16 px-2 md:py-24 md:px-10">
		<div class="flex items-center justify-between">
			<div class="text-2xl font-bold text-textDark md:text-3xl">
				<p>Berita Kab.</p>
				<p>Kepulauan Meranti</p>
			</div>
			<button type="button"
				class="group hidden items-center space-x-1 rounded-full bg-green-700 px-2 py-2 text-lg text-white md:flex md:px-5">
				<span class="whitespace-nowrap text-sm md:text-base">Lihat Berita</span>
				<ArrowUpRightIcon class="duration-300 group-hover:rotate-45" />
			</button>
		</div>
		<div class="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
			<div class="flex w-full flex-col space-y-4 md:w-3/5">
				<!-- Headline -->
				<div class="relative grid h-96 w-full md:h-full">
					<div class="absolute z-10 flex h-full w-full flex-col justify-end">
						<div class="h-fit w-full rounded-b-lg bg-black/50 p-2 backdrop-blur-sm duration-300 md:p-4">
							<p class="text-sm font-normal text-textLighter">Kesehatan</p>
							<p class="text-xl font-bold text-textLighter hover:text-white hover:underline md:text-2xl">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Expedita aspernatur...
							</p>
							<div class="flex space-x-2 text-base font-light text-white">
								<p>1 Januari 2023</p>
								<p>|</p>
								<p>Humas Pemda</p>
							</div>
							<div class="mt-4 flex items-center justify-between text-white">
								<div class="flex items-center space-x-2">
									<button role="button" class="rounded-md px-1 py-0.5 ring-1 ring-white hover:bg-white hover:text-black">
										<ChevronLeftIcon />
									</button>
									<p>1 Dari 5</p>
									<button role="button" class="rounded-md px-1 py-0.5 ring-1 ring-white hover:bg-white hover:text-black">
										<ChevronRightIcon />
									</button>
								</div>
								<a href=""
									class="rounded px-2 pb-1 pt-0.5 font-light text-green-400 ring-1 ring-green-400 hover:bg-primaryGreen hover:text-white">
									Lihat Selengkapnya
								</a>
							</div>
						</div>
					</div>
					<img src="./../assets/images/2.jpg" alt="" class="absolute z-0 h-full w-full rounded-lg object-cover" />
				</div>
				<!-- Row Headline -->
				<div class="flex h-32 w-full overflow-x-auto">
					<div class="flex h-full w-max space-x-4">
						<div class="h-full w-52 md:w-1/4" v-for="n in 4" :key="n">
							<img src="./../assets/images/3.jpg" alt="" class="h-full w-full rounded-lg object-cover" />
						</div>
					</div>
				</div>
			</div>
			<div class="w-full border-gray-400 md:w-2/5">
				<p
					class="relative mb-3 -mt-2 w-fit pb-1.5 text-2xl font-medium text-textLight after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:rounded-full after:bg-primaryGreen">
					Berita Terbaru
				</p>
				<div class="grid space-y-2">
					<!--  -->
					<div
						class="group flex cursor-pointer items-stretch space-x-1 rounded-lg bg-white p-3 shadow-none ring-primaryGreen duration-300 hover:shadow-lg hover:ring-1"
						v-for="n in 3" :key="n">
						<div class="grid h-full w-2/3 space-y-1">
							<p class="text-sm text-gray-400">Pemerintahan | 21 Juni 2023</p>
							<p class="text-lg font-normal text-textLight line-clamp-3 hover:text-textDark">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
								iste quidem tempore.
							</p>
							<a href="#"
								class="group flex w-fit items-center space-x-0 rounded-md py-1 text-sm font-medium text-textLight duration-200 hover:bg-green-200 hover:px-2 group-hover:text-primaryGreen">
								<span class="duration-200 mr-0.5 group-hover:mr-1">
									Lihat Selengkapnya
								</span>
								<ArrowRightIcon class="mt-1 h-5 w-5" />
							</a>
						</div>
						<div class="w-1/3 self-stretch py-2">
							<img src="./../assets/images/1.jpg" class="h-full w-full rounded-lg object-cover" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Tautan Aplikasi Section -->
	<section
		class="mx-2 relative my-16 flex flex-col rounded-2xl bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-green-700 via-green-600 to-green-500 p-4 shadow-2xl md:my-24 md:mx-10 md:flex-row md:p-10">
		<div class="absolute z-0 left-0 top-0 h-full w-full">
			<BackgroundsPolygonBackground/>
		</div>
		<div class="mr-0 w-full relative flex-initial space-y-4 text-textDark md:mr-10 md:w-1/4">
			<p class="text-3xl font-bold text-slate-100">Tautan Web dan Aplikasi</p>
			<p class="text-lg text-textLighter">
				Kumpulan tautan aplikasi layanan publik maupun sistem pemerintahan
				daerah
			</p>
		</div>

		<div class="grid w-full flex-1 space-y-2 relative">
			<div class="scrollbar-hide w-full flex-1 overflow-x-auto">
				<div class="flex h-fit w-max flex-1 space-x-4">
					<div
						class="w-56 space-y-2 rounded-lg bg-slate-200 p-4 shadow-yellow-400 duration-300 hover:bg-white hover:shadow-lg"
						v-for="n in 5" :key="n">
						<div class="h-10 w-10 rounded-full bg-slate-700 p-2">
							<AppsIcon class="h-full w-full text-textLighter" />
						</div>
						<p class="text-xl font-bold leading-4 tracking-wide text-textLight">
							Sirup
						</p>
						<p class="text-sm font-normal">
							Sistem Informasi Rumah Sakit Dorak
						</p>
						<a href="#"
							class="group flex w-fit items-center space-x-0 rounded-md py-1 text-sm font-medium text-textLight duration-200 hover:bg-green-200 hover:px-2 group-hover:text-textDark">
							<span class="duration-200 mr-1 group-hover:mr-1.5">
								Kunjungi
							</span>
							<WorldWwwIcon stroke-width="2" class="h-4 w-4 text-textLight group-hover:text-textDark" />
						</a>

					</div>
				</div>
			</div>
			<div class="mt-4 space-x-2">
				<button
					class="rounded-lg bg-slate-700 px-3 py-2 text-textLighter ring-0 ring-inset ring-slate-300 duration-300 hover:bg-slate-800 hover:text-white hover:ring-2">
					<arrow-left-icon />
				</button>
				<button
					class="rounded-lg bg-slate-700 px-3 py-2 text-textLighter ring-0 ring-inset ring-slate-300 duration-300 hover:bg-slate-800 hover:text-white hover:ring-2">
					<arrow-right-icon />
				</button>
			</div>
		</div>
	</section>

	<!-- Info dan Pengumuman Section -->
	<section
		class="flex flex-col space-x-0 border-primaryGreen py-16 px-2 md:flex-row md:space-x-4 md:space-y-0 md:py-24 md:px-10">
		<div class="flex w-full flex-col justify-between md:w-1/3">
			<div class="flex-none space-y-4">
				<p class="text-3xl font-bold text-textDark">Info dan Pengumuman</p>
				<p class="text-lg text-textLight">
					Akses info dan pengumuman terbaru baik dari infografis ataupun widget
					yang tersedia
				</p>
				<a href="#"
					class="group flex w-fit items-center space-x-0 rounded-md py-1 text-lg font-medium text-textLight duration-200 hover:bg-green-200 hover:px-2 hover:text-primaryGreen">
					<span class="duration-200 mr-0.5 group-hover:mr-1">
						Lihat Selengkapnya
					</span>
					<ArrowRightIcon class="mt-1 h-5 w-5" />
				</a>
			</div>
			<div class="flex h-96 md:h-[26rem] flex-col overflow-y-auto pt-6 md:pt-0">
				<p
					class="relative mb-3 -mt-2 w-fit pb-1.5 text-2xl font-medium text-textLight after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:rounded-full after:bg-primaryGreen">
					Info Terbaru
				</p>
				<div class="scrollbar-hide h-full w-full flex-1 space-y-4 overflow-y-auto rounded-2xl bg-green-600 p-4">
					<!-- Card -->
					<div class="group grid rounded-xl bg-white/70 p-4 transition-all duration-300 hover:bg-white" v-for="n in 4"
						:key="n">
						<div class="mb-2 h-min w-fit rounded-lg bg-slate-600 p-2 group-hover:bg-slate-800">
							<SpeakerphoneIcon class="text-white" />
						</div>
						<p class="text-sm text-textLight">1 Januari 2023</p>
						<p class="text-textDark">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
							voluptatibus.
						</p>
						<a href="#"
							class="group flex w-fit items-center space-x-0 rounded-md py-1 mt-1 text-sm font-medium text-textLight duration-200 hover:bg-green-200 hover:px-2 group-hover:text-green-800">
							<span class="duration-200 group-hover:mr-1">
								Lihat Selengkapnya
							</span>
							<ArrowRightIcon class="mt-1 h-5 w-5" />
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="flex w-full flex-col pt-6 md:w-1/3">
			<p
				class="relative mb-3 -mt-2 w-fit pb-1.5 text-2xl font-medium text-textLight after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:rounded-full after:bg-primaryGreen">
				Infografis
			</p>
			<div class="z-20 w-full flex-1 rounded-xl">
				<img src="./../assets/images/infografis_1.jpg" class="z-10 h-full w-full rounded-lg object-cover" alt="" />
			</div>
			<div class="z-0 -mt-2 flex-none rounded-b-lg bg-white p-4">
				<a href="#" class="text-lg font-medium leading-6 text-textDark line-clamp-2 hover:underline">
					10 Daerah di Indonesia dengan skor literasi digital tertinggi
				</a>
				<p class="text-textLight">Sumber: indonesiabaik.id</p>
			</div>
		</div>
		<div class="flex w-full flex-col pt-6 md:w-1/3">
			<p
				class="relative mb-3 -mt-2 w-fit pb-1.5 text-2xl font-medium text-textLight after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:rounded-full after:bg-primaryGreen">
				Widget
			</p>
			<div id="gpr-kominfo-widget-container" class="flex-1"></div>
		</div>
	</section>

	<!-- Agenda dan Acara Section -->
	<section class="space-y-6 py-16 px-2 md:space-y-12 md:py-24 md:px-0">
		<p class="text-center text-3xl font-bold text-textLight">
			Agenda dan Acara
		</p>
		<div class="flex w-full flex-col space-x-0 space-y-6 md:flex-row md:space-x-8 md:space-y-0">
			<div class="scrollbar-hide h-fit w-full overflow-x-auto md:w-1/2">
				<div class="flex h-fit w-max space-x-4">
					<div class="h-96 w-72 rounded-lg md:w-96">
						<img src="./../assets/images/asean2023.jfif" class="h-full w-full rounded-lg object-cover" alt="" />
					</div>
					<div class="h-96 w-72 rounded-lg md:w-96">
						<img src="./../assets/images/2.jpg" class="h-full w-full rounded-lg object-cover" alt="" />
					</div>
					<div class="h-96 w-72 rounded-lg md:w-96">
						<img src="./../assets/images/3.jpg" class="h-full w-full rounded-lg object-cover" alt="" />
					</div>
				</div>
			</div>
			<div class="flex h-96 w-full flex-col justify-center space-y-4 md:w-1/2">
				<div class="w-fit rounded-full bg-primaryGreen px-3 py-1">
					<span class="text-sm font-medium text-white">ACARA NASIONAL</span>
				</div>
				<div class="w-full md:w-full">
					<p class="text-4xl font-semibold text-textLight">
						ASEAN Coordinating Council (ACC) ke-32
					</p>
				</div>
				<p class="text-lg line-clamp-4">
					Indonesia Pimpin Pertemuan ASEAN Coordinating Council (ACC) ke-32.
					Serah terima Keketuaan ASEAN dari Kamboja ke Indonesia telah dilakukan
					pada KTT ASEAN ke-42 di Phnom Penh bulan November 2022 lalu.
				</p>
				<p class="text-lg font-semibold text-textLight">
					1 Januari 2023 - 31 Desember 2023
				</p>
				<div class="h-fit w-fit space-x-4 text-white">
					<div class="space-x-4 justify-self-end text-white">
						<button class="rounded-lg bg-slate-800 px-3 py-2 ring-0 ring-white hover:ring-2 hover:bg-primaryGreen">
							<arrow-left-icon />
						</button>
						<button class="rounded-lg bg-slate-800 px-3 py-2 ring-0 ring-white hover:ring-2 hover:bg-primaryGreen">
							<arrow-right-icon />
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Informasi Publik Section -->
	<section
		class="relative grid grid-cols-1 gap-5 bg-gradient-to-tr from-green-500 via-green-600 to-green-700 py-16 px-2 md:grid-cols-3 md:gap-10 md:py-24 md:px-10">
		<BackgroundsCircleBackground />
		<div class="relative space-y-4 py-4">
			<p class="text-3xl font-bold leading-3 text-white">Informasi Publik</p>
			<p class="text-lg text-textLighter">
				Menyediakan berbagai informasi terbaru dari publikasi pemerintahan
				daerah, mulai dari publikasi dokumen, media, dan lain-lain.
			</p>
			<a href="text-lg"
				class="group flex w-fit items-center space-x-0 rounded-md py-1 text-base font-medium text-white duration-200 hover:bg-slate-800 hover:px-2 group-hover:text-green-800">
				<span class="duration-200 group-hover:mr-1">Lihat Selengkapnya</span>
				<ArrowRightIcon class="mt-1 h-5 w-5" />
			</a>
		</div>
		<div
			class="group relative flex h-full cursor-pointer flex-col justify-between rounded-md bg-slate-100 p-4 ring-primaryGreen duration-300 hover:scale-110 hover:bg-white hover:shadow-lg hover:ring-1">
			<div class="space-y-4">
				<img src="./../assets/images/publikasi/documents.png" class="h-12 w-12" />
				<p class="text-xl font-semibold text-textDark">Publikasi Dokumen</p>
				<p class="text-lg text-textLight">
					Laporan kinerja dan keuangan pemerintahan dinas kesehatan periode
				</p>
			</div>
			<a href=""
				class="group flex w-fit items-center space-x-0 rounded-md py-1 text-base font-medium text-primaryGreen duration-200 hover:bg-green-200 hover:px-2 group-hover:text-green-800">
				<span class="duration-200 group-hover:mr-1">Lihat Selengkapnya</span>
				<ArrowRightIcon class="mt-1 h-5 w-5" />
			</a>
		</div>

		<div
			class="group relative flex h-full cursor-pointer flex-col justify-between rounded-md bg-slate-100 p-4 ring-primaryGreen duration-300 hover:scale-110 hover:bg-white hover:shadow-lg hover:ring-1">
			<div class="space-y-4">
				<img src="./../assets/images/publikasi/pie-chart.png" class="h-12 w-12" />
				<p class="text-xl font-semibold text-textDark">Infografis</p>
				<p class="text-lg text-textLight">
					Laporan kinerja dan keuangan pemerintahan dinas kesehatan periode 2023
				</p>
			</div>
			<a href=""
				class="group flex w-fit items-center space-x-0 rounded-md py-1 text-base font-medium text-primaryGreen duration-200 hover:bg-green-200 hover:px-2 group-hover:text-green-800">
				<span class="duration-200 group-hover:mr-1">Lihat Selengkapnya</span>
				<ArrowRightIcon class="mt-1 h-5 w-5" />
			</a>
		</div>

		<div
			class="group relative flex h-full cursor-pointer flex-col justify-between rounded-md bg-slate-100 p-4 ring-primaryGreen duration-300 hover:scale-110 hover:bg-white hover:shadow-lg hover:ring-1">
			<div class="space-y-4">
				<img src="./../assets/images/publikasi/gallery.png" class="h-12 w-12" />
				<p class="text-xl font-semibold text-textDark">Galeri Foto</p>
				<p class="text-lg text-textLight">
					Laporan kinerja dan keuangan pemerintahan dinas kesehatan periode 2023
				</p>
			</div>
			<a href=""
				class="group flex w-fit items-center space-x-0 rounded-md py-1 text-base font-medium text-primaryGreen duration-200 hover:bg-green-200 hover:px-2 group-hover:text-green-800">
				<span class="duration-200 group-hover:mr-1">Lihat Selengkapnya</span>
				<ArrowRightIcon class="mt-1 h-5 w-5" />
			</a>
		</div>

		<div
			class="group relative flex h-full cursor-pointer flex-col justify-between rounded-md bg-slate-100 p-4 ring-primaryGreen duration-300 hover:scale-110 hover:bg-white hover:shadow-lg hover:ring-1">
			<div class="space-y-4">
				<img src="./../assets/images/publikasi/youtube.png" class="h-12 w-12" />
				<p class="text-xl font-semibold text-textDark">Galeri Video</p>
				<p class="text-lg text-textLight line-clamp-3">
					Laporan kinerja dan keuangan pemerintahan dinas
				</p>
			</div>
			<a href=""
				class="flex w-fit items-center space-x-0 rounded-md py-1 text-base font-medium text-primaryGreen duration-200 hover:bg-green-200 hover:px-2 hover:text-green-800">
				<span class="duration-200 hover:mr-1">Lihat Selengkapnya</span>
				<ArrowRightIcon class="mt-1 h-5 w-5" />
			</a>
		</div>

		<div
			class="group relative flex h-full cursor-pointer flex-col justify-between rounded-md bg-slate-100 p-4 ring-primaryGreen duration-300 hover:scale-110 hover:bg-white hover:shadow-lg hover:ring-1">
			<div class="space-y-4">
				<img src="./../assets/images/publikasi/schedule.png" class="h-12 w-12" />
				<p class="text-xl font-semibold text-textDark">Agenda dan Acara</p>
				<p class="text-lg text-textLight">
					Laporan kinerja dan keuangan pemerintahan dinas kesehatan periode 2023
				</p>
			</div>
			<a href=""
				class="group flex w-fit items-center space-x-0 rounded-md py-1 text-base font-medium text-primaryGreen duration-200 hover:bg-green-200 hover:px-2 group-hover:text-green-800">
				<span class="duration-200 group-hover:mr-1">Lihat Selengkapnya</span>
				<ArrowRightIcon class="mt-1 h-5 w-5" />
			</a>
		</div>

		<div
			class="group relative flex h-full cursor-pointer flex-col justify-between rounded-md bg-slate-100 p-4 ring-primaryGreen duration-300 hover:scale-110 hover:bg-white hover:shadow-lg hover:ring-1">
			<div class="space-y-4">
				<img src="./../assets/images/publikasi/application.png" class="h-12 w-12" />
				<p class="text-xl font-semibold text-textDark">Aplikasi</p>
				<p class="text-lg text-textLight">
					Laporan kinerja dan keuangan pemerintahan dinas kesehatan periode 2023
				</p>
			</div>
			<a href=""
				class="group flex w-fit items-center space-x-0 rounded-md py-1 text-base font-medium text-primaryGreen duration-200 hover:bg-green-200 hover:px-2 group-hover:text-green-800">
				<span class="duration-200 group-hover:mr-1">Lihat Selengkapnya</span>
				<ArrowRightIcon class="mt-1 h-5 w-5" />
			</a>
		</div>

		<div
			class="group relative flex h-full cursor-pointer flex-col justify-between rounded-md bg-slate-100 p-4 ring-primaryGreen duration-300 hover:scale-110 hover:bg-white hover:shadow-lg hover:ring-1">
			<div class="space-y-4">
				<img src="./../assets/images/publikasi/megaphone.png" class="h-12 w-12" />
				<p class="text-xl font-semibold text-textDark">Info dan Pengumuman</p>
				<p class="text-lg text-textLight">
					Laporan kinerja dan keuangan pemerintahan dinas kesehatan periode 2023
				</p>
			</div>
			<a href=""
				class="group flex w-fit items-center space-x-0 rounded-md py-1 text-base font-medium text-primaryGreen duration-200 hover:bg-green-200 hover:px-2 group-hover:text-green-800">
				<span class="duration-200 group-hover:mr-1">Lihat Selengkapnya</span>
				<ArrowRightIcon class="mt-1 h-5 w-5" />
			</a>
		</div>

		<div
			class="group relative flex h-full cursor-pointer flex-col justify-between rounded-md bg-slate-100 p-4 ring-primaryGreen duration-300 hover:scale-110 hover:bg-white hover:shadow-lg hover:ring-1">
			<div class="space-y-4">
				<img src="./../assets/images/publikasi/documents.png" class="h-12 w-12" />
				<p class="text-xl font-semibold text-textDark">Infografis</p>
				<p class="text-lg text-textLight">
					Laporan kinerja dan keuangan pemerintahan dinas kesehatan periode 2023
				</p>
			</div>
			<a href=""
				class="group flex w-fit items-center space-x-0 rounded-md py-1 text-base font-medium text-primaryGreen duration-200 hover:bg-green-200 hover:px-2 group-hover:text-green-800">
				<span class="duration-200 group-hover:mr-1">Lihat Selengkapnya</span>
				<ArrowRightIcon class="mt-1 h-5 w-5" />
			</a>
		</div>
	</section>

	<!-- Galeri Section -->
	<section class="grid justify-items-center space-y-12 py-16 px-2 md:py-24 md:px-10">
		<p class="text-3xl font-bold">Galeri</p>
		<div class="flex w-full flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
			<div class="group relative h-36 w-full rounded-lg bg-gray-400 duration-300 hover:scale-105 md:h-96 md:w-1/3">
				<div
					class="absolute hidden h-full w-full items-center justify-center rounded-lg bg-black/50 object-cover group-hover:flex">
					<p class="gallery-animate text-xl font-semibold text-white line-clamp-2">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
						reprehenderit!
					</p>
				</div>
				<img src="./../assets/images/1.jpg" class="h-full w-full rounded-lg object-cover" alt="" />
			</div>
			<div class="flex h-fit flex-1 flex-col space-y-4 md:h-96">
				<div class="group relative h-36 rounded-lg bg-gray-400 duration-300 hover:scale-105 md:h-1/3">
					<div
						class="absolute hidden h-full w-full items-center justify-center rounded-lg bg-black/50 object-cover p-4 group-hover:flex">
						<p class="gallery-animate text-xl font-semibold text-white line-clamp-2">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
							reprehenderit!
						</p>
					</div>
					<img src="./../assets/images/2.jpg" class="h-full w-full rounded-lg object-cover" alt="" />
				</div>
				<div class="group relative h-36 rounded-lg bg-gray-400 duration-300 hover:scale-105 md:h-2/3">
					<div
						class="absolute hidden h-full w-full items-center justify-center rounded-lg bg-black/50 object-cover p-4 group-hover:flex">
						<p class="gallery-animate text-xl font-semibold text-white line-clamp-2">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
							reprehenderit!
						</p>
					</div>
					<img src="./../assets/images/3.jpg" class="h-full w-full rounded-lg object-cover" alt="" />
				</div>
			</div>
			<div class="group relative h-36 w-full rounded-lg bg-gray-400 duration-300 hover:scale-105 md:h-96 md:w-1/4">
				<div
					class="absolute hidden h-full w-full items-center justify-center rounded-lg bg-black/50 object-cover p-4 group-hover:flex">
					<p class="gallery-animate text-xl font-semibold text-white line-clamp-2">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
						reprehenderit!
					</p>
				</div>
				<img src="./../assets/images/4.jpg" class="h-full w-full rounded-lg object-cover" alt="" />
			</div>
			<div class="flex h-fit flex-1 flex-col space-y-4 md:h-96">
				<div class="group relative h-36 rounded-lg bg-gray-400 duration-300 hover:scale-105 md:h-2/3">
					<div
						class="absolute hidden h-full w-full items-center justify-center rounded-lg bg-black/50 object-cover p-4 group-hover:flex">
						<p class="gallery-animate text-xl font-semibold text-white line-clamp-2">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
							reprehenderit!
						</p>
					</div>
					<img src="./../assets/images/3.jpg" class="h-full w-full rounded-lg object-cover" alt="" />
				</div>
				<div
					class="relative grid h-12 cursor-pointer items-center overflow-hidden rounded-lg bg-primaryGreen text-white duration-300 hover:scale-105 hover:bg-slate-800 md:h-1/3">
					<img src="./../assets/images/batik_bintang.svg" class="absolute -top-0 h-auto w-24 opacity-20 invert" alt="" />

					<div class="z-10 flex h-full w-full items-center justify-center bg-black/10">
						<p class="grid text-center text-2xl font-black text-textLighter">
							Jelajahi Galeri
						</p>
					</div>
				</div>
			</div>
		</div>

	</section>
</template>

<style scoped>
.gallery-animate {
	animation: enter-title 1s ease 0s 1 normal forwards;
}

@keyframes enter-title {
	0% {
		transform: scale(1.1);
	}

	100% {
		transform: scale(0.8);
	}
}
</style>
