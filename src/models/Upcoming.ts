export interface Upcoming {
    page: number,
    results: UpcomingResults[]
}

export interface UpcomingResults {
    poster_path: string | null,
    overview: string,
    release_date: string,
    title: string
}