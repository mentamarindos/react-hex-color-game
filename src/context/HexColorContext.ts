import { IColorPayload } from "@/interfaces";
import React, { createContext } from "react";

export type ColorContextProps = {
    colorState: IColorPayload,
    dispatch: React.Dispatch<any>,
}

export const ColorContext = createContext<ColorContextProps>({} as ColorContextProps);