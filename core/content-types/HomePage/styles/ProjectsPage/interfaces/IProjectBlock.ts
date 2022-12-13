import { IProject } from "./IProject"

export interface IProjectBlock {
  id: number,
  title: string,
  backgroundColor: string,
  borderColor: string,
  fontColor: string,
  project: {
    data: IProject
  }
}