<script setup>
  import {
    ArrowRightIcon,
    ArrowLeftIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    AppsIcon,
    ExternalLinkIcon,
    SpeakerphoneIcon,
    ArrowUpRightIcon
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
  <section class="mt-0 h-full w-full">
    <div class="relative h-screen w-full overflow-y-hidden">
      <img
        src="./../assets/images/slp.png"
        alt="slp"
        class="-z-50 h-full w-full object-cover"
      />

      <svg
        class="absolute bottom-0 -mb-28 fill-gray-200"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 267,230.5 534,261 774,261 C 1014,261 1227,230.5 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill-opacity="1"
        ></path>
      </svg>
    </div>
  </section>

  <!-- PETA SECTION -->
  <section
    class="h-auto w-full space-y-12 py-16 px-2 text-center md:py-24 md:px-10"
  >
    <p class="text-3xl font-bold text-slate-800 md:text-4xl">
      Peta Kabupaten Kepulauan Meranti
    </p>
    <div class="flex flex-col items-start md:flex-row">
      <div class="h-full w-full md:w-1/2">
        <PetaPulauMeranti />
        <!-- <PetaKecamatanMeranti /> -->
      </div>
      <div class="grid w-full space-y-4 text-start md:w-1/2">
        <p class="text-2xl font-semibold text-slate-700">Pulau Selatpanjang</p>
        <div>
          <img
            src="./../assets/images/slp.png"
            alt=""
            class="h-44 w-full rounded-xl object-cover"
          />
        </div>
        <p class="text-justify text-lg text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          laudantium temporibus accusamus commodi corporis provident, cumque
          omnis amet obcaecati quam!
        </p>
        <div class="space-x-4 justify-self-end text-white">
          <button
            class="rounded-lg bg-slate-800 px-3 py-2 hover:bg-primaryGreen"
          >
            <arrow-left-icon />
          </button>
          <button
            class="rounded-lg bg-slate-800 px-3 py-2 hover:bg-primaryGreen"
          >
            <arrow-right-icon />
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Berita Section -->
  <section class="space-y-6 py-16 px-2 md:py-24 md:px-10">
    <div class="flex items-center justify-between">
      <div class="text-2xl font-bold text-slate-800 md:text-3xl">
        <p>Berita Kab.</p>
        <p>Kepulauan Meranti</p>
      </div>
      <button
        type="button"
        class="group hidden items-center space-x-1 rounded-full bg-green-700 px-2 py-2 text-lg text-white md:flex md:px-5"
      >
        <span class="whitespace-nowrap text-sm md:text-base">Lihat Berita</span>
        <ArrowUpRightIcon class="duration-300 group-hover:rotate-45" />
      </button>
    </div>
    <div
      class="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0"
    >
      <div class="flex w-full flex-col space-y-4 md:w-3/5">
        <!-- Headline -->
        <div class="relative grid h-96 w-full md:h-full">
          <div class="absolute z-10 flex h-full w-full flex-col justify-end">
            <div
              class="h-fit w-full rounded-b-lg bg-black/50 p-2 backdrop-blur-sm duration-300 md:p-4"
            >
              <p class="text-sm font-normal text-slate-200">Kesehatan</p>
              <p
                class="text-xl font-bold text-slate-200 hover:text-white hover:underline md:text-2xl"
              >
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
                  <button
                    role="button"
                    class="rounded-md px-1 py-0.5 ring-1 ring-white hover:bg-white hover:text-black"
                  >
                    <ChevronLeftIcon />
                  </button>
                  <p>1 Dari 5</p>
                  <button
                    role="button"
                    class="rounded-md px-1 py-0.5 ring-1 ring-white hover:bg-white hover:text-black"
                  >
                    <ChevronRightIcon />
                  </button>
                </div>
                <a
                  href=""
                  class="rounded px-2 pb-1 pt-0.5 font-light text-green-400 ring-1 ring-green-400 hover:bg-primaryGreen hover:text-white"
                >
                  Lihat Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <img
            src="./../assets/images/2.jpg"
            alt=""
            class="absolute z-0 h-full w-full rounded-lg object-cover"
          />
        </div>
        <!-- Row Headline -->
        <div class="flex h-32 w-full overflow-x-auto">
          <div class="flex h-full w-max space-x-4">
            <div class="h-full w-52 md:w-1/4" v-for="n in 4" :key="n">
              <img
                src="./../assets/images/3.jpg"
                alt=""
                class="h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full border-gray-400 md:w-2/5">
        <p
          class="relative mb-3 -mt-2 w-fit pb-1.5 text-2xl font-medium text-slate-700 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:rounded-full after:bg-primaryGreen"
        >
          Berita Terbaru
        </p>
        <div class="grid space-y-2">
          <!--  -->
          <div
            class="group flex cursor-pointer items-stretch space-x-1 rounded-lg bg-white p-3 shadow-none ring-primaryGreen duration-300 hover:shadow-lg hover:ring-1"
            v-for="n in 3"
            :key="n"
          >
            <div class="grid h-full w-2/3 space-y-1">
              <p class="text-sm text-gray-400">Pemerintahan | 21 Juni 2023</p>
              <p
                class="text-lg font-normal text-slate-700 line-clamp-3 hover:text-slate-800"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                iste quidem tempore.
              </p>
              <a
                href="#"
                class="group flex w-fit items-center space-x-0 rounded-md py-1 text-sm font-medium text-slate-600 duration-200 hover:bg-green-200 hover:px-2 group-hover:text-green-600"
              >
                <span class="duration-200 group-hover:mr-1">
                  Lihat Selengkapnya
                </span>
                <ArrowRightIcon class="mt-1 h-5 w-5" />
              </a>
            </div>
            <div class="w-1/3 self-stretch py-2">
              <img
                src="./../assets/images/1.jpg"
                class="h-full w-full rounded-lg object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Tautan Aplikasi Section -->
  <section
    class="mx-2 my-16 flex flex-col rounded-2xl bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-green-700 via-green-600 to-green-500 p-4 shadow-2xl md:my-24 md:mx-10 md:flex-row md:p-10"
  >
    <div
      class="mr-0 w-full flex-initial space-y-4 text-slate-800 md:mr-10 md:w-1/4"
    >
      <p class="text-3xl font-bold text-slate-100">Tautan Web dan Aplikasi</p>
      <p class="text-lg text-slate-200">
        Kumpulan tautan aplikasi layanan publik maupun sistem pemerintahan
        daerah
      </p>
    </div>

    <div class="grid w-full flex-1 space-y-2">
      <div class="scrollbar-hide w-full flex-1 overflow-x-auto">
        <div class="flex h-fit w-max flex-1 space-x-4">
          <div
            class="w-56 space-y-2 rounded-lg bg-slate-200 p-4 shadow-yellow-400 duration-300 hover:bg-white hover:shadow-lg"
            v-for="n in 5"
            :key="n"
          >
            <div class="h-10 w-10 rounded-full bg-slate-700 p-2">
              <AppsIcon class="h-full w-full text-slate-200" />
            </div>
            <p class="text-xl font-bold leading-4 tracking-wide text-slate-700">
              Sirup
            </p>
            <p class="text-sm font-normal">
              Sistem Informasi Rumah Sakit Dorak
            </p>
            <a
              href="#"
              class="group flex w-fit items-center space-x-1 hover:underline"
            >
              <span class="text-sm text-slate-600 group-hover:text-slate-900">
                Kunjungi
              </span>
              <ExternalLinkIcon
                stroke-width="1.5"
                class="h-4 w-4 text-slate-600 group-hover:text-slate-900"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="mt-4 space-x-2">
        <button
          class="rounded-lg bg-slate-700 px-3 py-2 text-slate-200 ring-0 ring-inset ring-slate-300 duration-300 hover:bg-slate-800 hover:text-white hover:ring-2"
        >
          <arrow-left-icon />
        </button>
        <button
          class="rounded-lg bg-slate-700 px-3 py-2 text-slate-200 ring-0 ring-inset ring-slate-300 duration-300 hover:bg-slate-800 hover:text-white hover:ring-2"
        >
          <arrow-right-icon />
        </button>
      </div>
    </div>
  </section>

  <!-- Info dan Pengumuman Section -->
  <section
    class="flex flex-col space-x-0 border-primaryGreen py-16 px-2 md:flex-row md:space-x-4 md:space-y-0 md:py-24 md:px-10"
  >
    <div class="flex w-full flex-col justify-between md:w-1/3">
      <div class="flex-none space-y-4">
        <p class="text-3xl font-bold text-slate-800">Info dan Pengumuman</p>
        <p class="text-lg text-slate-700">
          Akses info dan pengumuman terbaru baik dari infografis ataupun widget
          yang tersedia
        </p>
        <a
          href="#"
          class="group flex w-fit items-center space-x-0 rounded-md py-1 text-lg font-medium text-slate-600 duration-200 hover:bg-green-200 hover:px-2 group-hover:text-green-800"
        >
          <span class="duration-200 group-hover:mr-1">Lihat Selengkapnya</span>
          <ArrowRightIcon class="mt-1 h-5 w-5" />
        </a>
      </div>
      <div class="flex h-96 flex-col overflow-y-auto pt-6 md:pt-0">
        <p
          class="relative mb-3 -mt-2 w-fit pb-1.5 text-2xl font-medium text-slate-700 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:rounded-full after:bg-primaryGreen"
        >
          Info Terbaru
        </p>
        <div
          class="scrollbar-hide h-full w-full flex-1 space-y-4 overflow-y-auto rounded-2xl bg-green-600 p-4"
        >
          <!-- Card -->
          <div
            class="group grid rounded-xl bg-white/70 p-4 transition-all duration-300 hover:bg-white"
            v-for="n in 4"
            :key="n"
          >
            <div
              class="mb-2 h-min w-fit rounded-lg bg-slate-600 p-2 group-hover:bg-slate-800"
            >
              <SpeakerphoneIcon class="text-white" />
            </div>
            <p class="text-sm text-slate-600">1 Januari 2023</p>
            <p class="text-slate-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
              voluptatibus.
            </p>
            <a
              href="#"
              class="group flex w-fit items-center space-x-0 rounded-md py-1 text-sm font-medium text-slate-600 duration-200 hover:bg-green-200 hover:px-2 group-hover:text-green-800"
            >
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
        class="relative mb-3 -mt-2 w-fit pb-1.5 text-2xl font-medium text-slate-700 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:rounded-full after:bg-primaryGreen"
      >
        Infografis
      </p>
      <div class="z-20 w-full flex-1 rounded-xl">
        <img
          src="./../assets/images/infografis_1.jpg"
          class="z-10 h-full w-full rounded-lg object-cover"
          alt=""
        />
      </div>
      <div class="z-0 -mt-2 flex-none rounded-b-lg bg-white p-4">
        <a
          href="#"
          class="text-lg font-medium leading-6 text-slate-800 line-clamp-2 hover:underline"
        >
          10 Daerah di Indonesia dengan skor literasi digital tertinggi
        </a>
        <p class="text-slate-700">Sumber: indonesiabaik.id</p>
      </div>
    </div>
    <div class="flex w-full flex-col pt-6 md:w-1/3">
      <p
        class="relative mb-3 -mt-2 w-fit pb-1.5 text-2xl font-medium text-slate-700 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:rounded-full after:bg-primaryGreen"
      >
        Widget
      </p>
      <div id="gpr-kominfo-widget-container" class="flex-1"></div>
    </div>
  </section>

  <!-- Agenda dan Acara Section -->
  <section class="space-y-6 py-16 px-2 md:space-y-12 md:py-24 md:px-0">
    <p class="text-center text-3xl font-bold text-slate-700">
      Agenda dan Acara
    </p>
    <div
      class="flex w-full flex-col space-x-0 space-y-6 md:flex-row md:space-x-8 md:space-y-0"
    >
      <div class="scrollbar-hide h-fit w-full overflow-x-auto md:w-1/2">
        <div class="flex h-fit w-max space-x-4">
          <div class="h-96 w-72 rounded-lg md:w-96">
            <img
              src="./../assets/images/asean2023.jfif"
              class="h-full w-full rounded-lg object-cover"
              alt=""
            />
          </div>
          <div class="h-96 w-72 rounded-lg md:w-96">
            <img
              src="./../assets/images/2.jpg"
              class="h-full w-full rounded-lg object-cover"
              alt=""
            />
          </div>
          <div class="h-96 w-72 rounded-lg md:w-96">
            <img
              src="./../assets/images/3.jpg"
              class="h-full w-full rounded-lg object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="flex h-96 w-full flex-col justify-center space-y-4 md:w-1/2">
        <div class="w-fit rounded-full bg-primaryGreen px-3 py-1">
          <span class="text-sm font-medium text-white">ACARA NASIONAL</span>
        </div>
        <div class="w-full md:w-full">
          <p class="text-4xl font-semibold text-slate-700">
            ASEAN Coordinating Council (ACC) ke-32
          </p>
        </div>
        <p class="text-lg line-clamp-4">
          Indonesia Pimpin Pertemuan ASEAN Coordinating Council (ACC) ke-32.
          Serah terima Keketuaan ASEAN dari Kamboja ke Indonesia telah dilakukan
          pada KTT ASEAN ke-42 di Phnom Penh bulan November 2022 lalu.
        </p>
        <p class="text-lg font-semibold text-slate-700">
          1 Januari 2023 - 31 Desember 2023
        </p>
        <div class="h-fit w-fit space-x-4 text-white">
          <div class="space-x-4 justify-self-end text-white">
            <button
              class="rounded-lg bg-slate-800 px-3 py-2 hover:bg-primaryGreen"
            >
              <arrow-left-icon />
            </button>
            <button
              class="rounded-lg bg-slate-800 px-3 py-2 hover:bg-primaryGreen"
            >
              <arrow-right-icon />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Informasi Publik Section -->
  <section
    class="relative grid grid-cols-1 gap-5 bg-gradient-to-tr from-green-500 via-green-600 to-green-700 py-16 px-2 md:grid-cols-3 md:gap-10 md:py-24 md:px-10"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="absolute z-0 h-full w-full object-cover"
      viewBox="0 0 2000 1500"
    >
      <rect fill="#019147" />
      <defs>
        <radialGradient id="a" gradientUnits="objectBoundingBox">
          <stop offset="0" stop-color="#01AB54" />
          <stop offset="1" stop-color="#019147" />
        </radialGradient>
        <linearGradient
          id="b"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="750"
          x2="1550"
          y2="750"
        >
          <stop offset="0" stop-color="#019e4e" />
          <stop offset="1" stop-color="#019147" />
        </linearGradient>
        <path
          id="s"
          fill="url(#b)"
          d="M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z"
        />
        <g id="g">
          <use href="#s" transform="scale(0.12) rotate(60)" />
          <use href="#s" transform="scale(0.2) rotate(10)" />
          <use href="#s" transform="scale(0.25) rotate(40)" />
          <use href="#s" transform="scale(0.3) rotate(-20)" />
          <use href="#s" transform="scale(0.4) rotate(-30)" />
          <use href="#s" transform="scale(0.5) rotate(20)" />
          <use href="#s" transform="scale(0.6) rotate(60)" />
          <use href="#s" transform="scale(0.7) rotate(10)" />
          <use href="#s" transform="scale(0.835) rotate(-40)" />
          <use href="#s" transform="scale(0.9) rotate(40)" />
          <use href="#s" transform="scale(1.05) rotate(25)" />
          <use href="#s" transform="scale(1.2) rotate(8)" />
          <use href="#s" transform="scale(1.333) rotate(-60)" />
          <use href="#s" transform="scale(1.45) rotate(-30)" />
          <use href="#s" transform="scale(1.6) rotate(10)" />
        </g>
      </defs>
      <g transform="rotate(0 0 0)">
        <g transform="rotate(0 0 0)">
          <circle fill="url(#a)" r="3000" />
          <g opacity="0.5">
            <circle fill="url(#a)" r="2000" />
            <circle fill="url(#a)" r="1800" />
            <circle fill="url(#a)" r="1700" />
            <circle fill="url(#a)" r="1651" />
            <circle fill="url(#a)" r="1450" />
            <circle fill="url(#a)" r="1250" />
            <circle fill="url(#a)" r="1175" />
            <circle fill="url(#a)" r="900" />
            <circle fill="url(#a)" r="750" />
            <circle fill="url(#a)" r="500" />
            <circle fill="url(#a)" r="380" />
            <circle fill="url(#a)" r="250" />
          </g>
          <g transform="rotate(0 0 0)">
            <use href="#g" transform="rotate(10)" />
            <use href="#g" transform="rotate(120)" />
            <use href="#g" transform="rotate(240)" />
          </g>
          <circle fill-opacity="0.1" fill="url(#a)" r="3000" />
        </g>
      </g>
    </svg>
    <div class="relative space-y-4 py-4">
      <p class="text-3xl font-bold leading-3 text-white">Informasi Publik</p>
      <p class="text-lg text-slate-200">
        Menyediakan berbagai informasi terbaru dari publikasi pemerintahan
        daerah, mulai dari publikasi dokumen, media, dan lain-lain.
      </p>
      <a
        href="text-lg"
        class="group flex w-fit items-center space-x-0 rounded-md py-1 text-base font-medium text-white duration-200 hover:bg-slate-800 hover:px-2 group-hover:text-green-800"
      >
        <span class="duration-200 group-hover:mr-1">Lihat Selengkapnya</span>
        <ArrowRightIcon class="mt-1 h-5 w-5" />
      </a>
    </div>
    <div
      class="group relative flex h-full cursor-pointer flex-col justify-between rounded-md bg-slate-100 p-4 ring-primaryGreen duration-300 hover:scale-110 hover:bg-white hover:shadow-lg hover:ring-1"
    >
      <div class="space-y-4">
        <img
          src="./../assets/images/publikasi/documents.png"
          class="h-12 w-12"
        />
        <p class="text-xl font-semibold text-slate-800">Publikasi Dokumen</p>
        <p class="text-lg text-slate-700">
          Laporan kinerja dan keuangan pemerintahan dinas kesehatan periode
        </p>
      </div>
      <a
        href=""
        class="group flex w-fit items-center space-x-0 rounded-md py-1 text-base font-medium text-primaryGreen duration-200 hover:bg-green-200 hover:px-2 group-hover:text-green-800"
      >
        <span class="duration-200 group-hover:mr-1">Lihat Selengkapnya</span>
        <ArrowRightIcon class="mt-1 h-5 w-5" />
      </a>
    </div>

    <div
      class="group relative flex h-full cursor-pointer flex-col justify-between rounded-md bg-slate-100 p-4 ring-primaryGreen duration-300 hover:scale-110 hover:bg-white hover:shadow-lg hover:ring-1"
    >
      <div class="space-y-4">
        <img
          src="./../assets/images/publikasi/pie-chart.png"
          class="h-12 w-12"
        />
        <p class="text-xl font-semibold text-slate-800">Infografis</p>
        <p class="text-lg text-slate-700">
          Laporan kinerja dan keuangan pemerintahan dinas kesehatan periode 2023
        </p>
      </div>
      <a
        href=""
        class="group flex w-fit items-center space-x-0 rounded-md py-1 text-base font-medium text-primaryGreen duration-200 hover:bg-green-200 hover:px-2 group-hover:text-green-800"
      >
        <span class="duration-200 group-hover:mr-1">Lihat Selengkapnya</span>
        <ArrowRightIcon class="mt-1 h-5 w-5" />
      </a>
    </div>

    <div
      class="group relative flex h-full cursor-pointer flex-col justify-between rounded-md bg-slate-100 p-4 ring-primaryGreen duration-300 hover:scale-110 hover:bg-white hover:shadow-lg hover:ring-1"
    >
      <div class="space-y-4">
        <img src="./../assets/images/publikasi/gallery.png" class="h-12 w-12" />
        <p class="text-xl font-semibold text-slate-800">Galeri Foto</p>
        <p class="text-lg text-slate-700">
          Laporan kinerja dan keuangan pemerintahan dinas kesehatan periode 2023
        </p>
      </div>
      <a
        href=""
        class="group flex w-fit items-center space-x-0 rounded-md py-1 text-base font-medium text-primaryGreen duration-200 hover:bg-green-200 hover:px-2 group-hover:text-green-800"
      >
        <span class="duration-200 group-hover:mr-1">Lihat Selengkapnya</span>
        <ArrowRightIcon class="mt-1 h-5 w-5" />
      </a>
    </div>

    <div
      class="group relative flex h-full cursor-pointer flex-col justify-between rounded-md bg-slate-100 p-4 ring-primaryGreen duration-300 hover:scale-110 hover:bg-white hover:shadow-lg hover:ring-1"
    >
      <div class="space-y-4">
        <img src="./../assets/images/publikasi/youtube.png" class="h-12 w-12" />
        <p class="text-xl font-semibold text-slate-800">Galeri Video</p>
        <p class="text-lg text-slate-700 line-clamp-3">
          Laporan kinerja dan keuangan pemerintahan dinas
        </p>
      </div>
      <a
        href=""
        class="flex w-fit items-center space-x-0 rounded-md py-1 text-base font-medium text-primaryGreen duration-200 hover:bg-green-200 hover:px-2 hover:text-green-800"
      >
        <span class="duration-200 hover:mr-1">Lihat Selengkapnya</span>
        <ArrowRightIcon class="mt-1 h-5 w-5" />
      </a>
    </div>

    <div
      class="group relative flex h-full cursor-pointer flex-col justify-between rounded-md bg-slate-100 p-4 ring-primaryGreen duration-300 hover:scale-110 hover:bg-white hover:shadow-lg hover:ring-1"
    >
      <div class="space-y-4">
        <img
          src="./../assets/images/publikasi/schedule.png"
          class="h-12 w-12"
        />
        <p class="text-xl font-semibold text-slate-800">Agenda dan Acara</p>
        <p class="text-lg text-slate-700">
          Laporan kinerja dan keuangan pemerintahan dinas kesehatan periode 2023
        </p>
      </div>
      <a
        href=""
        class="group flex w-fit items-center space-x-0 rounded-md py-1 text-base font-medium text-primaryGreen duration-200 hover:bg-green-200 hover:px-2 group-hover:text-green-800"
      >
        <span class="duration-200 group-hover:mr-1">Lihat Selengkapnya</span>
        <ArrowRightIcon class="mt-1 h-5 w-5" />
      </a>
    </div>

    <div
      class="group relative flex h-full cursor-pointer flex-col justify-between rounded-md bg-slate-100 p-4 ring-primaryGreen duration-300 hover:scale-110 hover:bg-white hover:shadow-lg hover:ring-1"
    >
      <div class="space-y-4">
        <img
          src="./../assets/images/publikasi/application.png"
          class="h-12 w-12"
        />
        <p class="text-xl font-semibold text-slate-800">Aplikasi</p>
        <p class="text-lg text-slate-700">
          Laporan kinerja dan keuangan pemerintahan dinas kesehatan periode 2023
        </p>
      </div>
      <a
        href=""
        class="group flex w-fit items-center space-x-0 rounded-md py-1 text-base font-medium text-primaryGreen duration-200 hover:bg-green-200 hover:px-2 group-hover:text-green-800"
      >
        <span class="duration-200 group-hover:mr-1">Lihat Selengkapnya</span>
        <ArrowRightIcon class="mt-1 h-5 w-5" />
      </a>
    </div>

    <div
      class="group relative flex h-full cursor-pointer flex-col justify-between rounded-md bg-slate-100 p-4 ring-primaryGreen duration-300 hover:scale-110 hover:bg-white hover:shadow-lg hover:ring-1"
    >
      <div class="space-y-4">
        <img
          src="./../assets/images/publikasi/megaphone.png"
          class="h-12 w-12"
        />
        <p class="text-xl font-semibold text-slate-800">Info dan Pengumuman</p>
        <p class="text-lg text-slate-700">
          Laporan kinerja dan keuangan pemerintahan dinas kesehatan periode 2023
        </p>
      </div>
      <a
        href=""
        class="group flex w-fit items-center space-x-0 rounded-md py-1 text-base font-medium text-primaryGreen duration-200 hover:bg-green-200 hover:px-2 group-hover:text-green-800"
      >
        <span class="duration-200 group-hover:mr-1">Lihat Selengkapnya</span>
        <ArrowRightIcon class="mt-1 h-5 w-5" />
      </a>
    </div>

    <div
      class="group relative flex h-full cursor-pointer flex-col justify-between rounded-md bg-slate-100 p-4 ring-primaryGreen duration-300 hover:scale-110 hover:bg-white hover:shadow-lg hover:ring-1"
    >
      <div class="space-y-4">
        <img
          src="./../assets/images/publikasi/documents.png"
          class="h-12 w-12"
        />
        <p class="text-xl font-semibold text-slate-800">Infografis</p>
        <p class="text-lg text-slate-700">
          Laporan kinerja dan keuangan pemerintahan dinas kesehatan periode 2023
        </p>
      </div>
      <a
        href=""
        class="group flex w-fit items-center space-x-0 rounded-md py-1 text-base font-medium text-primaryGreen duration-200 hover:bg-green-200 hover:px-2 group-hover:text-green-800"
      >
        <span class="duration-200 group-hover:mr-1">Lihat Selengkapnya</span>
        <ArrowRightIcon class="mt-1 h-5 w-5" />
      </a>
    </div>
  </section>

  <!-- Galeri Section -->
  <section
    class="grid justify-items-center space-y-12 py-16 px-2 md:py-24 md:px-10"
  >
    <p class="text-3xl font-bold">Galeri</p>
    <div
      class="flex w-full flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0"
    >
      <div
        class="group relative h-36 w-full rounded-lg bg-gray-400 duration-300 hover:scale-105 md:h-96 md:w-1/3"
      >
        <div
          class="absolute hidden h-full w-full items-center justify-center rounded-lg bg-black/50 object-cover group-hover:flex"
        >
          <p
            class="gallery-animate text-xl font-semibold text-white line-clamp-2"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
            reprehenderit!
          </p>
        </div>
        <img
          src="./../assets/images/1.jpg"
          class="h-full w-full rounded-lg object-cover"
          alt=""
        />
      </div>
      <div class="flex h-fit flex-1 flex-col space-y-4 md:h-96">
        <div
          class="group relative h-36 rounded-lg bg-gray-400 duration-300 hover:scale-105 md:h-1/3"
        >
          <div
            class="absolute hidden h-full w-full items-center justify-center rounded-lg bg-black/50 object-cover p-4 group-hover:flex"
          >
            <p
              class="gallery-animate text-xl font-semibold text-white line-clamp-2"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
              reprehenderit!
            </p>
          </div>
          <img
            src="./../assets/images/2.jpg"
            class="h-full w-full rounded-lg object-cover"
            alt=""
          />
        </div>
        <div
          class="group relative h-36 rounded-lg bg-gray-400 duration-300 hover:scale-105 md:h-2/3"
        >
          <div
            class="absolute hidden h-full w-full items-center justify-center rounded-lg bg-black/50 object-cover p-4 group-hover:flex"
          >
            <p
              class="gallery-animate text-xl font-semibold text-white line-clamp-2"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
              reprehenderit!
            </p>
          </div>
          <img
            src="./../assets/images/3.jpg"
            class="h-full w-full rounded-lg object-cover"
            alt=""
          />
        </div>
      </div>
      <div
        class="group relative h-36 w-full rounded-lg bg-gray-400 duration-300 hover:scale-105 md:h-96 md:w-1/4"
      >
        <div
          class="absolute hidden h-full w-full items-center justify-center rounded-lg bg-black/50 object-cover p-4 group-hover:flex"
        >
          <p
            class="gallery-animate text-xl font-semibold text-white line-clamp-2"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
            reprehenderit!
          </p>
        </div>
        <img
          src="./../assets/images/4.jpg"
          class="h-full w-full rounded-lg object-cover"
          alt=""
        />
      </div>
      <div class="flex h-fit flex-1 flex-col space-y-4 md:h-96">
        <div
          class="group relative h-36 rounded-lg bg-gray-400 duration-300 hover:scale-105 md:h-2/3"
        >
          <div
            class="absolute hidden h-full w-full items-center justify-center rounded-lg bg-black/50 object-cover p-4 group-hover:flex"
          >
            <p
              class="gallery-animate text-xl font-semibold text-white line-clamp-2"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
              reprehenderit!
            </p>
          </div>
          <img
            src="./../assets/images/3.jpg"
            class="h-full w-full rounded-lg object-cover"
            alt=""
          />
        </div>
        <div
          class="relative grid h-12 cursor-pointer items-center overflow-hidden rounded-lg bg-primaryGreen text-white duration-300 hover:scale-105 hover:bg-slate-800 md:h-1/3"
        >
          <img
            src="./../assets/images/batik_bintang.svg"
            class="absolute -top-0 h-auto w-24 opacity-20 invert"
            alt=""
          />

          <div
            class="z-10 flex h-full w-full items-center justify-center bg-black/10"
          >
            <p class="grid text-center text-2xl font-black text-slate-200">
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
