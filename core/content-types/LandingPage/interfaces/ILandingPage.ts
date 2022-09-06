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

export interface Large {
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
    large: Large;
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

export interface BackgroundImage {
    data: Data2;
}

export interface Attributes {
    title: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    background_image: BackgroundImage;
}

export interface Data {
    id: number;
    attributes: Attributes;
}

export interface Meta {
}

export interface ILandingPage {
    data: Data;
    meta: Meta;
}