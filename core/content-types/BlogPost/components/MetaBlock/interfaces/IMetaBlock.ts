import { ITag } from "./ITag";

export interface IMetaBlock {
    publishedAt: Date,
    author: string,
    score: number,
    tags: ITag[]
}