import { T3Api } from '#nuxt-typo3'

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
        author: string
        authorEmail: string
    }
    media: T3Api.Asset[]
    // TODO specify types
    falRelatedFiles: []
    categories: []
    tags: []
    metaData: {
        keywords: string
        description: string
        alternativeTitle: string
    }
    pathSegment: string
}
