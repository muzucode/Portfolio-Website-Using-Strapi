export interface Attributes {
    title: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

export interface IBlogPostTag {
    id: number;
    attributes: Attributes;
}

export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface Meta {
    pagination: Pagination;
}

export interface IBlogPostTags {
    data: IBlogPostTag[];
    meta: Meta;
}


