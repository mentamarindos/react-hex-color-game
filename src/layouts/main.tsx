import { tw } from "twind"

export const MainLayout = (props: any) => {
    return (
      <div className={tw`flex justify-center items-center h-screen w-screen`}>
        {props.children}
      </div>
    )
}