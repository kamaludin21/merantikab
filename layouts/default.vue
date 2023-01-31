<script setup>
  import {
    BrandAbstractIcon,
    BuildingBankIcon,
    PhoneIcon,
    MailIcon,
    BrandFacebookIcon,
    BrandInstagramIcon,
    BrandYoutubeIcon,
    BrandTwitterIcon,
    BrandTiktokIcon,
    ShareIcon,
    Menu2Icon,
    ChevronDownIcon,
    XIcon
  } from 'vue-tabler-icons'
  import { ref } from 'vue'
  let navbar = ref(false)
</script>

<template>
  <main class="">
    <!-- Navigasi Menu -->
    <nav class="sticky top-0 z-50 w-full bg-yellow-500 py-3 px-2 md:px-10">
      <div class="flex w-full items-center justify-between">
        <div>
          <img
            src="./../assets/images/Lambang_kab_Kepulauan_Meranti.png"
            class="h-12 w-auto"
            alt=""
          />
        </div>
        <button @click="navbar = !navbar" class="block md:hidden">
          <Menu2Icon v-if="!navbar" class="h-10 w-10" stroke-width="2" />
          <XIcon v-else="navbar" class="h-10 w-10" stroke-width="2" />
        </button>
        <div
          :class="navbar ? 'block' : 'hidden'"
          class="absolute left-0 top-14 my-4 flex h-fit w-full flex-col space-x-0 space-y-4 border-t p-2 py-4 bg-zinc-800 md:bg-transparent text-gray-900 shadow-lg md:static md:top-0 md:my-0 md:flex md:w-fit md:flex-row md:space-y-0 md:space-x-4 md:border-none md:p-0 md:py-0 md:shadow-none"
        >
          <a href="/beranda" class="text-xl font-medium md:text-lg">Beranda</a>
          <a href="/selayang-pandang" class="text-xl font-medium md:text-lg">
            Selayang Pandang
          </a>
          <a href="/berita" class="text-xl font-medium md:text-lg">Berita</a>
          <a href="/tautan-aplikasi" class="text-xl font-medium md:text-lg">
            Tautan Aplikasi
          </a>
          <div class="group relative">
            <div class="flex items-center space-x-2">
              <a
                href="javascript:void(0)"
                class="text-xl font-medium md:text-lg"
              >
                Informasi Publik
              </a>
              <ChevronDownIcon class="h-7 w-7 stroke-2" />
            </div>
            <div
              class="static right-0 top-0 hidden w-max border-l border-slate-800 md:border-none group-hover:block md:absolute"
            >
              <div
                class="mt-0 w-full space-y-2 rounded-lg bg-none p-4 text-lg font-medium shadow-none md:mt-10 md:bg-white md:shadow-md"
              >
                <p><a href="/info">Info dan Pengumuman</a></p>
                <p><a href="/publikasi-dokumen">Publikasi Dokumen</a></p>
                <p><a href="/galeri">Galeri Foto dan Video</a></p>
                <p><a href="#">Agenda dan Acara</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div
      @click="navbar = !navbar"
      v-if="navbar"
      class="absolute md:hidden h-screen w-screen bg-gray-800/80"
    ></div>

    <!-- Main Content -->
    <slot />

    <!-- Footer Section -->
    <footer class="">
      <!-- <div class="flex w-full space-x-10 bg-gray-300 px-10 py-16"> -->
      <div
        class="flex w-full flex-col space-x-0 space-y-4 bg-gray-400 px-2 py-6 md:flex-row md:space-y-0 md:space-x-10 md:px-10 md:py-16"
      >
        <div class="w-full space-y-2 md:w-1/3">
          <div class="mx-auto mb-4 h-24 w-24 md:mx-0">
						<img src="./../assets/images/Lambang_kab_Kepulauan_Meranti.png" class="w-auto h-full" alt="">
					</div>
          <div class="flex space-x-4">
            <div>
              <building-bank-icon class="h-6 w-6" />
            </div>
            <p class="font-medium leading-6">
              Jalan Dorak, Kec. Tebing Tinggi, Selatpanjang Kab. Kepulauan
              Meranti 24753
            </p>
          </div>
          <div class="flex space-x-4">
            <div><phone-icon class="h-6 w-6" /></div>
            <p class="font-medium">+62 854 293849</p>
          </div>
          <div class="flex space-x-4">
            <div><mail-icon class="h-6 w-6" /></div>
            <p class="font-medium">diskominfotik@merantikab.go.id</p>
          </div>
        </div>
        <div class="flex flex-1 space-x-2">
          <div class="flex-1">
            <p class="text-lg font-bold">Menu Lain</p>
            <ul class="mt-2 space-y-2 text-lg">
              <li><a href="#" class="hover:underline">PPID</a></li>
              <li><a href="#" class="hover:underline">JDIH</a></li>
              <li><a href="#" class="hover:underline">Publikasi</a></li>
              <li><a href="#" class="hover:underline">Kredit</a></li>
              <li><a href="#" class="hover:underline">Survey Peforma Situs</a></li>
            </ul>
          </div>
          <div class="flex-1">
            <p class="text-lg font-bold">Tautan Kecamatan</p>
            <ul class="mt-2 space-y-2 text-lg">
              <li><a href="#" class="hover:underline">Tebing Tinggi</a></li>
              <li><a href="#" class="hover:underline">Tebing Tinggi Timur</a></li>
              <li><a href="#" class="hover:underline">Alahair</a></li>
              <li><a href="#" class="hover:underline">Alahir Timur</a></li>
            </ul>
          </div>
        </div>
        <div class="flex-1">
          <p class="text-lg font-bold">Sosial Media</p>
          <div class="mt-4 grid grid-cols-3 gap-2 md:grid-cols-2">
            <div class="rounded-lg bg-yellow-600 text-slate-800 py-4">
              <brand-facebook-icon class="mx-auto" />
            </div>
            <div class="rounded-lg bg-yellow-600 text-slate-800 py-4 text-center">
              <brand-instagram-icon class="mx-auto" />
            </div>
            <div class="rounded-lg bg-yellow-600 text-slate-800 py-4 text-center">
              <brand-twitter-icon class="mx-auto" />
            </div>
            <div class="rounded-lg bg-yellow-600 text-slate-800 py-4 text-center">
              <brand-youtube-icon class="mx-auto" />
            </div>
            <div class="rounded-lg bg-yellow-600 text-slate-800 py-4 text-center">
              <brand-tiktok-icon class="mx-auto" />
            </div>
            <div class="rounded-lg bg-yellow-600 text-slate-800 py-4 text-center">
              <share-icon class="mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <div class="bg-yellow-600 text-slate-800 py-2 text-center">
        <p class="text-sm font-semibold">
          Hak Cipta &#64; 2023 Diskominfotik Kabupaten Kepulauan Meranti
        </p>
      </div>
    </footer>
  </main>
</template>
