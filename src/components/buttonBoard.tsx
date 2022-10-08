import { useEffect, useState } from 'react';
import { tw } from 'twind'
import { GameButton, DisplayMsg } from '@/components';
import { useColorContext } from '@/hooks/custom';


export const ButtonBoard = () => {

    const [showMsg, setShowMsg] = useState(false)
    const { allColors, generateNewColor } = useColorContext()
    
    useEffect( () => {
       generateNewColor(null)
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