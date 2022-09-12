import { IBubbleData } from "./IHomePage";

export interface IBubbleInfo {
	isVisible: boolean,
	toggleVisibility: React.Dispatch<React.SetStateAction<any>>,
	data: IBubbleData
}