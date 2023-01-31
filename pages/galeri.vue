<script setup>
  import {
    ChevronDownIcon,
    PhotoIcon,
    SearchIcon,
    SortAscendingIcon
  } from 'vue-tabler-icons'
</script>

<template>
  <div
    class="flex h-fit w-full flex-col items-start justify-between px-2 py-16 md:flex-row md:items-center md:px-10"
  >
	<div class="w-full md:w-1/3 space-y-4">
      <p class="text-5xl font-bold">Galeri Foto dan Video</p>
      <p>
        Koleksi media foto dan video kegiatan acara pemda ataupun masyarakat
        kepulauan meranti
      </p>
    </div>
    <div class="hidden px-2 md:block md:px-10">
      <img src="./../assets/images/gallery.png" class="h-auto w-44" alt="" />
    </div>
  </div>
  <div
    class="flex flex-col space-x-0 space-y-4 px-2 pb-16 md:flex-row md:space-x-4 md:space-y-0 md:px-10"
  >
    <div class="static md:sticky top-16 h-fit w-full rounded-lg bg-gray-300 p-4 md:w-1/5">
      <p class="text-xl font-bold">Kategori</p>
      <div class="mt-1 mb-4 h-1 w-24 rounded-lg bg-gray-400"></div>
      <div
        class="flex w-full items-center space-y-0 space-x-2 overflow-x-auto whitespace-nowrap md:block md:space-x-0 md:space-y-2 md:overflow-hidden"
      >
        <p class="rounded-lg bg-gray-400 p-1.5">Semua Kategori</p>
        <p>Acara Budaya</p>
        <p>Keagamaan</p>
        <p>Pemerintah</p>
        <p>Nasional</p>
        <p>Festival</p>
      </div>
    </div>
    <div class="flex-1 space-y-4">
      <div class="flex space-x-2 justify-between">
        <div class="flex flex-1 md:flex-none w-1/3 space-x-2 rounded-lg bg-gray-200 p-2">
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
      <div class="flex h-full items-start">
        <div class="ml-1 mt-2 mr-3 self-stretch w-0.5 bg-gray-400"></div>
        <div class="h-full flex-1 space-y-2">
          <div class="-ml-5 flex items-center space-x-2">
            <div class="h-4 w-4 rounded-full bg-black"></div>
            <p class="text-lg font-bold">21 Juni 2023</p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            <div
              class="h-32 w-full space-y-3 rounded-lg bg-gray-300 p-4"
              v-for="n in 6"
              :key="n"
            >
              <PhotoIcon />
            </div>
          </div>
          <div class="-ml-5 flex items-center space-x-2">
            <div class="h-4 w-4 rounded-full bg-black"></div>
            <p class="text-lg font-bold">1 Juni 2023</p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            <div
              class="h-32 w-full space-y-3 rounded-lg bg-gray-300 p-4"
              v-for="n in 5"
              :key="n"
            >
              <PhotoIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
