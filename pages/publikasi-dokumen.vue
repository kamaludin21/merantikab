<script setup>
  import {
    ChevronDownIcon,
    DownloadIcon,
    EyeIcon,
    SearchIcon,
    SortAscendingIcon
  } from 'vue-tabler-icons'
</script>

<template>
  <div class="flex h-80 w-full items-center justify-between px-10 py-16">
    <div class="w-1/3 space-y-4">
      <p class="text-5xl font-bold">Publikasi Dokumen</p>
      <p>
        Jelajahi berbagai publikasi dokumen yang disediakan oleh pemda untuk
        masyarakat umum sebagai bentuk transparansi
      </p>
    </div>
    <div class="px-10">
      <img src="./../assets/images/archive.png" class="h-auto w-44" alt="" />
    </div>
  </div>
  <div class="flex space-x-4 px-10 pb-16">
    <div class="sticky top-16 h-fit w-1/5 rounded-lg bg-gray-300 p-4">
      <p class="text-xl font-bold">Kategori</p>
      <div class="mt-1 mb-4 h-1 w-24 rounded-lg bg-gray-400"></div>
      <div class="space-y-3">
        <p>Semua Kategori</p>
        <p>Produk Hukum</p>
        <p>Laporan Pemda</p>
        <p>Open Data</p>
        <p>Kesehatan</p>
        <p>Ekonomi</p>
      </div>
    </div>
    <div class="flex-1 space-y-4">
      <div class="flex justify-between">
        <div class="flex w-1/3 space-x-2 rounded-lg bg-gray-200 p-2">
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
      <div class="grid space-y-4">
        <div
          class="flex space-x-4 rounded-lg bg-gray-100 p-4"
          v-for="n in 6"
          :key="n"
        >
          <div class="w-1/12">
            <img
              src="./../assets/images/pdf.png"
              class="h-auto w-full object-cover"
              alt=""
            />
          </div>
          <div class="space-y-2">
            <div class="w-fit rounded-lg bg-gray-300 p-1">
              <p class="text-sm font-medium">Produk Hukum</p>
            </div>
            <p class="text-lg font-semibold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
              vero!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              facere ipsum error sit dolorem fugiat nostrum aspernatur officia
              excepturi. Beatae!
            </p>
            <div class="flex space-x-2">
              <button class="flex space-x-1 rounded-lg bg-gray-300 px-3 py-1">
                <EyeIcon />
                <span class="font-medium">Lihat</span>
              </button>
              <button class="flex space-x-1 rounded-lg bg-gray-300 px-3 py-1">
                <DownloadIcon />
                <span class="font-medium">Unduh</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
