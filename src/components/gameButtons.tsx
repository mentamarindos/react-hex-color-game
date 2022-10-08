import { useState, useContext } from 'react';
import { tw } from 'twind/style';
import { useRandomHexaColor } from '@/hooks/useHexaColors'
import { ColorContext } from '@/context/HexaColorContext';


export const GameButton = (props: any) => {

    const { colorName } = props
    const { generateNewColor, colorState: { selectedColor } } = useContext(ColorContext) 

    const checkMatchingColor = (event: any) => {
        if(selectedColor == event.target.name){
           generateNewColor(6)
        }
    }

    const BaseButtonStyles = tw`hover:bg-blue-300
    w-[100%]
    text-gray-900
    font-sans
    px-4 py-1
    font-extrabold
    bg-blue-200
    `
    const ButtonStyles = tw(BaseButtonStyles)

    return (
        <>
            <button className={ButtonStyles}
            name={colorName}
            onClick={ (e) => checkMatchingColor(e) }> 
                #{ colorName } 
            </button>
        </>
    )
}