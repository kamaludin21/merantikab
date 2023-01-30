<script setup>
  import { ChevronDownIcon } from 'vue-tabler-icons'
</script>
<template>
  <section class="flex cursor-pointer justify-between border-y-2 px-10 py-2">
    <a
      href="/berita"
      class="rounded-full px-4 py-1.5 text-sm font-medium hover:bg-gray-400"
    >
      SEMUA BERITA
    </a>
    <a
      href="/berita-kategori"
      class="rounded-full bg-gray-400 px-4 py-1.5 text-sm font-medium"
    >
      EKONOMI
    </a>
    <a
      href="/berita-kategori"
      class="rounded-full px-4 py-1.5 text-sm font-medium hover:bg-gray-400"
    >
      KESEHATAN
    </a>
    <a
      href="/berita-kategori"
      class="rounded-full px-4 py-1.5 text-sm font-medium hover:bg-gray-400"
    >
      PENDIDIKAN
    </a>
    <a
      href="/berita-kategori"
      class="rounded-full px-4 py-1.5 text-sm font-medium hover:bg-gray-400"
    >
      INFRASTRUKTUR
    </a>
    <a
      href="/berita-kategori"
      class="rounded-full px-4 py-1.5 text-sm font-medium hover:bg-gray-400"
    >
      TEKNOLOGI
    </a>
    <a
      href="/berita-kategori"
      class="rounded-full px-4 py-1.5 text-sm font-medium hover:bg-gray-400"
    >
      ADAT DAN BUDAYA
    </a>
    <a
      href="/berita-kategori"
      class="rounded-full px-4 py-1.5 text-sm font-medium hover:bg-gray-400"
    >
      PARIWISATA
    </a>
  </section>
  <div class="px-10 pt-10">
    <p class="text-3xl font-bold">Berita Ekonomi</p>
  </div>
  <div class="flex w-full space-x-4 px-10 py-6">
    <div class="h-auto w-3/5">
      <img
        src="../assets/images/slp.png"
        class="h-full w-full rounded-lg object-cover"
        alt=""
      />
    </div>
    <div class="grid w-2/5 grid-rows-3 gap-4">
      <div class="h-full w-full rounded-lg bg-gray-300"></div>
      <div class="h-full w-full rounded-lg bg-gray-300"></div>
      <div class="h-full w-full rounded-lg bg-gray-300"></div>
    </div>
  </div>
  <div class="mb-16 space-y-4 px-10">
    <div class="flex items-center justify-between">
      <p class="text-2xl font-bold">Berita Ekonomi</p>
      <div
        class="flex items-center space-x-2 rounded-full bg-gray-200 px-4 py-1"
      >
        <p class="text-regular font-medium">Terbaru</p>
        <ChevronDownIcon />
      </div>
    </div>

    <div class="grid w-full grid-cols-3 gap-4">
      <div class="flex rounded-lg border-2" v-for="n in 9" :key="n">
        <div class="w-1/3 bg-gray-200"></div>
        <div class="w-2/3 p-4">
					<p class="text-gray-400 text-sm">21 Juni 2023</p>
					<p class="text-lg font-medium leading-6">Lorem ipsum dolor amet consectetur adipisicing elit ipsa ber credit.</p>
					<a href="#" class="font-medium">Selengkapnya</a>
				</div>
      </div>
    </div>
  </div>
</template>
