import { addImports, createResolver, defineNuxtModule } from '@nuxt/kit'
import { name, version } from '../package.json'

export const CONFIG_KEY = 'typo3News'

export default defineNuxtModule({
    meta: {
        configKey: CONFIG_KEY,
        name,
        version,
    },
    setup(_options, nuxt) {
        const resolver = createResolver(import.meta.url)

        nuxt.options.alias['#nuxt-typo3-news'] = resolver.resolve('runtime')

        addImports({
            as: 'T3NewsModel',
            from: resolver.resolve('runtime/models'),
            name: '*',
        })
    },
})
