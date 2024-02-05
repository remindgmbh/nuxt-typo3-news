import type { Settings, Year } from '..'
import { T3Model } from '#imports'

export interface DateMenu extends T3Model.Typo3.Content.Data.Header {
    data: {
        years: {
            all: {
                link: string
                active: boolean
                count: number
            }
            list: Year[]
        }
        settings: Settings
    }
}
