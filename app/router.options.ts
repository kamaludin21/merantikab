import type { RouterConfig } from '@nuxt/schema'
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
  routes: (_routes) => [
    {
      name: '',
      path: '/',
      component: () => import('~/pages/index.vue')
    },
		{
      name: 'beranda',
      path: '/beranda',
      component: () => import('~/pages/index.vue')
    },
		{
			name: 'selayang-pandang',
			path: '/selayang-pandang',
			component: () => import('~/pages/selayang-pandang.vue')
		},
		{
			name: 'berita',
			path: '/berita',
			component: () => import('~/pages/berita.vue')
		},
		{
			name: 'berita-kategori',
			path: '/berita-kategori',
			component: () => import('~/pages/berita-kategori.vue')
		},
		{
			name: 'berita-detail',
			path: '/berita-detail',
			component: () => import('~/pages/berita-detail.vue')
		},
		{
			name: 'tautan-aplikasi',
			path: '/tautan-aplikasi',
			component: () => import('~/pages/tautan-aplikasi.vue')
		},
		{
			name: 'galeri',
			path: '/galeri',
			component: () => import('~/pages/galeri.vue')
		},
		{
			name: 'publikasi-dokumen',
			path: '/publikasi-dokumen',
			component: () => import('~/pages/publikasi-dokumen.vue')
		},
		{
			name: 'info',
			path: '/info',
			component: () => import('~/pages/info.vue')
		},
  ],
	
}