import React, { createContext } from "react";

export type ColorContextPros = {
    colorState: { color: string },
    generateNewColor: React.Dispatch<any>
}

export const ColorContext = createContext<ColorContextPros>({} as ColorContextPros);