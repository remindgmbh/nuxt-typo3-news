export default defineNuxtConfig({
    head: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
    },
    runtimeConfig: {
        public: {
            typo3: {
                baseUrl: '',
                api: {
                    baseUrl: '',
                },
                cookiebotUid: '',
            },
        },
    },
    components: [
        {
            path: '@/components',
            global: true,
        },
    ],
    typescript: {
        shim: false,
        strict: true,
    },
    css: ['@/assets/base.scss'],
    typo3: {
        customScssVariables: '@/assets/variables.scss',
        contentElements: {
            header: {
                fullWidth: false,
            },
            textmedia: {
                ignoreCookies: true,
            },
        },
        languages: ['/de/'],
    },
    modules: ['@remindgmbh/nuxt-typo3', '@remindgmbh/nuxt-typo3-news'],
})
