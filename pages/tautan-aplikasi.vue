<script setup>
  import {
    BrandAndroidIcon,
    ChevronDownIcon,
    CopyIcon,
    ExternalLinkIcon,
    SearchIcon,
    SortAscendingIcon
  } from 'vue-tabler-icons'
</script>

<template>
  <div
    class="flex h-fit w-full flex-col items-start justify-between px-2 py-16 md:flex-row md:items-center md:px-10"
  >
    <div class="w-full space-y-4 md:w-1/3">
      <p class="text-5xl font-bold text-slate-800">Tautan Aplikasi</p>
      <p class="text-lg text-slate-600">
        Menyediakan koleksi informasi dan tautan aplikasi web ataupun seluler
        pemerintahan di level dinas ataupun instansi lainnya
      </p>
    </div>
    <div class="hidden px-2 md:block md:px-10">
      <img src="./../assets/images/categories.png" class="h-auto w-44" alt="" />
    </div>
  </div>
  <div
    class="flex flex-col space-x-0 space-y-4 px-2 pb-16 md:flex-row md:space-x-4 md:space-y-0 md:px-10"
  >
    <div class="sticky top-20 h-fit w-full rounded-lg bg-gray-50 p-4 md:w-1/5">
      <p
        class="relative mb-3 -mt-2 w-fit whitespace-nowrap pb-1.5 text-2xl font-bold text-slate-700 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:rounded-full after:bg-primaryGreen"
      >
        Kategori
      </p>
      <div
        class="flex w-full items-center space-y-0 space-x-2 overflow-x-auto whitespace-nowrap md:block text-lg md:space-x-0 md:space-y-2 md:overflow-hidden"
      >
        <p class="rounded-lg bg-primaryGreen text-white p-1.5">Semua Kategori</p>
        <p>Kecamatan</p>
        <p>Kelurahan/Desa</p>
        <p>OPD/Dinas</p>
        <p>Kesehatan</p>
      </div>
    </div>
    <div class="flex-1 space-y-4">
      <div class="flex justify-between space-x-2">
        <div
          class="flex group focus-within:ring-primaryGreen ring-0 focus-within:ring-1 w-1/3 flex-1 space-x-2 rounded-lg bg-white p-2 md:flex-none"
        >
          <input
            type="search"
            class="w-full bg-transparent px-2 focus:outline-none"
            placeholder="Pencarian"
          />
          <SearchIcon class="group-focus-within:text-primaryGreen" />
        </div>
        <div
          class="flex w-fit items-center space-x-2 rounded-lg bg-primaryGreen text-white px-2"
        >
          <div class="border-r-2 py-2 pr-2">
            <SortAscendingIcon />
          </div>
          <p class="py-1 font-medium">Terbaru</p>
          <ChevronDownIcon />
        </div>
      </div>
      <div class="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
        <div
          class="h-full w-full space-y-3 rounded-lg bg-gray-50 p-4"
          v-for="n in 20"
          :key="n"
        >
          <BrandAndroidIcon />
          <p class="text-lg font-semibold leading-3">SIMRS</p>
          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
            perferendis!
          </p>
          <div class="flex space-x-2">
            <button
              class="flex items-center space-x-1 rounded ring-1 ring-primaryGreen hover:bg-primaryGreen hover:text-white py-0.5 px-2"
            >
              <span>Salin</span>
              <CopyIcon stroke-width="2" class="h-4 w-4" />
            </button>
            <button
              class="flex items-center space-x-1 rounded bg-primaryGreen text-white hover:bg-green-600 hover:shadow py-0.5 px-2"
            >
              <span>Kunjungi</span>
              <ExternalLinkIcon stroke-width="2" class="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
