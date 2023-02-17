<script setup>
  import {
    BuildingBankIcon,
    PhoneIcon,
    MailIcon,
    BrandFacebookIcon,
    BrandInstagramIcon,
    BrandYoutubeIcon,
    BrandTwitterIcon,
    BrandTiktokIcon,
    Menu2Icon,
    ChevronDownIcon,
    XIcon
  } from 'vue-tabler-icons'
  import { ref, onMounted, onUnmounted } from 'vue'

  let navbar = ref(false)

  const headerClass = ref(false)

  function handleScroll() {
    if (window.scrollY > 50) {
      headerClass.value = true
    } else {
      headerClass.value = false
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<template>
  <main class="bg-slate-200">
    <!-- Navigasi Menu -->
    <!-- bg-white bg-opacity-20 backdrop-blur-lg -->
		<!-- :class="
        headerClass
          ? 'bg-white shadow-lg'
          : 'bg-white shadow-none backdrop-blur-sm md:bg-opacity-0'
      " -->
		
    <nav
		:class="
        headerClass
          ? 'shadow-lg'
          : 'shadow-none'
      "
      class="bg-white sticky top-0 z-50 w-full py-4 px-2 duration-300 md:px-10 lg:px-44"
    >
      <div class="flex w-full items-center justify-between">
        <div class="h-fit">
          <img
            src="./../assets/images/logo_kab.png"
            class="h-10 w-auto"
            alt=""
          />
        </div>
        <button type="button" @click="navbar = !navbar" class="block md:hidden">
          <Menu2Icon v-if="!navbar" class="h-10 w-10" stroke-width="2" />
          <XIcon v-else="navbar" class="h-10 w-10" stroke-width="2" />
        </button>
        <div
          :class="navbar ? 'block shadow-lg' : 'hidden shadow-none'"
          class="absolute left-0 top-12 my-4 flex h-fit w-full flex-col space-x-0 space-y-4 border-t bg-white p-2 py-4 text-gray-600 shadow-lg md:static md:top-0 md:my-0 md:flex md:w-fit md:flex-row md:space-y-0 md:space-x-4 md:border-none md:bg-transparent md:bg-opacity-0 md:p-0 md:py-0 md:shadow-none"
        >
          <NuxtLink
            href="/"
            @click="navbar = !navbar"
            class="w-min-content w-min-content hover-link relative w-fit py-2 text-xl font-medium transition-all md:text-base"
          >
            Beranda
          </NuxtLink>
          <NuxtLink
            href="/selayang-pandang"
            @click="navbar = !navbar"
            class="w-min-content w-min-content hover-link relative w-fit py-2 text-xl font-medium transition-all md:text-base"
          >
            Selayang Pandang
          </NuxtLink>
          <NuxtLink
            href="/berita"
            @click="navbar = !navbar"
            class="w-min-content w-min-content hover-link relative w-fit py-2 text-xl font-medium transition-all md:text-base"
          >
            Berita
          </NuxtLink>
          <NuxtLink
            href="/tautan-aplikasi"
            @click="navbar = !navbar"
            class="w-min-content w-min-content hover-link relative w-fit py-2 text-xl font-medium transition-all md:text-base"
          >
            Tautan Aplikasi
          </NuxtLink>
          <div class="group relative">
            <div class="flex items-center space-x-1">
              <NuxtLink
                href="javascript:void(0)"
                class="w-min-content w-min-content hover-link relative w-fit py-2 text-xl font-medium transition-all md:text-base"
              >
                Informasi Publik
              </NuxtLink>
              <ChevronDownIcon
                class="mt-1 h-6 w-6 text-gray-500 duration-300 group-hover:rotate-180 group-hover:text-green-600"
                stroke-width="2.2"
              />
            </div>
            <div
              class="static right-0 top-2 -z-50 hidden w-max bg-transparent group-hover:block md:absolute"
            >
              <div
                class="mt-0 w-full space-y-2 rounded-lg bg-none p-4 text-lg font-medium shadow-none md:mt-10 md:border-2 md:bg-white md:shadow-md"
              >
                <p>
                  <NuxtLink
                    class="w-min-content w-min-content hover-link relative w-fit py-2 text-xl font-medium transition-all md:text-base"
                    href="/info"
                    @click="navbar = !navbar"
                  >
                    Info dan Pengumuman
                  </NuxtLink>
                </p>
                <p>
                  <NuxtLink
                    class="w-min-content w-min-content hover-link relative w-fit py-2 text-xl font-medium transition-all md:text-base"
                    href="/publikasi-dokumen"
                    @click="navbar = !navbar"
                  >
                    Publikasi Dokumen
                  </NuxtLink>
                </p>
                <p>
                  <NuxtLink
                    class="w-min-content w-min-content hover-link relative w-fit py-2 text-xl font-medium transition-all md:text-base"
                    href="/galeri"
                    @click="navbar = !navbar"
                  >
                    Galeri Foto dan Video
                  </NuxtLink>
                </p>
                <!-- <p>
                  <NuxtLink
                    class="w-min-content w-min-content hover-link relative w-fit py-2 text-xl font-medium transition-all md:text-base"
                    href="/agenda-dan-acara"
                  >
                    Agenda dan Acara
                  </NuxtLink>
                </p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div
      @click="navbar = !navbar"
      v-if="navbar"
      class="absolute -z-10 h-screen w-screen bg-gray-800/80 md:hidden"
    ></div>

    <!-- Main Content -->
    <slot />

    <!-- Footer Section -->
    <footer class="border-t-4 border-primaryGreen bg-white px-2 md:px-10 lg:px-44">
      <div
        class="flex w-full flex-col justify-between space-x-0 space-y-4 py-6 text-white md:flex-row md:space-y-0 md:space-x-10 md:py-10"
      >
        <div class="w-full space-y-2 md:w-1/3">
          <div class="mb-4 h-16 w-full md:mx-0">
            <img
              src="./../assets/images/logo_kab.png"
              class="h-full w-auto"
              alt=""
            />
          </div>
          <div class="flex space-x-4">
            <div>
              <building-bank-icon class="h-6 w-6 text-slate-700" />
            </div>
            <p class="font-medium leading-6 text-slate-600">
              Jalan Dorak, Kec. Tebing Tinggi, Selatpanjang Kab. Kepulauan
              Meranti 24753
            </p>
          </div>
          <div class="flex space-x-4">
            <div><phone-icon class="h-6 w-6 text-slate-600" /></div>
            <p class="font-medium text-slate-600">+62 854 293849</p>
          </div>
          <div class="flex space-x-4">
            <div><mail-icon class="h-6 w-6 text-slate-600" /></div>
            <p class="font-medium text-slate-600">
              diskominfotik@merantikab.go.id
            </p>
          </div>
          <div class="flex flex-wrap justify-start space-x-2 pt-2">
            <div
              class="group rounded-xl bg-white p-2 text-slate-600 ring-1 ring-gray-800 duration-300 hover:bg-blue-600 hover:text-slate-200 hover:ring-0 hover:ring-green-600"
            >
              <brand-facebook-icon class="mx-auto stroke-2" />
            </div>
            <div
              class="group rounded-xl bg-white from-pink-500 via-red-500 to-yellow-500 p-2 text-slate-600 ring-1 ring-gray-800 duration-300 hover:bg-gradient-to-l hover:text-slate-200 hover:ring-0 hover:ring-green-600"
            >
              <brand-instagram-icon class="mx-auto stroke-2" />
            </div>
            <div
              class="group rounded-xl bg-white p-2 text-slate-600 ring-1 ring-gray-800 duration-300 hover:bg-sky-600 hover:text-slate-200 hover:ring-0 hover:ring-green-600"
            >
              <brand-twitter-icon class="mx-auto stroke-2" />
            </div>
            <div
              class="group rounded-xl bg-white p-2 text-slate-600 ring-1 ring-gray-800 duration-300 hover:bg-red-600 hover:text-slate-200 hover:ring-0 hover:ring-green-600"
            >
              <brand-youtube-icon class="mx-auto stroke-2" />
            </div>
            <div
              class="group rounded-xl bg-white p-2 text-slate-600 ring-1 ring-gray-800 duration-300 hover:bg-black hover:text-slate-200 hover:ring-0 hover:ring-green-600"
            >
              <brand-tiktok-icon class="mx-auto stroke-2" />
            </div>
          </div>
        </div>
        <div class="flex flex-1 justify-start space-x-20 md:justify-end">
          <div class="w-content">
            <p class="text-lg font-medium text-slate-800">Menu Lain</p>
            <ul class="mt-2 space-y-2 text-lg text-slate-600">
              <li>
                <a href="#" class="hover:text-slate-700 hover:underline">
                  PPID
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-slate-700 hover:underline">
                  JDIH
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-slate-700 hover:underline">
                  Publikasi
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-slate-700 hover:underline">
                  Kredit
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-slate-700 hover:underline">
                  Survey Peforma Situs
                </a>
              </li>
            </ul>
          </div>
          <div class="w-fit">
            <p class="text-lg font-medium text-slate-800">Tautan Kecamatan dan Desa</p>
            <ul class="mt-2 space-y-2 text-lg text-slate-600">
              <li>
                <a href="desa-sialangpasung.merantikab.go.id" class="hover:text-slate-700 hover:underline">
                  Desa Sialang Pasung
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-slate-700 hover:underline">
                  Tebing Tinggi
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-slate-700 hover:underline">
                  Tebing Tinggi Timur
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-slate-700 hover:underline">
                  Alahair
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-slate-700 hover:underline">
                  Alahir Timur
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-400 py-4 text-center text-slate-800">
        <p class="text-base font-semibold">
          Hak Cipta &#64; 2023 Diskominfotik Kabupaten Kepulauan Meranti
        </p>
      </div>
    </footer>
  </main>
</template>

<style>
  a.router-link-exact-active {
    @apply text-green-800 after:absolute after:bottom-0 after:right-0 after:z-0 after:h-1 after:w-full after:rounded-full after:bg-green-800;
  }
  .hover-link {
    @apply before:absolute before:bottom-0 before:right-0 before:z-10 before:h-1 before:w-0 before:rounded-full before:transition-all before:duration-500 hover:text-green-700 hover:before:left-0 hover:before:w-full hover:before:bg-primaryGreen;
  }
</style>
