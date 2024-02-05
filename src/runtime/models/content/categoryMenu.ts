import type { Category, Settings } from '..'
import { T3Model } from '#imports'

export interface CategoryMenu extends T3Model.Typo3.Content.Data.Header {
    data: {
        categories: {
            all: {
                link: string
                active: boolean
            }
            list: Category[]
        }
        settings: Settings
    }
}
