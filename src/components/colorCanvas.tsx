import { useHexaColors } from "@/hooks/useHexaColors"
import { useState } from "react";
import { useEffect } from "react";
import { tw, style } from 'twind/style';


function ColorCanvas () {

    const [twStyles, setTwStyles] = useState('')
    
    useEffect(() => {
        const randomBackground = style({base: `bg-[#${useHexaColors()}]` })
        const boxSize = tw`w-80 h-80`
        const _styles = tw(boxSize, randomBackground(`max-w-screen-lg min-w-[50pt] h-20]`))
        setTwStyles(_styles)
    }, [])

    return (
        <>
            <div className={twStyles}>CANVAS</div>
        </>
    )
}

export default ColorCanvas