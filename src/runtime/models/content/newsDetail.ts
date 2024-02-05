import type { DetailElement, Settings } from '..'
import { T3Model } from '#imports'

export interface NewsDetail extends T3Model.Typo3.Content.Data.Header {
    data: {
        contentElements: []
        news: DetailElement
        settings: Settings
    }
}
