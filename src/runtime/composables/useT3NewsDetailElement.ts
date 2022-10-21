import { computed } from 'vue'
import { T3NewsApi } from '#nuxt-typo3-news'

export function useT3NewsDetailElement(content: T3NewsApi.BaseElement) {
    const image = computed(() => content.media.at(0))
    return { image }
}
