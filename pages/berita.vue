<script setup>
  import {
    ArrowUpRightIcon,
    SearchIcon
  } from 'vue-tabler-icons'
</script>
<template>
  <div class="px-2 pt-10 md:px-10">
    <p class="text-3xl font-semibold">Berita Kab. Kepulauan Meranti</p>
    <p class="text-base">
      Informasi terbaru dan akurat dari pemerintah untuk masyarakat
    </p>
  </div>

  <div
    class="group pointer-events-none mx-2 my-6 flex items-center space-x-2 rounded-lg bg-white px-4 shadow-lg ring-0 ring-primaryGreen duration-300 focus-within:ring-1 md:mx-10"
  >
    <SearchIcon
      class="h-8 w-8 text-slate-400 group-focus-within:text-primaryGreen"
    />
    <input
      type="search"
      class="pointer-events-auto w-full bg-transparent py-3 pr-4 text-xl focus:outline-none"
      placeholder="Pencarian"
    />
  </div>

  <div class="mt-6 border-b w-screen overflow-x-auto border-slate-600">
    <div
      class=" flex space-x-4 overflow-x-auto whitespace-nowrap px-2 md:px-10"
    >
      <div class="border-b-4 border-slate-800 pb-1">
        <a href="/" class="text-lg font-normal text-slate-800">
          Berita Terbaru
        </a>
      </div>
      <div class="px-2 hover:bg-gray-300">
        <a
          href="/"
          class="text-lg font-normal text-slate-600 hover:text-slate-800"
        >
          Terpopuler
        </a>
      </div>
      <div class="px-2 hover:bg-gray-300">
        <a
          href="/"
          class="text-lg font-normal text-slate-600 hover:text-slate-800"
        >
          Lingkungan dan Kesehatan
        </a>
      </div>
      <div class="px-2 hover:bg-gray-300">
        <a
          href="/"
          class="text-lg font-normal text-slate-600 hover:text-slate-800"
        >
          Olahraga
        </a>
      </div>
      <div class="px-2 hover:bg-gray-300">
        <a
          href="/"
          class="text-lg font-normal text-slate-600 hover:text-slate-800"
        >
          Pendidikan dan Teknologi
        </a>
      </div>
      <div class="px-2 hover:bg-gray-300">
        <a
          href="/"
          class="text-lg font-normal text-slate-600 hover:text-slate-800"
        >
          Religi
        </a>
      </div>
      <div class="px-2 hover:bg-gray-300">
        <a
          href="/"
          class="text-lg font-normal text-slate-600 hover:text-slate-800"
        >
          Sosial dan Budaya
        </a>
      </div>
      <div class="px-2 hover:bg-gray-300">
        <a
          href="/"
          class="text-lg font-normal text-slate-600 hover:text-slate-800"
        >
          Transportasi
        </a>
      </div>
    </div>
  </div>
  <div class="space-y-10 px-2 md:px-10 py-6">
    <div class="flex flex-col md:flex-row h-fit md:h-80 w-full space-x-0 md:space-x-6">
      <div class="h-full w-full md:w-3/5 ">
        <img
          src="./../assets/images/1.jpg"
          class="h-full w-full rounded-2xl object-cover"
          alt=""
        />
      </div>
      <div class="flex h-full w-full md:w-2/5 flex-col justify-center space-y-2">
        <p class="text-sm font-medium text-gray-500">
          12 Juni 2023 | Pendidikan
        </p>
        <a
          href="#"
          class="text-2xl font-semibold text-slate-800 hover:cursor-pointer hover:text-primaryGreen hover:underline"
        >
          Silaturahmi ke IPDN, Bupati Adil Minta Kabupaten Dikasi Kuota
        </a>

        <p class="text-xl font-normal text-slate-600 line-clamp-3">
          Ada beberapa hal yang disampaikan dalam diskusi santai tersebut.
          Diantaranya, permintaan kuota bagi anak-anak Kepulauan Meranti agar
          bisa masuk perguruan tinggi di bawah Kementerian Dalam Negeri itu.
        </p>
        <a
          href="#"
          class="group flex w-fit items-center space-x-0 rounded-full pb-1.5 pt-1 text-lg font-medium text-primaryGreen duration-200 hover:bg-primaryGreen hover:px-4 hover:text-slate-100 hover:shadow-lg"
        >
          <span class="duration-200 group-hover:mr-1">Baca Selengkapnya</span>
          <ArrowUpRightIcon
            class="mt-1 h-6 w-6 duration-300 group-hover:rotate-45"
          />
        </a>
      </div>
    </div>

    <div class="grid w-full grid-cols-1 md:grid-cols-3 gap-10">
      <div
        class="flex h-80 w-full flex-col rounded-xl bg-white duration-300 hover:scale-105 hover:shadow-xl"
        v-for="n in 9"
        :key="n"
      >
        <div class="h-1/4 w-full flex-1">
          <!-- Gambar -->
          <img
            src="./../assets/images/3.jpg"
            class="h-full w-full rounded-t-xl object-cover"
            alt=""
          />
        </div>
        <!-- Desc -->
        <div class="mt-auto h-fit space-y-1 p-4">
          <p class="text-sm text-gray-600">21 Juni 2023 | Pendidikan</p>
          <a
            href="#"
            class="text-lg font-semibold line-clamp-2 hover:cursor-pointer hover:text-primaryGreen hover:underline"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
            veritatis?
          </a>
          <a
            href="#"
            class="group flex w-fit items-center space-x-0 rounded-full pb-1 pt-0.5 text-sm font-medium text-primaryGreen duration-200 hover:bg-primaryGreen hover:px-3 hover:text-slate-100 hover:shadow-xl"
          >
            <span class="duration-200 group-hover:mr-1">Baca Selengkapnya</span>
            <ArrowUpRightIcon
              stroke-width="1.5"
              class="mt-1 h-5 w-5 duration-300 group-hover:rotate-45"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
