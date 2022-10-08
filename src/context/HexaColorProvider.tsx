import { useReducer } from "react";
import { ColorContext } from '@/context/HexaColorContext'
import { ColorReducer } from '@/context/HexaColorReducer'
import { IChildrenProp, IColorPayload } from "@/interfaces";
import { useRandomHexaColor } from '@/hooks/useHexaColors'

const INITIAL_STATE: IColorPayload = {
    selectedColor: '',
    allColors: []
}

export const ColorContextProvider = ({children}: IChildrenProp) => {

    const [colorState, dispatch] = useReducer( ColorReducer, INITIAL_STATE ); 

    const generateNewColor = (quantity: number) => {

        const allColors = useRandomHexaColor(quantity)
        
        const selectedColor = allColors[Math.floor(Math.random() * allColors.length)];

        const _payload = { 
            type: 'GENERATE_COLOR', payload: { selectedColor, allColors } 
        }

        dispatch(_payload)
    }
    
    return (
        <ColorContext.Provider value={{colorState, generateNewColor}}>
        { children }
        </ColorContext.Provider>
    )

}