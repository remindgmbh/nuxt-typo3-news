import type { ListCategory, Settings } from '..'
import { T3Model } from '#imports'

export interface CategoryMenu extends T3Model.Typo3.Content.Data.Header {
    data: {
        categories: {
            all: {
                link: string
                active: boolean
            }
            list: ListCategory[]
        }
        settings: Settings
    }
}
