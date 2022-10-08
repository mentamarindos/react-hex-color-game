import { useRandomHexaColor } from '@/hooks/useHexaColors'
import { useContext, useRef, useState } from 'react';
import { useEffect } from 'react';
import { tw, style } from 'twind/style';
import { ColorContext } from '@/context/HexaColorContext';

function ColorCanvas () {

    const { colorState } = useContext(ColorContext)
    const { color } = colorState
    const canvasRef: any = useRef()
    
    useEffect(() => {
        drawCanvas()
     }, [colorState])


    const drawCanvas = async () => {        
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d")

        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        context.fillStyle = `#${color}`
        context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height); 
    }
    
    return (
        <>
         <h1 className={tw`text-center text-4xl font-mono`}> Which color? </h1>
         <div className={tw`w-[372px] h-[300px] my-3`}>
            <canvas ref={canvasRef}></canvas>
         </div>
        </>
    )
}

export default ColorCanvas