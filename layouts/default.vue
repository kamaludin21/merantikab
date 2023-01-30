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
    ShareIcon
  } from 'vue-tabler-icons'
</script>

<template>
  <main class="">
    <!-- Navigasi Menu -->
    <nav class="sticky top-0 z-[100] w-full bg-yellow-500 py-4 px-10">
      <div class="flex w-full justify-between">
        <brand-abstract-icon />
        <div class="flex space-x-4">
          <a href="/beranda" class="text-lg font-medium">Beranda</a>
          <a href="/selayang-pandang" class="text-lg font-medium">Selayang Pandang</a>
          <a href="/berita" class="text-lg font-medium">Berita</a>
          <a href="/tautan-aplikasi" class="text-lg font-medium">Tautan Aplikasi</a>
          <div class="group relative">
						<a href="/informasi-publik" class="text-lg font-medium">Informasi Publik</a>
						<div class="absolute group-hover:block hidden right-0 top-0 w-max ">
							<div class="w-full mt-10 space-y-2 bg-white shadow-md text-lg font-medium p-4 rounded-lg">
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

    <!-- Main Content -->
    <slot />

    <!-- Footer Section -->
    <footer class="">
      <div class="flex w-full space-x-10 bg-gray-300 px-10 py-16">
        <div class="w-1/3 space-y-2">
          <brand-abstract-icon class="mb-4 h-24 w-24" />
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
        <div class="flex-1">
          <p class="text-lg font-bold">Menu Lain</p>
          <ul class="mt-2 space-y-2 text-lg">
            <li>PPID</li>
            <li>JDIH</li>
            <li>Publikasi</li>
            <li>Kredit</li>
            <li>Survey Peforma Situs</li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="text-lg font-bold">Tautan Kecamatan</p>
          <ul class="mt-2 space-y-2 text-lg">
            <li>Tebing Tinggi</li>
            <li>Tebing Tinggi Timur</li>
            <li>Alahair</li>
            <li>Alahir Timur</li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="text-lg font-bold">Sosial Media</p>
          <div class="mt-4 grid grid-cols-2 gap-2">
            <div class="rounded-lg bg-gray-400 py-4">
              <brand-facebook-icon class="mx-auto" />
            </div>
            <div class="rounded-lg bg-gray-400 py-4 text-center">
              <brand-instagram-icon class="mx-auto" />
            </div>
            <div class="rounded-lg bg-gray-400 py-4 text-center">
              <brand-twitter-icon class="mx-auto" />
            </div>
            <div class="rounded-lg bg-gray-400 py-4 text-center">
              <brand-youtube-icon class="mx-auto" />
            </div>
            <div class="rounded-lg bg-gray-400 py-4 text-center">
              <brand-tiktok-icon class="mx-auto" />
            </div>
            <div class="rounded-lg bg-gray-400 py-4 text-center">
              <share-icon class="mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-400 py-2 text-center">
        <p class="text-sm font-semibold">
          Hak Cipta &#64; 2023 Diskominfotik Kabupaten Kepulauan Meranti
        </p>
      </div>
    </footer>
  </main>
</template>
