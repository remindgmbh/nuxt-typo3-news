interface Month {
    title: string
    link: string
    active: boolean
    count: number
}

export interface Year {
    title: number
    link: string
    active: boolean
    count: number
    months?: Month[]
}
