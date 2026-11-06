export default defineNuxtConfig({
    modules: [
        '@remindgmbh/nuxt-logger',
        '@remindgmbh/nuxt-typo3',
        '@remindgmbh/nuxt-typo3-news',
    ],
    runtimeConfig: {
        public: {
            typo3: {
                api: {
                    baseUrl: '',
                },
            },
            typo3Cookiebot: {
                cbid: '',
            },
        },
    },

    typescript: {
        shim: false,
        strict: true,
    },
})
