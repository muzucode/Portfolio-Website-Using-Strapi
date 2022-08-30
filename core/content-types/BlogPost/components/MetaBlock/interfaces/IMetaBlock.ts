import { IAuthors, ITags } from "../../../interfaces/IBlogPost";

export interface IMetaBlock {
    publishedAt: Date,
    authors: IAuthors,
    score: number,
    tags: ITags
}