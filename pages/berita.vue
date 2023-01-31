<script setup></script>
<template>
  <section
    class="flex w-full cursor-pointer justify-between overflow-x-auto whitespace-nowrap border-y-2 px-2 py-2 md:px-10"
  >
    <a
      href="/berita"
      class="mr-2 rounded-full bg-gray-400 px-4 py-1.5 text-sm font-medium"
    >
      SEMUA BERITA
    </a>
    <a
      href="/berita-kategori"
      class="mr-2 rounded-full px-2 py-1.5 text-sm font-medium hover:bg-gray-400"
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
    <p class="text-3xl font-bold">Semua Berita</p>
  </div>
  <div
    class="flex w-full flex-col space-y-2 space-x-0 px-2 py-6 md:flex-row md:space-y-0 md:space-x-4 md:px-10"
  >
    <div class="w-full md:w-3/5">
      <img
        src="../assets/images/slp.png"
        class="h-full w-full rounded-lg object-cover"
        alt=""
      />
    </div>
    <div class="w-full rounded-lg border-2 border-gray-400 p-2 md:w-2/5">
      <p class="text-2xl font-semibold">Berita Terbaru</p>
      <div class="grid space-y-3">
        <div class="flex space-x-1" v-for="n in 4" :key="n">
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
  <div class="space-y-6 px-2 py-10 md:px-10">
    <p class="text-3xl font-bold">Terbaru di Semua Berita</p>
    <div class="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
      <div
        class="grid h-44 w-full justify-items-center space-y-2 rounded-lg bg-gray-200 p-4"
        v-for="n in 6"
        :key="n"
      ></div>
    </div>
  </div>
  <div class="space-y-6 px-2 py-10 md:px-10">
    <p class="text-3xl font-bold">Terpopuler di Semua Berita</p>
    <div class="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
      <div
        class="grid h-44 w-full justify-items-center space-y-2 rounded-lg bg-gray-200 p-4"
        v-for="n in 6"
        :key="n"
      ></div>
    </div>
  </div>
</template>
