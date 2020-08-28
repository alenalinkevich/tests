export interface CollectionsState {
    isAuthorized: boolean;
    authError:  boolean;
    collections: Collection[];
}

export interface Collection {
    id: string;
    title: string;
    description: string | null;
}