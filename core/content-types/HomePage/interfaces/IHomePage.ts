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

export interface Attributes3 {
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
    attributes: Attributes3;
}

export interface BubbleImage {
    data: Data2;
}

export interface Projects {
    data: any[];
}

export interface Attributes2 {
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    color_background: string;
    color_text: string;
    bubble_image: BubbleImage;
    projects: Projects;
}

export interface IBubbleData {
    id: number;
    attributes: Attributes2;
}

export interface IBubblesData {
    data: IBubbleData[];
}

export interface Attributes {
    name: string;
    job_title: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    bubbles: IBubblesData;
}

export interface Data {
    id: number;
    attributes: Attributes;
}

export interface Meta {
}

interface IHomePageData {
    data: Data;
    meta: Meta;
}

export interface IHomePage {
    data: IHomePageData
}