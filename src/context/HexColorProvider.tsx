import { useReducer } from "react";
import { ColorContext } from '@/context/HexColorContext'
import { ColorReducer } from '@/context/HexColorReducer'
import { IChildrenProp, IColorPayload } from "@/interfaces";
import { useRandomHexaColor } from '@/hooks/useHexGenerator'

const INITIAL_STATE: IColorPayload = {
    selectedColor: '',
    allColors: [],
    difficulty: 1,
    level: 0,
    winCounter: 0
}

export const ColorContextProvider = ({children}: IChildrenProp) => {

    const [colorState, dispatch] = useReducer( ColorReducer, INITIAL_STATE ); 

    const generateNewColor = () => {

        const MultiplyBy: number = 3;
        const quantity = MultiplyBy * (colorState.difficulty ?? 1);
        const allColors = useRandomHexaColor(quantity)
        
        const selectedColor = allColors[Math.floor(Math.random() * allColors.length)];

        const payload: IColorPayload = {
            ...colorState,
            selectedColor, 
            allColors,
            level: colorState.level++,
        } 

        const _Values = { 
            type: 'GENERATE_COLOR', payload
        }

        dispatch(_Values)
    }
    
    return (
        <ColorContext.Provider value={{colorState, generateNewColor}}>
        { children }
        </ColorContext.Provider>
    )

}