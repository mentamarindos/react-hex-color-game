import { useEffect, useState } from 'react';
import { tw } from 'twind'
import { GameButton } from '@/components/gameButtons';
import { DisplayMsg } from '@/components/displayMsg';
import { useColorContext } from '@/hooks/useColorContext';


export const ButtonBoard = () => {

    const [showMsg, setShowMsg] = useState(false)
    const { allColors, generateNewColor } = useColorContext()
    
    useEffect( () => {
       generateNewColor()
    },[])

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