import { tw } from 'twind/style';
import { useColorContext, useCopyToClipboard } from '@/hooks/custom';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';

const WINDOW_WIDTH = window.innerWidth

export const GameButton = (props: any) => {

    const BaseButtonStyles = (tw`hover:bg-blue-300
    w-[100%]
    text-gray-900
    font-sans
    px-4 py-1
    font-extrabold
    bg-blue-200
    `)

    const { colorName } = props;
    const [showConfetti, SetshowConfetti] = useState(false)
    const [ isAnswerCorrect, setIsAnswerCorrect] = useState<boolean|undefined>(undefined)
    const { selectedColor, generateNewColor, setDisplayMsg } = useColorContext() 
    const [ copiedText, copy ] = useCopyToClipboard()

    const checkMatchingColor = (event: any) => {

        if(selectedColor == event.target.name && !showConfetti) {
            copy('#'+selectedColor)

            SetshowConfetti(true)
            setDisplayMsg('Yuppy')
            setIsAnswerCorrect(true)

            setTimeout(() => {
                SetshowConfetti(false)
                generateNewColor()
            }, 1200);

        } else {
            setDisplayMsg("try again")
            setIsAnswerCorrect(false)
        }

        setTimeout(() => setDisplayMsg("") , 1100)
        
    }
    
    const btnWrongAnswer = tw`bg-red-300 text-gray-50` 
    const btnCorrectAnswer = tw`bg-green-400 text-gray-50` 

    const ButtonStyles = tw(BaseButtonStyles, (isAnswerCorrect ? btnCorrectAnswer : ''), (isAnswerCorrect==false ? btnWrongAnswer : '') ) 

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