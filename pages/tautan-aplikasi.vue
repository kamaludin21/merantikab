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
  <div class="flex flex-col md:flex-row h-fit w-full items-start md:items-center justify-between px-2 md:px-10 py-16">
    <div class="w-full md:w-1/3 space-y-4">
      <p class="text-5xl font-bold">Tautan Aplikasi</p>
      <p>
        Menyediakan koleksi informasi dan tautan aplikasi web ataupun seluler
        pemerintahan di level dinas ataupun instansi lainnya
      </p>
    </div>
    <div class="hidden md:block px-2 md:px-10">
      <img src="./../assets/images/categories.png" class="h-auto w-44" alt="" />
    </div>
  </div>
  <div class="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 px-2 md:px-10 pb-16">
    <div class="w-full md:w-1/5 rounded-lg h-fit sticky top-16 bg-gray-300 p-4">
      <p class="text-xl font-bold">Kategori</p>
      <div class="mt-1 mb-4 h-1 w-24 rounded-lg bg-gray-400"></div>
      <div class="space-y-0 space-x-2 md:space-x-0 md:space-y-2 w-full overflow-x-auto md:overflow-hidden flex md:block items-center whitespace-nowrap">
        <p class="bg-gray-400 p-1.5 rounded-lg">Semua Kategori</p>
        <p>Kecamatan</p>
        <p>Kelurahan/Desa</p>
        <p>OPD/Dinas</p>
        <p>Kesehatan</p>
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
        <div class="flex w-fit items-center space-x-2 rounded-lg bg-gray-300 px-2">
          <div class="border-r-2 py-2 pr-2">
            <SortAscendingIcon />
          </div>
          <p class="py-1 font-medium">Terbaru</p>
          <ChevronDownIcon />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
        <div class="h-full w-full bg-gray-300 p-4 space-y-3 rounded-lg" v-for="n in 20" :key="n">
          <BrandAndroidIcon/>
					<p class="text-lg font-semibold leading-3">SIMRS</p>
					<p class="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, perferendis!</p>
					<div class="flex space-x-2">
						<button class="flex bg-gray-400 space-x-1 py-0.5 px-2 items-center rounded">
							<span>Salin</span>
							<CopyIcon stroke-width="2" class="w-4 h-4"/>
						</button>
						<button class="flex bg-gray-400 space-x-1 py-0.5 px-2 items-center rounded">
							<span>Kunjungi</span>
							<ExternalLinkIcon stroke-width="2" class="w-4 h-4"/>
						</button>
					</div>
        </div>
      </div>
    </div>
  </div>
</template>
