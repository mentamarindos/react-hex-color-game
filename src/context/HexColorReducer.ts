import { IColorPayload } from "@/interfaces"

type ColorAction = { type: 'GENERATE_COLOR'|string, payload: IColorPayload  }

export const ColorReducer = (state: any, action: ColorAction): IColorPayload => {

    switch (action.type) {
        case "GENERATE_COLOR":
            return action.payload 
        default:
            return state 
    }

}
