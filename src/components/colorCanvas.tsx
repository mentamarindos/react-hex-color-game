import { useColorContext } from '@/hooks/useColorContext';
import { useRef } from 'react';
import { useEffect } from 'react';
import { tw } from 'twind/style';

export const ColorCanvas = () => {

    const { selectedColor } = useColorContext()
    const canvasRef: any = useRef()

    useEffect(() => {
        drawCanvas()
     }, [selectedColor])

    const drawCanvas = async () => {
        const canvas = canvasRef.current
        const context = canvas.getContext("2d") 

        canvas.style.width = "100%"
        canvas.style.height = "100%"
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
        
        context.fillStyle = `#${selectedColor}`; 
        context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    }
    
    return (
        <>
         <h1 className={tw`text-center text-4xl font-mono`}> What color is it? </h1>
         <div className={tw`w-[372px] h-[300px] my-3`}>
            <canvas ref={canvasRef}></canvas>
         </div>
        </>
    )
}
