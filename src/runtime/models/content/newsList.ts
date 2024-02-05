import type { ListElement, Settings } from '..'
import { T3Model } from '#imports'

export interface NewsList extends T3Model.Typo3.Content.Data.Header {
    data: {
        pagination: T3Model.Typo3.Extbase.Pagination
        news: ListElement[]
        settings: Settings
    }
}
