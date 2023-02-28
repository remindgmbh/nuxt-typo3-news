import { T3Api } from '#nuxt-typo3'
import { Category, DetailElement, ListElement, Settings, Tag, Year } from '.'

export interface NewsPiList extends T3Api.Content.Base {
    data: {
        pagination: T3Api.Pagination
        news: ListElement[]
        settings: Settings
    }
}

export interface NewsPiDetails extends T3Api.Content.Base {
    data: {
        news: DetailElement
        settings: Settings
    }
}

export interface NewsPiCategoryMenu extends T3Api.Content.Base {
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

export interface NewsPiDateMenu extends T3Api.Content.Base {
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

export interface NewsPiTagsList extends T3Api.Content.Base {
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

export type NewsPi =
    | NewsPiList
    | NewsPiTagsList
    | NewsPiDetails
    | NewsPiDateMenu
    | NewsPiCategoryMenu
