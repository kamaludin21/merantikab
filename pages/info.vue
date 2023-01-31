<script setup>
  import {
    ChevronDownIcon,
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
      <p class="text-5xl font-bold">Info dan Pengumuman</p>
      <p>
        Menyediakan koleksi informasi dan tautan aplikasi web ataupun seluler
        pemerintahan di level dinas ataupun instansi lainnya
      </p>
    </div>
    <div class="hidden px-2 md:block md:px-10">
      <img src="./../assets/images/marketing.png" class="h-auto w-44" alt="" />
    </div>
  </div>
  <div
    class="flex flex-col space-x-0 space-y-4 px-2 pb-16 md:flex-row md:space-x-4 md:space-y-0 md:px-10"
  >
    <div class="sticky top-16 h-fit w-full rounded-lg bg-gray-300 p-4 md:w-1/5">
      <p class="text-xl font-bold">Kategori</p>
      <div class="mt-1 mb-4 h-1 w-24 rounded-lg bg-gray-400"></div>
      <div
        class="flex w-full items-center space-y-0 space-x-2 overflow-x-auto whitespace-nowrap md:block md:space-x-0 md:space-y-2 md:overflow-hidden"
      >
        <p class="rounded-lg bg-gray-400 p-1.5">Semua Kategori</p>
        <p>Info</p>
        <p>Pengumuman</p>
      </div>
    </div>
    <div class="flex-1 space-y-4">
      <div class="flex justify-between space-x-2">
        <div
          class="flex w-1/3 flex-1 space-x-2 rounded-lg bg-gray-200 p-2 md:flex-none"
        >
          <input
            type="text"
            class="w-full bg-transparent px-2 focus:outline-none"
            placeholder="Pencarian"
          />
          <SearchIcon />
        </div>
        <div
          class="flex w-fit items-center space-x-2 rounded-lg bg-gray-300 px-2"
        >
          <div class="border-r-2 py-2 pr-2">
            <SortAscendingIcon />
          </div>
          <p class="py-1 font-medium">Terbaru</p>
          <ChevronDownIcon />
        </div>
      </div>
      <div class="space-y-4">
        <div
          class="h-full w-full space-y-2 rounded-lg bg-gray-300 p-4"
          v-for="n in 10"
          :key="n"
        >
          <div class="w-fit rounded-full bg-gray-400 px-2">
            <p class="text-sm font-medium">INFO</p>
          </div>
          <p class="text-lg font-semibold leading-6 md:leading-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, nam.
          </p>
          <p class="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            ex eveniet recusandae itaque illo aliquam, reiciendis ipsam totam
            unde voluptatibus.
          </p>
          <button
            class="flex items-center space-x-1 rounded bg-gray-400 py-0.5 px-2"
          >
            <span>Selengkapnya</span>
            <ExternalLinkIcon stroke-width="2" class="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
