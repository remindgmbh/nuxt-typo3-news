<template>
    <div class="t3-news-list-element">
        <div class="t3-news-list-element__image">
            <T3Asset v-if="image" :file="image" />
        </div>
        <div class="t3-news-list-element__text">
            <NuxtLink
                class="t3-news-list-element__header"
                :to="listElement.slug"
                >{{ listElement.title }}</NuxtLink
            >
            <div class="t3-news-list-element__teaser">
                {{ listElement.teaser }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { T3NewsApi } from '#nuxt-typo3-news'
import { useT3NewsListElement } from '#nuxt-typo3-news/composables/useT3NewsListElement'

const props = defineProps<{
    listElement: T3NewsApi.ListElement
}>()

const { image } = useT3NewsListElement(props.listElement)
</script>

<style lang="scss">
.t3-news-list-element {
    display: flex;

    &__image {
        width: 25%;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
        }
    }

    &__text {
        width: 75%;
    }
}
</style>
