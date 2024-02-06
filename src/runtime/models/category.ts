export interface Category {
    uid?: number
    pid?: number
    title: string
    description: string
    slug: string
    seo?: {
        title: string
        description: string
        headline: string
        text: string
    }
}
