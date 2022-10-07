import { useReducer } from "react";
import { ColorContext } from '@/context/HexaColorContext'
import { ColorReducer } from '@/context/HexaColorReducer'
import { IChildrenProp } from "@/interfaces";
import { useRandomHexaColor } from '@/hooks/useHexaColors'

const INITIAL_STATE: {color: string} = {
    color: 'FF3434'
}

export const ColorContextProvider = ({children}: IChildrenProp) => {

    const [colorState, dispatch] = useReducer( ColorReducer, INITIAL_STATE ); 

    const generateNewColor = async () => {
        const newColor = useRandomHexaColor() 
        const _payload = { type: 'GENERATE_COLOR', payload: { color: newColor } }       
        dispatch(_payload)
    }

    return (
        <ColorContext.Provider value={{colorState, generateNewColor}}>
        { children }
        </ColorContext.Provider>
    )

}