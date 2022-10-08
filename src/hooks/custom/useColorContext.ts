import { useContext } from "react"
import { ColorContext } from '@/context/HexColorContext';
import { useRandomHexaColor } from '@/hooks/custom/useHexGenerator'
import { IColorPayload } from "@/interfaces";

export const useColorContext = () => {

    const { colorState, dispatch } = useContext(ColorContext)
    const { allColors, selectedColor, difficulty, DisplayMsg } =  colorState;
    
    const generateNewColor = () => {
        const MultiplyBy: number = 3;
        const quantity = (MultiplyBy * difficulty)
        const allColors = useRandomHexaColor(quantity)
        const selectedColor = allColors[Math.floor(Math.random() * allColors.length)];
        const payload: IColorPayload = {
            ...colorState,
            DisplayMsg: '',
            selectedColor, 
            allColors,
            level: colorState.level++,
        } 

        const _Values = { type: 'GENERATE_COLOR', payload }
        dispatch(_Values)
    }

    const setDisplayMsg = (msg: string) => {
        dispatch({ type:'SET_DISPLAY_MSG', payload:{ DisplayMsg: msg } }) 
    }

    return {
        colorState,
        dispatch,
        difficulty,
        generateNewColor,
        selectedColor,
        allColors,
        DisplayMsg,
        setDisplayMsg
    }

}