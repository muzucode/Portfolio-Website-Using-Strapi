export interface Thumbnail {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path?: any;
    width: number;
    height: number;
    size: number;
    url: string;
}

export interface Medium {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path?: any;
    width: number;
    height: number;
    size: number;
    url: string;
}

export interface Small {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path?: any;
    width: number;
    height: number;
    size: number;
    url: string;
}

export interface Formats {
    thumbnail: Thumbnail;
    medium: Medium;
    small: Small;
}

export interface Attributes2 {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: any;
    provider: string;
    provider_metadata?: any;
    createdAt: Date;
    updatedAt: Date;
}

export interface Data2 {
    id: number;
    attributes: Attributes2;
}

export interface Cover {
    data: Data2;
}

export interface Attributes3 {
    title: string;
    colorPrimary: string;
    colorSecondary: string;
    colorTertiary: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

export interface ITag {
    id: number;
    attributes: Attributes3;
}

export interface ITags {
    data: ITag[];
}

export interface Comments {
    data: any[];
}

export interface Attributes7 {
    name: string;
    description: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Data4 {
    id: number;
    attributes: Attributes7;
}

export interface Role2 {
    data: Data4;
}

export interface Attributes6 {
    action: string;
    createdAt: Date;
    updatedAt: Date;
    role: Role2;
}

export interface Datum3 {
    id: number;
    attributes: Attributes6;
}

export interface Permissions {
    data: Datum3[];
}

export interface Attributes5 {
    name: string;
    description: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    permissions: Permissions;
}

export interface Data3 {
    id: number;
    attributes: Attributes5;
}

export interface Role {
    data: Data3;
}

export interface Thumbnail2 {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path?: any;
    width: number;
    height: number;
    size: number;
    url: string;
}

export interface Formats2 {
    thumbnail: Thumbnail2;
}

export interface Attributes8 {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats2;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: any;
    provider: string;
    provider_metadata?: any;
    createdAt: Date;
    updatedAt: Date;
}

export interface Data5 {
    id: number;
    attributes: Attributes8;
}

export interface Avatar {
    data: Data5;
}

export interface Attributes4 {
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: Date;
    updatedAt: Date;
    description: string;
    role: Role;
    avatar: Avatar;
}

export interface Datum2 {
    id: number;
    attributes: Attributes4;
}

export interface IAuthors {
    data: Datum2[];
}

export interface Attributes {
    title: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    score: number;
    cover: Cover;
    tags: ITags;
    comments: Comments;
    authors: IAuthors;
}

export interface Data {
    id: number;
    attributes: Attributes;
}

export interface Meta {
}

export interface IBlogPost {
    data: Data;
    meta: Meta;
}

