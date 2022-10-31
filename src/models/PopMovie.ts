export interface PopMovie {
   page: number,
   results: Result[],
   total_results: number,
   total_pages: number,
}

export interface Result {
    poster_path: string | null, 
   
    overview: string,
    release_date: string,
    
    
    title: string,
    
}