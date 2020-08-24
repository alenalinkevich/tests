
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

export interface SearchState {
    images: Image[];
    error: boolean;
}