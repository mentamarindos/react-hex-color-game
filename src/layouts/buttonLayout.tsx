import { tw } from 'twind'
import { IChildrenProp } from "@/interfaces";


export const ButtonLayout = ({ children }: IChildrenProp) => {
    return (
        <div className={ tw`flex place-content-between gap-2 p-2 w-[100%]` }> 
            { children }
        </div>
    )
}