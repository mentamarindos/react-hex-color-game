import { useState, useContext } from 'react';
import { tw } from 'twind/style';
import { useRandomHexaColor } from '@/hooks/useHexaColors'
import { ColorContext } from '@/context/HexaColorContext';


function GameButton () {

    const { colorState: {color} ,generateNewColor } = useContext(ColorContext) 

    const BaseButtonStyles = tw`:hover:bg-blue-300
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
        <button className={ButtonStyles} onClick={ generateNewColor }> #{ color } </button>
        </>
    )
}


export default GameButton