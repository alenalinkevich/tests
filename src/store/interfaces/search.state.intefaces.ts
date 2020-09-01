
export interface Image {
    id: string;
    urls: {
        raw: string;
        small: string;
    };
    user: {
        username: string;
    };
    links: {
        download: string;
    }
}

/*export interface ImagesState {
    images: Image[];
    error: boolean;
}*/

export interface SearchState {
    searchRequest: string;
    currentPage: number;
    total: number;
    total_pages: number;
    results: Image[]
}