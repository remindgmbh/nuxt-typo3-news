import { T3Api } from '#nuxt-typo3'
import { T3NewsApi } from '#nuxt-typo3-news'

export function useT3CeNewsPi1() {
    const isDetail = (
        news: T3Api.ContentElement<T3NewsApi.NewsPi>
    ): news is T3Api.ContentElement<T3NewsApi.NewsPiDetails> =>
        news.content.data.settings.action === 'detail'

    const isList = (
        news: T3Api.ContentElement<T3NewsApi.NewsPi>
    ): news is T3Api.ContentElement<T3NewsApi.NewsPiList> =>
        news.content.data.settings.action === 'list'

    const isTagsList = (
        news: T3Api.ContentElement<T3NewsApi.NewsPi>
    ): news is T3Api.ContentElement<T3NewsApi.NewsPiTagsList> =>
        news.content.data.settings.action === 'tagsList'

    const isDateMenu = (
        news: T3Api.ContentElement<T3NewsApi.NewsPi>
    ): news is T3Api.ContentElement<T3NewsApi.NewsPiDateMenu> =>
        news.content.data.settings.action === 'dateMenu'

    const isCategoryMenu = (
        news: T3Api.ContentElement<T3NewsApi.NewsPi>
    ): news is T3Api.ContentElement<T3NewsApi.NewsPiCategoryMenu> =>
        news.content.data.settings.action === 'categoryMenu'

    return {
        isDetail,
        isList,
        isTagsList,
        isDateMenu,
        isCategoryMenu,
    }
}
