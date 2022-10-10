import { useReducer } from "react";
import { ColorContext } from '@/context/HexColorContext'
import { ColorReducer } from '@/context/HexColorReducer'
import { IChildrenProp, IColorPayload } from "@/ts/interfaces";

const INITIAL_STATE: IColorPayload = {
    selectedColor: '',
    allColors: [],
    difficulty: 1,
    level: 0,
    winCounter: 0,
    DisplayMsg: ''
}

export const ColorContextProvider = ({children}: IChildrenProp) => {

    const [colorState, dispatch] = useReducer( ColorReducer, INITIAL_STATE ); 
    
    return (
        <ColorContext.Provider value={{colorState, dispatch}}>
        { children }
        </ColorContext.Provider>
    )

}