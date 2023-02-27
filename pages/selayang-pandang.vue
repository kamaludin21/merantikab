<script setup>
</script>

<template>
  <section class="relative h-80 w-full bg-red-300">
		<img src="./../assets/images/liquid-cheese.svg" class="absolute object-cover h-full w-full bg-red-500" alt="">
    <div class="relative w-full py-16 text-center md:py-24">
      <p class="text-4xl font-extrabold text-white drop-shadow-lg md:text-5xl">
        Selayang Pandang
      </p>
    </div>
  </section>
  <div
    class="relative -mt-32 mb-8 flex h-auto w-full justify-center overflow-hidden"
  >
    <div class="flex h-auto w-[95%] space-x-0 md:space-x-4 rounded-xl bg-white p-4 md:p-6">
      <div class="hidden md:block flex-none text-lg">
        <div
          class="whitespace-nowrap rounded-lg bg-green-50 py-1 px-2 ring-1 ring-inset ring-green-500"
        >
          <a href="#tentang" class="text-slate-800">
            Tentang Kepulauan Meranti
          </a>
        </div>
        <div
          class="cursor-pointer whitespace-nowrap rounded-lg py-1 px-2 hover:bg-green-100"
        >
          <a href="#visimisi" class="text-slate-600">Visi dan Misi</a>
        </div>
        <div
          class="cursor-pointer whitespace-nowrap rounded-lg py-1 px-2 hover:bg-green-100"
        >
          <a href="#lambangdaerah" class="text-slate-600">Lambang Daerah</a>
        </div>
        <div
          class="cursor-pointer whitespace-nowrap rounded-lg py-1 px-2 hover:bg-green-100"
        >
          <a href="#pemimpin" class="text-slate-600">Pemimpin</a>
        </div>
        <div
          class="cursor-pointer whitespace-nowrap rounded-lg py-1 px-2 hover:bg-green-100"
        >
          <a href="#riwayat" class="text-slate-600">Riwayat Pimpinan</a>
        </div>
      </div>

      <div class="w-px flex-1 space-y-16">
        <div id="tentang" class="">
          <p
            class="relative mb-3 -mt-2 w-fit whitespace-nowrap pb-1.5 text-2xl font-bold text-slate-700 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:rounded-full after:bg-primaryGreen"
          >
            Tentang Kepulauan Meranti
          </p>
          <div class="space-y-2 text-justify text-lg text-slate-700">
            <p>
              Kepulauan Meranti adalah sebuah kabupaten di Provinsi Riau,
              Indonesia. Ibukotanya adalah Selatpanjang. Jumlah penduduk
              kabupaten ini berjumlah 206.116 jiwa (2020), dengan luas wilayah
              3.707,84 km²
            </p>
            <p>
              Kabupaten Kepulauan Meranti terdiri dari Pulau Tebing Tinggi,
              Pulau Padang, Pulau Merbau, Pulau Ransang, Pulau Topang, Pulau
              Manggung, Pulau Panjang, Pulau Jadi, Pulau Setahun, Pulau Tiga,
              Pulau Baru, Pulau Paning, Pulau Dedap, Pulau Berembang, Pulau
              Burung. Adapun nama Meranti diambil dari nama gabungan "Pulau
              Merbau, Pulau Ransang, dan Pulau Tebing Tinggi".
            </p>
            <p>
              Bentang alam kabupaten Kepulauan Meranti sebagian besar terdiri
              dari daratan rendah. Pada umumnya struktur tanah terdiri tanah
              alluvial dan grey humus dalam bentuk rawa-rawa atau tanah basah
              dan berhutan bakau (mangrove). Lahan semacam ini subur untuk
              mengembangkan pertanian,perkebunan dan perikanan.
            </p>
          </div>
        </div>

        <div id="visimisi">
          <p
            class="relative mb-3 -mt-2 w-fit pb-1.5 text-2xl font-bold text-slate-700 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:rounded-full after:bg-primaryGreen"
          >
            Visi dan Misi
          </p>
          <div class="space-y-2">
            <p class="text-xl font-medium">Visi</p>
            <p class="text-lg text-slate-700">
              Menjadikan Kabupaten kepulauan Meranti Maju, Cerdas, dan
              Bermartabat di provinsi RIAU INDONESIA
            </p>
            <p class="text-xl font-medium">Misi</p>
            <ul class="text-lg text-slate-700 list-disc pl-5">
              <li>Mewujudkan pemerataan pembangunan infrastruktur.</li>
              <li>
                Meningkatkan dan pemerataan kualitas dan kuantitas sumber daya
                manusia beriman dan bertaqwa yang memiliki daya saing.
              </li>
              <li>Meningkatkan mutu dan layanan kesehatan masyarakat.</li>
              <li>Menciptakan produktivitas perekonomian masyrakat</li>
              <li>Membangun harmonisasi sosial budaya masyarakat</li>
              <li>
                Menciptakan tata kelola pemerintah yang baik, bersih dan
                bertanggung jawab setra memberikan layanan prima.
              </li>
            </ul>
          </div>
        </div>

        <div id="lambangdaerah">
          <p
            class="relative mb-3 -mt-2 w-fit pb-1.5 text-2xl font-bold text-slate-700 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:rounded-full after:bg-primaryGreen"
          >
            Lambang Daerah
          </p>
          <div class="space-y-4">
            <div
              class="w-full rounded-xl bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 p-4 shadow-2xl"
            >
              <img
                src="./../assets/images/logokab/logokab_kepmeranti.png"
                class="mx-auto h-auto w-32"
                alt=""
              />
            </div>
            <p class="text-xl font-medium text-slate-800">Arti Unsur Elemen</p>
            <div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
              <div
                class="grid w-full justify-items-center space-y-2 rounded-lg bg-slate-100 p-2 ring-primaryGreen duration-300 hover:shadow-md hover:ring-1 md:p-4"
              >
                <img
                  src="./../assets/images/logokab/logokab_perisai.png"
                  class="h-20"
                />
                <p class="text-lg font-medium">Perisai</p>
                <p class="">
                  Memiliki arti alam yang subur sebagai ketahanan pangan, dengan
                  garis pinggir hitam dan kuning memiliki kekuatan dan kebesaran
                  masyarakat dalam mempertahankan wilayahnya, serta lekukan di
                  kanan dan kiri atas memiliki arti bentuk geografis wilayah
                  Kepulauan Meranti yang memiliki tanjung dan teluk.
                </p>
              </div>
              <div
                class="grid w-full justify-items-center space-y-2 rounded-lg bg-slate-100 p-2 ring-primaryGreen duration-300 hover:shadow-md hover:ring-1 md:p-4"
              >
                <img
                  src="./../assets/images/logokab/logokab_bambu.png"
                  class="h-20"
                />
                <p class="text-lg font-medium">Bambu Kuning</p>
                <p class="">
                  Memiliki arti semangat dan perjuangan masyarakat dalam
                  pembentukan Kabupaten Kepulauan Meranti dengan 9 (Sembilan)
                  Ruas Bambu menunjukan tahun 2009 sebagai tahun pengesahan
                  Kabupaten Kepulauan Meranti
                </p>
              </div>
              <div
                class="grid w-full justify-items-center space-y-2 rounded-lg bg-slate-100 p-2 ring-primaryGreen duration-300 hover:shadow-md hover:ring-1 md:p-4"
              >
                <img
                  src="./../assets/images/logokab/logokab_sagu.png"
                  class="h-20"
                />
                <p class="text-lg font-medium">Pohon Sagu</p>
                <p class="">
                  Memiliki arti salah satu sumber kekuatan pangan dan
                  perekonomian masyarakat Kabupaten Kepulauan Meranti dengan
                  jumlah pohon sebanyak 1 (satu) batang dan pelepah yang
                  berjumlah 16 (enam belas) buah menunjukan tanggal 16 Januari
                  yang merupakan tanggal dan bulan pengesahan Kabupaten
                  Kepulauan Meranti
                </p>
              </div>
              <div
                class="grid w-full justify-items-center space-y-2 rounded-lg bg-slate-100 p-2 ring-primaryGreen duration-300 hover:shadow-md hover:ring-1 md:p-4"
              >
                <img
                  src="./../assets/images/logokab/logokab_pinangsirih.png"
                  class="h-20"
                />
                <p class="text-lg font-medium">Sirih dan Pinang</p>
                <p class="">
                  memiliki arti sifat dan ciri masyarakat yang selalu hidup
                  dalam tuntunan agama, rukun dan menjunjung tinggi nilai-nilai
                  adat istiadat dan budaya, ramah tamah dan terhormat serta
                  selalu mengembangkan ilmu pengetahuan. 17 (Tujuh Belas) helai
                  daun sirih, 45 (empat puluh lima), urat-urat pada daun sirih
                  dan 8 (delapan) buah pinang merupakan tanggal, bulan dan tahun
                  kemerdekaan Republik Indonesia.
                </p>
              </div>
              <div
                class="grid w-full justify-items-center space-y-2 rounded-lg bg-slate-100 p-2 ring-primaryGreen duration-300 hover:shadow-md hover:ring-1 md:p-4"
              >
                <img
                  src="./../assets/images/logokab/logokab_perahu.png"
                  class="h-20"
                />
                <p class="text-lg font-medium">Perahu</p>
                <p class="">
                  melambangkan wilayah kepulauan Meranti Sebagai kawasan
                  strategis yang menjadi sumber ekonomi masyarakat dengan
                  letaknya yang berada pada jalur transportasi laut serta
                  memiliki potensi sebagai kawasan niaga dengan posisinya
                  sebagai tempat persinggahan atau daerah transit
                </p>
              </div>
              <div
                class="grid w-full justify-items-center space-y-2 rounded-lg bg-slate-100 p-2 ring-primaryGreen duration-300 hover:shadow-md hover:ring-1 md:p-4"
              >
                <img
                  src="./../assets/images/logokab/logokab_gelombang.png"
                  class="h-20"
                />
                <p class="text-lg font-medium">Gelombang</p>
                <p class="">
                  menunjukan jumlah sila yang terdapat dalam Panca Sila sebagai
                  dasar Negara Republik Indonesia serta melambangkan masyarakat
                  kabupaten kepulauan meranti yang berketuhanan, berkemanusiaan,
                  bersatu, demokratis dan sejahtera.
                </p>
              </div>
              <div
                class="grid w-full justify-items-center space-y-2 rounded-lg bg-slate-100 p-2 ring-primaryGreen duration-300 hover:shadow-md hover:ring-1 md:p-4"
              >
                <img
                  src="./../assets/images/logokab/logokab_tulisanarab.png"
                  class="h-20"
                />
                <p class="text-lg font-medium">Tulisan Arab Melayu</p>
                <p class="">
                  melambangkan penghormatan masyarakat Kabupaten Kepulauan
                  Meranti terhadap ilmu pengetahuan dan sejarah.
                </p>
              </div>
              <div
                class="grid w-full justify-items-center space-y-2 rounded-lg bg-slate-100 p-2 ring-primaryGreen duration-300 hover:shadow-md hover:ring-1 md:p-4"
              >
                <img
                  src="./../assets/images/logokab/logokab_banner.png"
                  class="h-20"
                />
                <p class="text-lg font-medium">Pita Merah</p>
                <p class="">
                  melambangkan tekad dan kesiapan rohani dan jasmani masyarakat
                  Kabupaten Kepulauan Meranti dalam menghadapi perubahan
                  peradaban dan perkembangan zaman.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="pemimpin">
          <p
            class="relative mb-3 -mt-2 w-fit pb-1.5 text-2xl font-bold text-slate-700 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:rounded-full after:bg-primaryGreen"
          >
            Pemimpin
          </p>
          <div
            class="mb-2 flex w-full space-x-2 rounded-xl bg-slate-100 p-2 md:space-x-6 md:p-4"
          >
            <div class="w-1/4">
              <img
                src="./../assets/images/Bupati_Kepulauan_Meranti_periode_2021-2024_Muhammad_Adil.jpg"
                class="h-auto w-full rounded-xl object-cover"
                alt=""
              />
            </div>
            <div class="h-56 flex-1 overflow-y-auto">
              <p class="text-lg font-semibold">Profil Bupati</p>
              <hr class="my-2" />
              <p class="text-lg font-medium">H. Muhammad Adil, S.H., M.M.</p>
              <p class="text-sm">
                H. Muhammad Adil, S.H., M.M. (lahir 18 April 1972) adalah
                seorang politikus asal Riau yang saat ini menjabat sebagai
                Bupati Kepulauan Meranti periode 2021-2024. Sebelumnya ia
                menjabat sebagai Anggota DPRD Provinsi Riau 2 periode yaitu
                periode 2014-2018 hingga terpilih lagi periode selanjutnya yaitu
                2019-2020. Namun di periode kedua ini, dia hanya setahun
                menjabat sebagai Anggota DPRD Provinsi Riau karena dia maju
                sebagai Calon Bupati Kepulauan Meranti periode 2021-2024.
              </p>
              <p class="text-lg font-medium">Pendidikan</p>
              <ul class="text-sm">
                <li>Madrasah Ibtidaiyah Istiqomah Alah Air (1978-1984)</li>
                <li>SMP Negeri 3 Selatpanjang (1984-1987)</li>
                <li>SMA Negeri 2 Selatpanjang (1987-1990)</li>
                <li>S-1 Universitas Lancang Kuning Pekanbaru (2003-2007)</li>
                <li>S-2 Universitas Lancang Kuning Pekanbaru (2022)</li>
              </ul>
            </div>
          </div>
          <div
            class="flex w-full space-x-2 rounded-xl bg-slate-100 p-2 md:space-x-6 md:p-4"
          >
            <div class="w-1/4">
              <img
                src="./../assets/images/WAKIL_BUPATI.jpg"
                class="h-auto w-full rounded-xl object-cover"
                alt=""
              />
            </div>
            <div class="h-56 flex-1 overflow-y-auto">
              <p class="text-lg font-semibold">Profil Wakil Bupati</p>
              <hr class="my-2" />
              <p class="text-lg font-medium">AKBP (Purn.) H. Asmar</p>
              <p class="text-sm">
                AKBP (Purn.) H. Asmar (lahir 5 Mei 1962) adalah seorang
                purnawirawan Polri yang sekarang menjabat sebagai Wakil Bupati
                Kabupaten Kepulauan Meranti, Riau periode 2021–2024. Ia adalah
                wakil dari Kepulauan Meranti
              </p>
              <p class="text-lg font-medium">Pendidikan</p>
              <ul class="text-sm">
                <li>SD Penyagun</li>
                <li>MTs Selat Panjang</li>
                <li>SMEA Selat Panjang</li>
              </ul>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="w-full" id="riwayat">
          <p
            class="relative mb-3 -mt-2 w-fit pb-1.5 text-2xl font-bold text-slate-700 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:rounded-full after:bg-primaryGreen"
          >
            Riwayat Pemimpin
          </p>
          <div class="h-fit w-full overflow-x-auto scrollbar-hide">
            <div class="relative flex w-max">
              <div
                class="absolute mt-5 h-0.5 w-full rounded-full bg-primaryGreen"
              ></div>
              <div class="relative h-full space-y-2 w-96 mr-44 p-0.5">
								<div class="bg-green-200 ring-primaryGreen w-fit rounded-full px-4 py-1.5 ring-2">
									2021-2025
								</div>
								<div class="bg-green-100 rounded-lg flex w-fit space-x-2">
									<div class="w-1/2 h-52 p-2">
										<img class="h-full w-full object-cover rounded-lg" src="./../assets/images/Bupati_Kepulauan_Meranti_periode_2021-2024_Muhammad_Adil.jpg" alt="">
									</div>
									<div class="w-1/2 h-52 p-2">
										<img class="h-full w-full object-cover rounded-lg" src="./../assets/images/WAKIL_BUPATI.jpg" alt="">
									</div>
								</div>
							</div>
              <div class="relative h-full space-y-2 w-96 mr-44 p-0.5">
								<div class="bg-gray-200 ring-primaryGreen w-fit rounded-full px-4 py-1.5 ring-2">
									2016-2021
								</div>
								<div class="bg-gray-200 rounded-lg flex w-fit space-x-2">
									<div class="w-1/2 h-52 p-2">
										<img class="h-full w-full object-cover rounded-lg" src="./../assets/images/irwan_nasir.jpg" alt="">
									</div>
									<div class="w-1/2 h-52 p-2">
										<img class="h-full w-full object-cover rounded-lg" src="./../assets/images/said_hasim.jpg" alt="">
									</div>
								</div>
							</div>
              <div class="relative h-full space-y-2 w-96 mr-44 p-0.5">
								<div class="bg-gray-200 ring-primaryGreen w-fit rounded-full px-4 py-1.5 ring-2">
									2010-2015
								</div>
								<div class="bg-gray-200 rounded-lg flex w-fit space-x-2">
									<div class="w-1/2 h-52 p-2">
										<img class="h-full w-full object-cover rounded-lg" src="./../assets/images/irwan_nasir.jpg" alt="">
									</div>
									<div class="w-1/2 h-52 p-2">
										<img class="h-full w-full object-cover rounded-lg" src="./../assets/images/masrul_kasmi.jpg" alt="">
									</div>
								</div>
							</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
