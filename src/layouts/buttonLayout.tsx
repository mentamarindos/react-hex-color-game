import { tw } from 'twind'
import { IChildrenProp } from "@/interfaces";


export const ButtonLayout = ({ children }: IChildrenProp) => {
    return (
        <div className={ tw`flex gap-2 p-2 m-1` }> 
            { children }
        </div>
    )
}