<template>
    <div class="t3-news-detail">
        <h1 class="t3-news-detail__title">{{ element.title }}</h1>
        <h2 class="t3-news-detail__teaser">{{ element.teaser }}</h2>
        <div v-if="image" class="t3-news-detail__image">
            <T3Asset v-if="image" :file="image" />
        </div>
        <T3HtmlParser
            class="t3-news-detail__text"
            :content="element.bodytext"
        />
    </div>
</template>

<script setup lang="ts">
import { T3NewsApi } from '#nuxt-typo3-news'
import { useT3NewsDetailElement } from '#nuxt-typo3-news/composables/useT3NewsDetailElement'

const props = defineProps<{
    element: T3NewsApi.DetailElement
}>()

const { image } = useT3NewsDetailElement(props.element)
</script>

<style lang="scss">
.t3-news-detail {
    &__title {
        margin: inherit;
    }

    &__teaser {
        margin: inherit;
    }

    &__image {
        display: block;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
    }
}
</style>
