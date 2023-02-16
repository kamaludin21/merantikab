<script setup>
import {
	BrandFacebookIcon,
	BrandTelegramIcon,
	BrandTwitterIcon,
	BrandWhatsappIcon,
	CalendarIcon,
	PencilIcon,
	SearchIcon,
	ShareIcon
} from 'vue-tabler-icons'
</script>
<template>

	<div
		class="group pointer-events-none mx-2 my-6 flex items-center space-x-2 rounded-lg bg-white px-4 shadow-lg ring-0 ring-primaryGreen duration-300 focus-within:ring-1 md:mx-10">
		<SearchIcon class="h-8 w-8 text-slate-400 group-focus-within:text-primaryGreen" />
		<input type="search" class="pointer-events-auto w-full bg-transparent py-3 pr-4 text-xl focus:outline-none"
			placeholder="Pencarian" />
	</div>

	<div class="mt-6 border-b w-full overflow-x-hidden border-slate-600">
		<div class=" flex space-x-4 overflow-x-auto scrollbar-hide whitespace-nowrap px-2 md:px-10">
			<div class="border-b-4 border-slate-800 pb-1">
				<a href="/" class="text-lg font-normal text-slate-800">
					Berita Terbaru
				</a>
			</div>
			<div class="px-2 hover:bg-gray-300">
				<a href="/" class="text-lg font-normal text-slate-600 hover:text-slate-800">
					Terpopuler
				</a>
			</div>
			<div class="px-2 hover:bg-gray-300">
				<a href="/" class="text-lg font-normal text-slate-600 hover:text-slate-800">
					Lingkungan dan Kesehatan
				</a>
			</div>
			<div class="px-2 hover:bg-gray-300">
				<a href="/" class="text-lg font-normal text-slate-600 hover:text-slate-800">
					Olahraga
				</a>
			</div>
			<div class="px-2 hover:bg-gray-300">
				<a href="/" class="text-lg font-normal text-slate-600 hover:text-slate-800">
					Pendidikan dan Teknologi
				</a>
			</div>
			<div class="px-2 hover:bg-gray-300">
				<a href="/" class="text-lg font-normal text-slate-600 hover:text-slate-800">
					Religi
				</a>
			</div>
			<div class="px-2 hover:bg-gray-300">
				<a href="/" class="text-lg font-normal text-slate-600 hover:text-slate-800">
					Sosial dan Budaya
				</a>
			</div>
			<div class="px-2 hover:bg-gray-300">
				<a href="/" class="text-lg font-normal text-slate-600 hover:text-slate-800">
					Transportasi
				</a>
			</div>
		</div>
	</div>
	<div class="mx-2 md:mx-10 px-3 py-1 mt-4 md:mt-10 mb-2 bg-primaryGreen text-white rounded-full w-fit h-fit">
		<p class="text-sm font-medium">Pendidikan dan Teknologi</p>
	</div>
	<div class="relative mb-16 flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-8 md:space-y-0 px-2 md:px-10">
		<div class="w-full md:w-2/3 space-y-2 md:space-y-6">
			<div class="space-y-4">
				<p class="text-2xl md:text-3xl font-bold">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
					minus.
				</p>
				<div class="flex flex-col md:flex-row space-y-2 md:space-y-0 items-start md:items-center justify-between">
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
					<img src="./../assets/images/slp.png" class="h-full w-full rounded-lg object-cover" alt="" />
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
				<div class="flex flex-wrap space-x-4">
					<div class=" rounded-lg border-2 py-1 text-sm text-gray-400">
						Politik
					</div>
					<div class=" rounded-lg border-2 py-1 text-sm text-gray-400">
						Pemda
					</div>
					<div class=" rounded-lg border-2 py-1 text-sm text-gray-400">
						Olahraga
					</div>
				</div>
			</div>
		</div>
		<div class="self-strecth sticky top-20 h-fit w-full md:w-1/3">
			<p
				class="relative mb-3 -mt-2 w-fit pb-1.5 text-2xl font-medium text-slate-700 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:rounded-full after:bg-primaryGreen">
				Berita Terkait
			</p>
			<div class="mb-4 space-y-4">
				<div class="flex w-full space-x-2" v-for="n in 4" :key="n">
					<div class="w-1/3 py-2">
						<img src="./../assets/images/slp.png" class="h-full w-full rounded-lg object-cover" alt="" />
					</div>
					<div class="grid w-2/3">
						<p class="text-sm text-gray-600">21 Juni 2023 | Religi</p>
						<p class="text-lg font-medium leading-5 text-slate-800 tracking-tight">
							Lorem ipsum, dolor sit amet consect etur adipisicing elit
							architecto
						</p>
						<div>
							<a href="#" class="text-sm font-medium">Lihat selengkapnya</a>
						</div>
					</div>
				</div>
			</div>
			<button class="w-full bg-primaryGreen text-white rounded-lg border-2 py-1.5">
				Lainya di Ekonomi
			</button>
		</div>
	</div>
</template>
