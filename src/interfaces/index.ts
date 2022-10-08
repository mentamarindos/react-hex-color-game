export interface IChildrenProp {
    children: JSX.Element | JSX.Element[]
}

export interface IColorPayload {
    selectedColor: string,
    allColors: string[],
    difficulty?: (1 | 2 | 3)
    level: number,
    winCounter: number
}