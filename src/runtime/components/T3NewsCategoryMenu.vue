<template>
    <div class="t3-news-category-menu">
        <T3Header :content-element="contentElement" />
        <div class="t3-news-category-menu__links">
            <NuxtLink
                :to="contentElement.content.data.categories.all.slug"
                class="t3-news-category-menu__link"
            >
                Alle (TODO)
            </NuxtLink>
            <NuxtLink
                v-for="category in contentElement.content.data.categories.list"
                :key="category.slug"
                :to="category.slug"
                class="t3-news-category-menu__link"
                >{{ category.title }}</NuxtLink
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import { T3Api } from '#nuxt-typo3'
import { T3NewsApi } from '#nuxt-typo3-news'

defineProps<{
    contentElement: T3Api.ContentElement<T3NewsApi.NewsPiCategoryMenu>
}>()
</script>
