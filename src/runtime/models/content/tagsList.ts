import type { Settings, Tag } from '..'
import { T3Model } from '#imports'

export interface TagsList extends T3Model.Typo3.Content.Data.Header {
    data: {
        tags: {
            all: {
                link: string
                active: boolean
            }
            list: Tag[]
        }
        settings: Settings
    }
}
