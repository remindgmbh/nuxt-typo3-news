<template>
    <div
        class="t3-ce-news"
        :class="{
            [`t3-ce-news--${contentElement.appearance.backgroundColor}`]:
                contentElement.appearance.backgroundColor,
        }"
    >
        <div v-if="isList(contentElement)" class="t3-ce-news__list">
            <T3NewsList :content-element="contentElement" />
        </div>
        <div v-else-if="isDetail(contentElement)" class="t3-ce-news__detail">
            <T3NewsDetail :element="contentElement.content.data.news" />
        </div>
        <div
            v-else-if="isTagsList(contentElement)"
            class="t3-ce-news__tags-list"
        >
            <T3NewsTagsList :content-element="contentElement" />
        </div>
        <div
            v-else-if="isDateMenu(contentElement)"
            class="t3-ce-news__date-menu"
        >
            <T3NewsDateMenu :content-element="contentElement" />
        </div>
        <div
            v-else-if="isCategoryMenu(contentElement)"
            class="t3-ce-category-menu"
        >
            <T3NewsCategoryMenu :content-element="contentElement" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { T3Api } from '#nuxt-typo3'
import { T3NewsApi } from '#nuxt-typo3-news'
import { useT3CeNewsPi1 } from '#nuxt-typo3-news/composables/useT3CeNewsPi1'

defineProps<{
    contentElement: T3Api.ContentElement<T3NewsApi.NewsPi>
}>()

const { isCategoryMenu, isDateMenu, isDetail, isList, isTagsList } =
    useT3CeNewsPi1()
</script>
