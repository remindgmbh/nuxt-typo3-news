<template>
    <div class="t3-news-list">
        <T3Header :content-element="contentElement" />
        <T3Pagination
            v-if="pagination && paginationTop"
            class="t3-news-list__pagination t3-news-list__pagination--top"
            :pagination="pagination"
        />
        <div class="t3-news-list__elements">
            <T3NewsListElement
                v-for="listElement in listElements"
                :key="listElement.uid"
                :list-element="listElement"
            />
        </div>
        <T3Pagination
            v-if="pagination && paginationBottom"
            class="t3-news-list__pagination t3-news-list__pagination--bottom"
            :pagination="pagination"
        />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { T3Api } from '#nuxt-typo3'
import { T3NewsApi } from '#nuxt-typo3-news'
import { useT3NewsList } from '#nuxt-typo3-news/composables/useT3NewsList'

const props = defineProps<{
    contentElement: T3Api.ContentElement<T3NewsApi.NewsPiList>
}>()

const content = computed(() => props.contentElement.content)

const { listElements, pagination, paginationBottom, paginationTop } =
    useT3NewsList(content)
</script>
