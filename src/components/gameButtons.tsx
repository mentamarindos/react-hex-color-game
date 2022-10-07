import { useState } from 'react';
import { tw } from 'twind/style';
import { useHexaColors } from '@/hooks/useHexaColors'


function GameButton () {

    const [HexaColor, setHexaColor] = useState( useHexaColors() )

    const BaseButtonStyles = tw`hover:bg-blue-300
    text-gray-900
    font-sans
    px-4 py-1
    font-extrabold
    bg-blue-200
    `
    const ButtonStyles = tw(BaseButtonStyles) 

    return (
        <>
        <button className={ButtonStyles}> #{ HexaColor } </button>
        </>
    )
}


export default GameButton