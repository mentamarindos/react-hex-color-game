import { tw } from 'twind'

export const ButtonLayout = (props: any) => {
    return (
        <div className={ tw`flex gap-2 p-2 m-1` }>
            {props.children}
        </div>
    )
}