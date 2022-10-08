import { useColorContext } from "@/hooks/custom"
import { useEffect } from "react"
import { tw } from "twind"

export const DisplayMsg = () => {

    const { DisplayMsg } = useColorContext() 

    return (
        <div className={tw`flex left-[30%] place-content-center`}> 
            <span className={tw`fixed pt-4`}>{ DisplayMsg }</span>
        </div>
    )
    
}