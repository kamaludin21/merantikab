<script setup>
  import {
    BrandFacebookIcon,
    BrandTelegramIcon,
    BrandTwitterIcon,
    BrandWhatsappIcon,
    CalendarIcon,
    PencilIcon,
    ShareIcon
  } from 'vue-tabler-icons'
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
  <div class="mx-10 px-3 py-1 mt-10 mb-2 bg-gray-400 rounded-full w-fit h-fit">
    <p class="text-sm font-medium">Ekonomi</p>
  </div>
  <div class="relative mb-16 flex space-x-8 px-10">
    <div class="w-2/3 space-y-6">
      <div class="space-y-4">
        <p class="text-3xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          minus.
        </p>
        <div class="flex items-center justify-between">
          <div class="w-fit text-gray-600">
            <div class="flex items-center space-x-2">
              <CalendarIcon class="h-4 w-4" stroke-width="1.5" />
              <p class="text-sm font-medium">21 Juni 2023</p>
            </div>
            <div class="flex items-center space-x-2">
              <pencil-icon class="h-4 w-4" stroke-width="1.5" />
              <p class="text-sm font-medium">Humas Pemda</p>
            </div>
          </div>
          <div class="flex space-x-2">
            <button class="rounded-full bg-gray-200 p-2">
              <BrandFacebookIcon />
            </button>
            <button class="rounded-full bg-gray-200 p-2">
              <BrandTwitterIcon />
            </button>
            <button class="rounded-full bg-gray-200 p-2">
              <BrandWhatsappIcon />
            </button>
            <button class="rounded-full bg-gray-200 p-2">
              <BrandTelegramIcon />
            </button>
            <button class="rounded-full bg-gray-200 p-2">
              <ShareIcon />
            </button>
          </div>
        </div>
      </div>
      <div class="text-sm text-gray-400">
        <div class="h-auto w-full">
          <img
            src="./../assets/images/slp.png"
            class="h-full w-full rounded-lg object-cover"
            alt=""
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          repellat error fugit nisi illum amet distinctio! Voluptatum molestias
          veniam provident?. (Foto: Dok. Istimewa)
        </p>
      </div>
      <div class="space-y-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          aliquid saepe architecto expedita magni alias possimus repellat itaque
          explicabo, tempore modi eveniet error, numquam, necessitatibus
          delectus. Quis autem tempora delectus ipsum corrupti, nihil culpa
          dolorem quos ea in odio blanditiis praesentium, placeat reiciendis id,
          eius dignissimos vel mollitia deleniti dolores?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora modi
          soluta impedit sit consequatur doloremque, veniam error culpa
          voluptate commodi eum. Autem expedita maiores dolorem, omnis eum
          minima, ullam fugiat ut corrupti voluptate amet saepe maxime quae
          recusandae quibusdam sunt blanditiis, ex quam est laborum? Quod
          maiores illo neque dolorum quaerat minima deleniti possimus. Quasi est
          quibusdam eius ut aut.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, magnam
          aspernatur. Perferendis, reprehenderit maiores? Est, accusantium
          quidem. Culpa sit, quod qui voluptatibus necessitatibus, id itaque
          adipisci enim, et fugiat ratione?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          numquam asperiores veritatis labore iure tenetur, perferendis esse
          accusantium cupiditate tempora neque molestiae repellendus.
          Dignissimos atque nulla magni dolore sapiente cumque ex reprehenderit
          officia aspernatur eveniet pariatur, quibusdam ut itaque distinctio?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          aliquid saepe architecto expedita magni alias possimus repellat itaque
          explicabo, tempore modi eveniet error, numquam, necessitatibus
          delectus. Quis autem tempora delectus ipsum corrupti, nihil culpa
          dolorem quos ea in odio blanditiis praesentium, placeat reiciendis id,
          eius dignissimos vel mollitia deleniti dolores?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora modi
          soluta impedit sit consequatur doloremque, veniam error culpa
          voluptate commodi eum. Autem expedita maiores dolorem, omnis eum
          minima, ullam fugiat ut corrupti voluptate amet saepe maxime quae
          recusandae quibusdam sunt blanditiis, ex quam est laborum? Quod
          maiores illo neque dolorum quaerat minima deleniti possimus. Quasi est
          quibusdam eius ut aut.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, magnam
          aspernatur. Perferendis, reprehenderit maiores? Est, accusantium
          quidem. Culpa sit, quod qui voluptatibus necessitatibus, id itaque
          adipisci enim, et fugiat ratione?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          numquam asperiores veritatis labore iure tenetur, perferendis esse
          accusantium cupiditate tempora neque molestiae repellendus.
          Dignissimos atque nulla magni dolore sapiente cumque ex reprehenderit
          officia aspernatur eveniet pariatur, quibusdam ut itaque distinctio?
        </p>
      </div>
      <div class="space-y-2">
        <p class="text-sm font-semibold">Hastag:</p>
        <div class="flex flex-wrap space-x-2">
          <div class="bg-g rounded-lg border-2 px-2 py-1 text-sm text-gray-400">
            Politik
          </div>
          <div class="bg-g rounded-lg border-2 px-2 py-1 text-sm text-gray-400">
            Pemda
          </div>
          <div class="bg-g rounded-lg border-2 px-2 py-1 text-sm text-gray-400">
            Olahraga
          </div>
        </div>
      </div>
    </div>
    <div class="self-strecth sticky top-16 h-fit w-1/3">
      <p class="text-2xl font-medium">Berita Terkait</p>
      <div class="mt-1 mb-3 h-1 w-24 rounded-lg bg-gray-400"></div>
      <div class="mb-4 space-y-4">
        <div class="flex w-full space-x-2" v-for="n in 4" :key="n">
          <div class="w-1/3 py-2">
            <img
              src="./../assets/images/slp.png"
              class="h-full w-full rounded-lg object-cover"
              alt=""
            />
          </div>
          <div class="grid w-2/3">
            <p class="text-sm text-gray-400">Pemerintahan | 21 Juni 2023</p>
            <p class="font-semibold leading-5 tracking-tight">
              Lorem ipsum, dolor sit amet consect etur adipisicing elit
              architecto
            </p>
            <div>
              <a href="#" class="text-sm font-medium">Lihat selengkapnya</a>
            </div>
          </div>
        </div>
      </div>
      <button class="w-full rounded-lg border-2 py-1.5">
        Lainya di Ekonomi
      </button>
    </div>
  </div>
</template>
