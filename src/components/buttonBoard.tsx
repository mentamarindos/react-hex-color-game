import { useContext, useEffect, useState } from 'react';
import { tw } from 'twind'
import { GameButton } from '@/components/gameButtons';
import { ColorContext } from '@/context/HexaColorContext';
import { DisplayMsg } from '@/components/displayMsg';


export const ButtonBoard = () => {

    const [showMsg, setShowMsg] = useState(false)
    const { colorState: { allColors }, generateNewColor } = useContext(ColorContext)

    useEffect( () => {
        generateNewColor(6)
    },[])

    // flex place-content-between sm:justify-evenly gap-2 p-2 w-[100%] max-w-[300px] 

    return (
        <>
            <div className={ tw`grid grid-cols-3 gap-2.5 p-2 max-w-[400px]` }> 
                { allColors.map( (item, index) => <div> <GameButton key={index} colorName={item} /> </div>) } 
            </div>
            { 
                showMsg && <DisplayMsg />
            }
        </>
    )

}