import { useContext } from "react"
import { ColorContext } from '@/context/HexColorContext';

export const useColorContext = () => {

    const { colorState: {allColors, selectedColor}, generateNewColor } = useContext(ColorContext)

    return {
        generateNewColor,
        selectedColor,
        allColors
    }

}