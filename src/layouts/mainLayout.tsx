import { tw } from "twind"
import { IChildrenProp } from "@/interfaces";

export const MainLayout = ({ children }: IChildrenProp) => {
    return (
      <div className={tw`flex justify-center items-center h-screen w-screen`}>
        { children }
      </div>
    )
}