<script setup>
  import { ChevronDownIcon } from 'vue-tabler-icons'
</script>
<template>
  <section
    class="flex w-full cursor-pointer justify-between overflow-x-auto whitespace-nowrap border-y-2 px-2 py-2 md:px-10"
  >
    <a
      href="/berita"
      class="mr-2 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-gray-400"
    >
      SEMUA BERITA
    </a>
    <a
      href="/berita-kategori"
      class="mr-2 rounded-full bg-gray-400 px-2 py-1.5 text-sm font-medium"
    >
      EKONOMI
    </a>
    <a
      href="/berita-kategori"
      class="mr-2 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-gray-400"
    >
      KESEHATAN
    </a>
    <a
      href="/berita-kategori"
      class="mr-2 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-gray-400"
    >
      PENDIDIKAN
    </a>
    <a
      href="/berita-kategori"
      class="mr-2 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-gray-400"
    >
      INFRASTRUKTUR
    </a>
    <a
      href="/berita-kategori"
      class="mr-2 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-gray-400"
    >
      TEKNOLOGI
    </a>
    <a
      href="/berita-kategori"
      class="mr-2 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-gray-400"
    >
      ADAT DAN BUDAYA
    </a>
    <a
      href="/berita-kategori"
      class="mr-2 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-gray-400"
    >
      PARIWISATA
    </a>
  </section>
  <div class="px-2 pt-10 md:px-10">
    <p class="text-3xl font-bold">Berita Ekonomi</p>
  </div>
  <div
    class="flex w-full flex-col space-y-4 space-x-0 px-2 py-6 md:flex-row md:space-y-0 md:space-x-4 md:px-10"
  >
    <div class="h-auto w-full md:w-3/5">
      <img
        src="../assets/images/slp.png"
        class="h-full w-full rounded-lg object-cover"
        alt=""
      />
    </div>
    <div class="grid h-44 w-full grid-rows-3 gap-4 md:w-2/5">
      <div class="h-full w-full rounded-lg bg-gray-300"></div>
      <div class="h-full w-full rounded-lg bg-gray-300"></div>
      <div class="h-full w-full rounded-lg bg-gray-300"></div>
    </div>
  </div>
  <div class="mb-16 space-y-4 px-2 md:px-10">
    <div class="flex items-center justify-between">
      <p class="text-2xl font-bold">Berita Ekonomi</p>
      <div
        class="flex items-center space-x-2 rounded-full bg-gray-200 px-4 py-1"
      >
        <p class="text-regular font-medium">Terbaru</p>
        <ChevronDownIcon />
      </div>
    </div>

    <div class="grid w-full grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
      <div class="flex w-full rounded-lg border-2" v-for="n in 9" :key="n">
        <div class="w-1/3 bg-gray-200"></div>
        <div class="w-2/3 p-4">
          <p class="text-sm text-gray-400">21 Juni 2023</p>
          <p class="text-lg font-medium leading-6">
            Lorem ipsum dolor amet consectetur adipisicing elit ipsa ber credit.
          </p>
          <a href="/berita-detail" class="font-medium">Selengkapnya</a>
        </div>
      </div>
    </div>
  </div>
</template>
