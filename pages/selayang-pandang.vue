<script setup>
  import { BrandAbstractIcon } from 'vue-tabler-icons'
</script>

<template>
  <section class="top-0 h-80 w-full">
    <div class="absolute w-full py-16 text-center">
      <p class="text-5xl font-bold text-white shadow-md">Selayang Pandang</p>
    </div>
    <img
      src="./../assets/images/slp.png"
      alt="slp"
      class="relative -z-10 h-full w-full object-cover"
    />
  </section>
  <div
    class="mx-10 -mt-32 mb-8 flex h-auto space-x-8 rounded-lg bg-white p-8 shadow-lg"
  >
    <div class="w-content space-y-2 text-lg h-fit sticky top-16 font-medium">
      <p>Tentang Kepulauan Meranti</p>
      <p>Visi dan Misi</p>
      <p>Lambang Daerah</p>
      <p>Pemimpin</p>
      <p>Riwayat Pimpinan</p>
    </div>
    <div class="flex-1 space-y-16">
      <div>
        <p class="text-2xl font-bold">Tentang Kepulauan Meranti</p>
        <div class="mt-1 mb-6 h-1 w-24 rounded-lg bg-gray-400"></div>
        <div class="space-y-2 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eligendi
            iusto atque iste ad sequi nulla magnam reprehenderit maxime ipsam!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            veniam doloremque eligendi fugiat consectetur exercitationem eaque,
            beatae itaque, explicabo vitae ea quam officiis tempore vero odio
            tempora, nobis nisi fuga!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime a
            quo vero doloribus itaque cupiditate natus cum praesentium facilis
            aspernatur! Vel provident obcaecati saepe accusantium consectetur
            quae, sint aperiam minima rem? Ad eligendi animi est ratione odio
            culpa eaque quae facere, dignissimos molestias deserunt. Magni ab
            veritatis est ullam voluptatibus?
          </p>
        </div>
      </div>

      <div>
        <p class="text-2xl font-bold">Visi dan Misi</p>
        <div class="mt-1 mb-6 h-1 w-24 rounded-lg bg-gray-400"></div>
        <div class="space-y-2">
          <p class="text-xl font-medium">Visi</p>
          <p class="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            quos?
          </p>
          <p class="text-xl font-medium">Misi</p>
          <ul>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam,
              maxime!
            </li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur.
            </li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>

      <div>
        <p class="text-2xl font-bold">Lambang Daerah</p>
        <div class="mt-1 mb-6 h-1 w-24 rounded-lg bg-gray-400"></div>
        <div class="space-y-4">
          <div class="w-full rounded-lg bg-gray-300 p-6">
            <img
              src="./../assets/images/Lambang_kab_Kepulauan_Meranti.png"
              class="mx-auto h-auto w-32"
              alt=""
            />
          </div>
          <p class="text-xl font-medium">Arti Unsur Elemen</p>
          <div class="grid grid-cols-2 gap-4">
            <div
              class="grid w-full justify-items-center space-y-2 rounded-lg bg-gray-200 p-4"
              v-for="n in 6"
              :key="n"
            >
              <brand-abstract-icon class="h-8 w-8" />
              <p class="text-lg font-medium">Nama Unsur</p>
              <p class="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                eius voluptas dolores quibusdam voluptatum, neque sunt
                temporibus laborum sint soluta?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <p class="text-2xl font-bold">Pemimpin</p>
        <div class="mt-1 mb-6 h-1 w-24 rounded-lg bg-gray-400"></div>
        <div class="mb-2 flex w-full space-x-6 rounded-lg bg-gray-300 p-4">
          <div class="w-1/3 rounded-lg border-2 p-4">
            <img
              src="./../assets/images/businessman.png"
              class="h-auto w-full"
              alt=""
            />
          </div>
          <div class="flex-1">
            <p class="text-lg font-semibold">Profil Bupati</p>
            <hr class="my-2" />
            <p class="font-gray-600 text-sm">Nama Lengkap</p>
            <p class="font-medium">Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div class="flex w-full space-x-6 rounded-lg bg-gray-300 p-4">
          <div class="w-1/3 rounded-lg border-2 p-4">
            <img
              src="./../assets/images/businessman.png"
              class="h-auto w-full"
              alt=""
            />
          </div>
          <div class="flex-1">
            <p class="text-lg font-semibold">Profil Wakil Bupati</p>
            <hr class="my-2" />
            <p class="font-gray-600 text-sm">Nama Lengkap</p>
            <p class="font-medium">Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>

      <div>
        <p class="text-2xl font-bold">Riwayat Pimpinan</p>
        <div class="mt-1 mb-6 h-1 w-24 rounded-lg bg-gray-400"></div>
        <div class="relative flex w-full justify-between">
          <div
            class="absolute right-0 z-0 mt-4 h-0.5 w-[90%] bg-gray-600"
          ></div>
          <div class="z-10 w-1/3 space-y-2">
            <div class="w-fit rounded-full bg-gray-300 ring-2 ring-gray-600 px-4 py-1">
              <p class="text-lg font-medium">2015 - 2020</p>
            </div>
            <div class="flex rounded-lg bg-gray-200 p-4">
              <img
                src="./../assets/images/businessman.png"
                class="h-auto w-1/2"
                alt=""
              />
              <img
                src="./../assets/images/businessman.png"
                class="h-auto w-1/2"
                alt=""
              />
            </div>
          </div>
          <div class="z-10 w-1/3 space-y-2">
            <div class="w-fit rounded-full bg-gray-300 ring-2 ring-gray-600 px-4 py-1">
              <p class="text-lg font-medium">2010 - 2015</p>
            </div>
            <div class="flex rounded-lg bg-gray-200 p-4">
              <img
                src="./../assets/images/businessman.png"
                class="h-auto w-1/2"
                alt=""
              />
              <img
                src="./../assets/images/businessman.png"
                class="h-auto w-1/2"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
