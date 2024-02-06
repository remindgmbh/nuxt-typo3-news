import type { DetailNews, Settings } from '..'
import { T3Model } from '#imports'

export interface NewsDetail extends T3Model.Typo3.Content.Data.Header {
    data: {
        contentElements: T3Model.Typo3.Content.Element[]
        news: DetailNews
        settings: Settings
    }
}
