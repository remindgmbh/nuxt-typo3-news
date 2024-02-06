import type { Category, Tag } from '.'
import { T3Model } from '#imports'

export interface News {
    uid: number
    title: string
    teaser: string
    isTopNews: boolean
    crDate: string
    tstamp: string
    datetime: string
    archive?: string
    author: {
        name: string
        email: string
    }
    relatedFiles: T3Model.Typo3.Asset[]
    categories: Category[]
    tags: Tag[]
    metaData: {
        keywords: string
        description: string
        alternativeTitle: string
    }
    pathSegment: string
    media: T3Model.Typo3.Asset[]
}
