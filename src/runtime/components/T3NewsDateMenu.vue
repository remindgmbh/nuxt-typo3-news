<template>
    <div class="t3-news-date-menu">
        <T3Header :content-element="contentElement" />
        <div class="t3-news-date-menu__links">
            <NuxtLink :to="contentElement.content.data.years.all.link">
                {{ $t('news.dateMenu.all') }} ({{
                    contentElement.content.data.years.all.count
                }})
            </NuxtLink>
            <NuxtLink
                v-for="year in contentElement.content.data.years.list"
                :key="year.link"
                :to="year.link"
                class="t3-news-tags-list__link"
                >{{ year.title }} ({{ year.count }})</NuxtLink
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import { T3Api } from '#nuxt-typo3'
import { T3NewsApi } from '#nuxt-typo3-news'

defineProps<{
    contentElement: T3Api.ContentElement<T3NewsApi.NewsPiDateMenu>
}>()
</script>
