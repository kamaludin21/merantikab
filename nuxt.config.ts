// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
    head: {
			htmlAttrs: {
				lang: 'id'
			},
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Kepulauan Meranti',
      meta: [
        { name: 'Kabupaten Kepulauan Meranti', content: 'Situs Resmi Pemerintah Kabupaten Kepulauan Meranti' }
      ],
    }
  },
	css: ['~/assets/css/main.css'],	
	postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
