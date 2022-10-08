import { IColorPayload } from "@/interfaces"

type ColorAction = { type: 'GENERATE_COLOR'|string, payload: IColorPayload  }

export const ColorReducer = (state: any, action: ColorAction ): IColorPayload => {

    const { payload } = action

    switch (action.type) {
        case "GENERATE_COLOR":
            return payload 
        default:
            return state 
    }

}
