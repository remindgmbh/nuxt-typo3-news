<template>
    <div class="t3-news-tags-list">
        <T3Header :content-element="contentElement" />
        <div class="t3-news-tags-list__links">
            <NuxtLink :to="contentElement.content.data.tags.all.link">
                Alle (TODO)
            </NuxtLink>
            <NuxtLink
                v-for="tag in contentElement.content.data.tags.list"
                :key="tag.link"
                :to="tag.link"
                class="t3-news-tags-list__link"
                >{{ tag.title }}</NuxtLink
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import { T3Api } from '#nuxt-typo3'
import { T3NewsApi } from '#nuxt-typo3-news'

defineProps<{
    contentElement: T3Api.ContentElement<T3NewsApi.NewsPiTagsList>
}>()
</script>
