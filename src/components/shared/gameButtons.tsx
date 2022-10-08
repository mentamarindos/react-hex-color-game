import { tw } from 'twind/style';
import { useColorContext, useCopyToClipboard } from '@/hooks/custom';
import Confetti from 'react-confetti';
import { useState } from 'react';

const WINDOW_WIDTH = window.innerWidth

export const GameButton = (props: any) => {

    const { colorName } = props;
    const [showConfetti, SetshowConfetti] = useState(false)
    const { selectedColor, generateNewColor, setDisplayMsg } = useColorContext() 
    const [ copiedText, copy ] = useCopyToClipboard()
    
    const checkMatchingColor = (event: any) => {
        if(selectedColor == event.target.name) {
            copy('#'+selectedColor)
            SetshowConfetti(true)
            setDisplayMsg('')
            setTimeout(() => {
                SetshowConfetti(false)
                generateNewColor()
            }, 1200);
        } else {
            setDisplayMsg(`try again!`) 
        }
    
    }

    const BaseButtonStyles = tw`hover:bg-blue-300
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
            {
                showConfetti && <Confetti width={WINDOW_WIDTH} height={500}></Confetti>
            }  
            <button className={ButtonStyles}
            name={colorName}
            onClick={ checkMatchingColor }> 
                #{ colorName } 
            </button>
        </>
    )
    
}