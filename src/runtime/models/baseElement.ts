import { T3Model } from '#imports'

export interface BaseElement {
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
    // TODO specify types
    categories: []
    tags: []
    metaData: {
        keywords: string
        description: string
        alternativeTitle: string
    }
    pathSegment: string
    media: T3Model.Typo3.Asset[]
}
