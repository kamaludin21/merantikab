<script setup>
  import {
    BrandAbstractIcon,
    ArrowRightIcon,
    ArrowLeftIcon,
    GavelIcon,
    PhotoIcon
  } from 'vue-tabler-icons'
</script>

<template>
  <!-- JUMBROTRON SECTION -->
  <section class="-mt-14">
    <div class="h-screen w-full">
      <img
        src="./../assets/images/slp.png"
        alt="slp"
        class="h-screen w-full object-cover"
      />
    </div>
  </section>
  <!-- PETA SECTION -->
  <section
    class="md py-16:md:py-24 h-auto w-full space-y-12 px-2 py-16 text-center md:px-10"
  >
    <p class="text-3xl font-bold">Peta Kabupaten Kepulauan Meranti</p>
    <div class="flex flex-col items-start md:flex-row">
      <div class="w-full md:w-1/2">
        <img src="./../assets/images/peta_pulau.svg" class="" alt="" />
      </div>
      <div class="grid w-full space-y-4 text-start md:w-1/2">
        <p class="text-xl font-semibold">Pulau Selatpanjang</p>
        <div>
          <img
            src="./../assets/images/slp.png"
            alt=""
            class="h-44 w-full rounded-xl object-cover"
          />
        </div>
        <p class="text-justify text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          laudantium temporibus accusamus commodi corporis provident, cumque
          omnis amet obcaecati quam!
        </p>
        <div class="space-x-4 justify-self-end">
          <button class="rounded-lg bg-gray-300 px-3 py-2">
            <arrow-left-icon />
          </button>
          <button class="rounded-lg bg-gray-300 px-3 py-2">
            <arrow-right-icon />
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Berita Section -->
  <section class="space-y-6 px-2 py-16 md:space-y-12 md:px-10 md:py-24">
    <div class="flex items-center justify-between">
      <div class="text-xl font-bold md:text-3xl">
        <p>Berita Terbaru</p>
        <p>Kab. Kepulauan Meranti</p>
      </div>
      <button
        class="flex items-center space-x-2 rounded-full bg-gray-400 px-2 py-2 text-lg md:px-5"
      >
        <span class="md:text-regular whitespace-nowrap text-sm">
          Lihat Semua Berita
        </span>
        <arrow-right-icon class="hidden md:block" />
      </button>
    </div>
    <div
      class="flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0"
    >
      <div class="grid w-full space-y-4 md:w-3/5">
        <!-- Headline -->
        <div class="h-full w-full">
          <img
            src="./../assets/images/slp.png"
            alt=""
            class="h-full w-full rounded-lg object-cover"
          />
        </div>
        <!-- Row Headline -->
        <div class="flex space-x-4">
          <div class="w-1/4" v-for="n in 4" :key="n">
            <img
              src="./../assets/images/slp.png"
              alt=""
              class="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
      <div class="w-full rounded-lg border-2 border-gray-400 p-2 md:w-2/5">
        <p class="text-xl font-medium">Berita Terbaru</p>
        <div class="grid space-y-2">
          <div class="flex items-stretch space-x-1" v-for="n in 4" :key="n">
            <div class="grid h-full w-2/3">
              <p class="text-sm text-gray-400">Pemerintahan | 21 Juni 2023</p>
              <p class="text-lg font-semibold leading-6 tracking-tight">
                Lorem ipsum, dolor sit amet consect etur adipisicing elit
                architecto
              </p>
              <a href="" class="font-medium">Lihat selengkapnya</a>
            </div>
            <div class="w-1/3 self-stretch py-2">
              <img
                src="./../assets/images/slp.png"
                class="h-full w-full rounded-lg object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pengumuman Section -->
  <section class="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 px-2 md:px-10 py-16 md:py-24">
    <div class="w-full md:w-1/3 space-y-4">
      <p class="text-3xl font-bold">Info dan Pengumuman</p>
      <p class="">
        Informasi dan pengumuman terbaru akan dilampirkan pada halaman ini. data
        akan diperbarui oleh staff terkait dengan acara
      </p>
      <div>
        <a href="" class="font-medium">Lihat Selengkapnya</a>
      </div>
    </div>
    <div class="grid w-full md:w-2/3 grid-cols-1 md:grid-cols-2 gap-4">
      <div
        class="w-full rounded-md p-4 hover:ring-2 hover:ring-gray-400"
        v-for="n in 4"
        :key="n"
      >
        <div class="mb-4 w-fit rounded-lg bg-gray-400 p-2">
          <gavel-icon />
        </div>
        <p class="text-sm text-gray-400">1 Januari 2023</p>
        <p class="text-xl font-semibold">
          Pengumuman hasil verifikasi dan validasi KTP warga Putri Puyu
        </p>
        <a href="#" class="text-sm font-medium">Selengkapnya</a>
      </div>
    </div>
  </section>

  <!-- Agenda dan Acara Section -->
  <section
    class="space-y-6 bg-gray-300 px-2 py-16 md:space-y-12 md:px-0 md:py-24"
  >
    <p class="text-center text-3xl font-bold">Agenda dan Acara</p>
    <div
      class="flex w-full flex-col space-x-0 space-y-6 md:flex-row md:space-x-8 md:space-y-0"
    >
      <div class="h-fit w-full overflow-x-auto overflow-y-hidden md:w-1/2">
        <div class="flex h-fit w-max space-x-4">
          <div class="h-96 w-72 md:w-96 rounded-lg bg-white">
						<PhotoIcon/>
					</div>
          <div class="h-96 w-72 md:w-96 rounded-lg bg-white">
						<PhotoIcon/>
					</div>
					<div class="h-96 w-72 md:w-96 rounded-lg bg-white">
						<PhotoIcon/>
					</div>
        </div>
      </div>
      <div class="flex h-96 w-full flex-col justify-center space-y-4 md:w-1/2">
        <div class="w-fit rounded-full bg-gray-400 px-3 py-1">
          <span class="text-sm font-medium">ACARA KEAGAMAAN</span>
        </div>
        <div class="w-full md:w-1/2">
          <p class="text-4xl font-semibold">Festival Air Hari Raya Imlek</p>
        </div>
        <p>
          Festival Air adalah perayaan Tahun Baru yang terjadi di negara-negara
          Asia Tenggara seperti Burma, Kamboja, Laos, dan Thailand serta Yunnan,
          Cina. Disebut 'Festival Air' oleh Barat karena orang percikan /
          menuangkan air pada satu sama lain sebagai bagian dari ritual
          pembersihan untuk menyambut tahun baru.
        </p>
        <p class="text-lg font-semibold">12 Januari 2023 - 14 Januari 2023</p>
        <div class="h-fit w-fit space-x-4">
          <button class="rounded-lg bg-gray-400 px-3 py-2">
            <arrow-left-icon />
          </button>
          <button class="rounded-lg bg-gray-400 px-3 py-2">
            <arrow-right-icon />
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Publikasi Section -->
  <section
    class="grid grid-cols-1 gap-5 px-2 py-16 md:grid-cols-3 md:gap-10 md:px-10 md:py-24"
  >
    <div class="space-y-4 py-4">
      <p class="text-3xl font-bold">Informasi Publik</p>
      <p class="">
        Nikmati berbagai konten terbaru dari publikasi pemerintahan daerah,
        mulai dari publikasi dokumen, media, agenda dan acara, dan lain-lain.
      </p>
      <p href="" class="font-medium">Lihat Selengkapnya</p>
    </div>
    <div
      class="space-y-4 rounded-md bg-gray-100 p-4 hover:ring-2"
      v-for="n in 8"
      :key="n"
    >
      <brand-abstract-icon class="h-10 w-10" />
      <p class="text-xl font-semibold leading-3">Publikasi Dokumen</p>
      <p class="text-lg">
        Laporan kinerja dan keuangan pemerintahan dinas kesehatan periode
        2022-2023
      </p>
      <a href="" class="font-medium">Selengkapnya</a>
    </div>
  </section>

  <!-- Tautan Aplikasi Section -->
  <section
    class="grid justify-items-center space-y-12 bg-gray-300 px-2 py-16 text-center md:px-10"
  >
    <p class="text-3xl font-bold">Tautan Aplikasi dan Situs Pemerintahan</p>
    <div
      class="grid h-44 w-full grid-cols-2 items-stretch gap-4 md:grid-cols-5"
    >
      <div
        class="h-full w-full items-stretch rounded-lg bg-gray-400"
        v-for="n in 4"
        :key="n"
      >
        <p>Link</p>
      </div>
      <div class="col-span-2 h-full w-full rounded-lg bg-gray-400 md:col-auto">
        <p>Link</p>
      </div>
    </div>
    <div class="rounded-full bg-gray-400 px-4 py-2">
      <p class="font-medium">Lihat Selengkapnya</p>
    </div>
  </section>

  <!-- Galeri Section -->
  <section class="grid justify-items-center space-y-12 px-2 py-16 md:px-10">
    <p class="text-3xl font-bold">Galeri Foto</p>
    <div
      class="flex w-full flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0"
    >
      <div class="h-24 w-full rounded-lg bg-gray-400 md:h-96 md:w-1/3">
        <PhotoIcon />
      </div>
      <div class="flex h-fit flex-1 flex-col space-y-4 md:h-96">
        <div class="h-24 rounded-lg bg-gray-400 md:h-1/3"><PhotoIcon /></div>
        <div class="h-24 rounded-lg bg-gray-400 md:h-2/3"><PhotoIcon /></div>
      </div>
      <div class="h-24 w-full rounded-lg bg-gray-400 md:h-96 md:w-1/3">
        <PhotoIcon />
      </div>
      <div class="flex h-fit flex-1 flex-col space-y-4 md:h-96">
        <div class="h-24 rounded-lg bg-gray-400 md:h-2/3"><PhotoIcon /></div>
        <div
          class="grid h-12 items-center justify-items-center rounded-lg bg-gray-400 md:h-1/3"
        >
          <p class="w-fit text-center text-2xl font-bold md:w-min">
            Jelajah Galeri
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
