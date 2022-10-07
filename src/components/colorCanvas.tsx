import { useRandomHexaColor } from "@/hooks/useHexaColors"
import { useRef, useState } from "react";
import { useEffect } from "react";
import { tw, style } from 'twind/style';


function ColorCanvas () {

    const [boxStyles, set_BoxStyles] = useState('')
    const canvasRef: any = useRef()

    const drawCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d")

        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        context.fillStyle = `#${useRandomHexaColor()}`
        context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
    
    useEffect(() => {
       drawCanvas()
    }, [])

    return (
        <>
         <h1 className={tw`text-center text-4xl font-mono`}>Which color?</h1>
         <div className={tw`w-[320px] h-[300px]`}>
            <canvas ref={canvasRef}></canvas>
         </div>
        </>
    )
}

export default ColorCanvas