import { IChildrenProp } from "@/ts/interfaces"
import { tw } from "twind"

export const PageFooter = ({children}: IChildrenProp) => {
  
    const _styles = tw`absolute
    fixed
    bottom-0
    max-h-[30pt]
    min-h-[15pt]
    w-[100vw]`

    return (
    <footer className={_styles}>
        { children }
    </footer>
  )
  
}