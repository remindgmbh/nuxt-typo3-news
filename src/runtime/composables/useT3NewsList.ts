import { computed, Ref } from 'vue'
import { T3Api } from '#nuxt-typo3'
import { useRuntimeConfig } from '#app'
import { T3NewsApi } from '#nuxt-typo3-news'

export function useT3NewsList(content: Ref<T3NewsApi.NewsPiList>) {
    const config = useRuntimeConfig().public.typo3News

    const pagination = computed<T3Api.Pagination | undefined>(
        () => content.value.data.pagination
    )

    const listElements = computed(() => content.value.data.news ?? [])

    const paginationTop = computed(() =>
        ['top', 'both'].includes(config.pagination.position)
    )

    const paginationBottom = computed(() =>
        ['bottom', 'both'].includes(config.pagination.position)
    )

    return { listElements, pagination, paginationBottom, paginationTop }
}
