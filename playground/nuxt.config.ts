export default defineNuxtConfig({
    modules: ['@remindgmbh/nuxt-typo3', '@remindgmbh/nuxt-typo3-news'],
    runtimeConfig: {
        public: {
            typo3: {
                api: {
                    baseUrl: '',
                },
                baseUrl: '',
                cookiebotUid: '',
            },
        },
    },

    typescript: {
        shim: false,
        strict: true,
    },
})
