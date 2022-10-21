import { computed } from 'vue'
import { T3NewsApi } from '#nuxt-typo3-news'

export function useT3NewsListElement(content: T3NewsApi.ListElement) {
    const image = computed(() => {
        const result = content.media.at(0)
        if (result) {
            // Use link to news details instead of image link
            result.properties.linkData = {
                href: content.slug,
            }
        }
        return result
    })

    return { image }
}
