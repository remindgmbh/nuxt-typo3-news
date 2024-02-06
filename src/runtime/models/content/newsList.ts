import type { ListNews, Settings } from '..'
import { T3Model } from '#imports'

export interface NewsList extends T3Model.Typo3.Content.Data.Header {
    data: {
        pagination: T3Model.Typo3.Extbase.Pagination
        news: ListNews[]
        settings: Settings
    }
}
