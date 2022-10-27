export interface TopRated {
    page: number,
    results: TopRatedResults[]
}

export interface TopRatedResults {
    poster_path: string | null,
    overview: string,
    release_date: string,
    title: string
    vote_average: number
}