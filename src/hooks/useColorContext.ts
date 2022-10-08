import { useContext } from "react"
import { ColorContext } from '@/context/HexColorContext';
import { useRandomHexaColor } from '@/hooks/useHexGenerator'
import { IColorPayload } from "@/interfaces";

export const useColorContext = () => {

    const { colorState, dispatch } = useContext(ColorContext)
    const { allColors, selectedColor, difficulty } =  colorState;
    
    const generateNewColor = () => {
        const MultiplyBy: number = 3;
        const quantity = (MultiplyBy * difficulty)
        const allColors = useRandomHexaColor(quantity)
        const selectedColor = allColors[Math.floor(Math.random() * allColors.length)];
        const payload: IColorPayload = {
            ...colorState,
            selectedColor, 
            allColors,
            level: colorState.level++,
        } 

        const _Values = { type: 'GENERATE_COLOR', payload }
        dispatch(_Values)
    }

    return {
        colorState,
        dispatch,
        difficulty,
        generateNewColor,
        selectedColor,
        allColors
    }

}