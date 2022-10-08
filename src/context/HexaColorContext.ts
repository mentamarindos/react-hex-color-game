import { IColorPayload } from "@/interfaces";
import React, { createContext } from "react";

export type ColorContextPros = {
    colorState: IColorPayload,
    generateNewColor: React.Dispatch<any>
}

export const ColorContext = createContext<ColorContextPros>({} as ColorContextPros);