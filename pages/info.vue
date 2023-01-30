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
  <div class="flex h-80 w-full items-center justify-between px-10 py-16">
    <div class="w-1/3 space-y-4">
      <p class="text-5xl font-bold">Info dan Pengumuman</p>
      <p>
        Menyediakan koleksi informasi dan tautan aplikasi web ataupun seluler
        pemerintahan di level dinas ataupun instansi lainnya
      </p>
    </div>
    <div class="px-10">
      <img src="./../assets/images/marketing.png" class="h-auto w-44" alt="" />
    </div>
  </div>
  <div class="flex space-x-4 px-10 pb-16">
    <div class="w-1/5 rounded-lg h-fit sticky top-16 bg-gray-300 p-4">
      <p class="text-xl font-bold">Kategori</p>
      <div class="mt-1 mb-4 h-1 w-24 rounded-lg bg-gray-400"></div>
      <div class="space-y-2">
        <p>Semua Kategori</p>
        <p>Info</p>
        <p>Pengumuman</p>
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
        <div class="flex w-fit items-center space-x-2 rounded-lg bg-gray-300 px-2">
          <div class="border-r-2 py-2 pr-2">
            <SortAscendingIcon />
          </div>
          <p class="py-1 font-medium">Terbaru</p>
          <ChevronDownIcon />
        </div>
      </div>
      <div class=" space-y-4">
        <div class="h-full w-full bg-gray-300 p-4 space-y-2 rounded-lg" v-for="n in 20" :key="n">
					<div class="bg-gray-400 w-fit px-2 rounded-full">
						<p class="text-sm font-medium">INFO</p>
					</div>
					<p class="text-lg font-semibold leading-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, nam.</p>
					<p class="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ex eveniet recusandae itaque illo aliquam, reiciendis ipsam totam unde voluptatibus.</p>
					<button class="flex bg-gray-400 space-x-1 py-0.5 px-2 items-center rounded">
							<span>Selengkapnya</span>
							<ExternalLinkIcon stroke-width="2" class="w-4 h-4"/>
						</button>
        </div>
      </div>
    </div>
  </div>
</template>
