export interface Tag {
    uid?: number
    pid?: number
    title: string
    slug: string
    seo?: {
        title: string
        description: string
        headline: string
        text: string
    }
}
