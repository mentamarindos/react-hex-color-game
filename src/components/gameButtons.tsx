import { tw } from 'twind/style';
import { useColorContext, useCopyToClipboard } from '@/hooks/custom';


export const GameButton = (props: any) => {

    const { colorName } = props
    const { selectedColor, generateNewColor } = useColorContext() 
    const [ copiedText, copy ] = useCopyToClipboard()

    const checkMatchingColor = (event: any) => {
        if(selectedColor == event.target.name) {
            copy('#'+selectedColor)
            generateNewColor(null)
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
            <button className={ButtonStyles}
            name={colorName}
            onClick={ (e) => checkMatchingColor(e) }> 
                #{ colorName } 
            </button>
        </>
    )
    
}