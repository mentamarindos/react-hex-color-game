import { useRandomHexaColor } from "@/hooks/useHexaColors"
import { useState } from "react";
import { useEffect } from "react";
import { tw, style } from 'twind/style';


function ColorCanvas () {

    const [boxStyles, set_BoxStyles] = useState('')
    
    useEffect(() => {
        const randomBackground = style({base: `bg-[#${useRandomHexaColor()}]` })
        const boxSize = tw`w-80 h-80`
        const _styles = tw(
            boxSize, 
            randomBackground(),
            tw`max-w-screen-lg min-w-[50pt] rounded-lg shadow-lg`
            )

            set_BoxStyles(_styles)
    }, [])

    return (
        <>
         <h1 className={tw`text-center text-4xl font-mono`}>Which color?</h1>
         <div className={boxStyles}></div>
        </>
    )
}

export default ColorCanvas