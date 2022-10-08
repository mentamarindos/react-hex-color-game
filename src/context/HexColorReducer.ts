import { IColorPayload } from "@/interfaces"

type ColorAction = { type: 'GENERATE_COLOR'|string, payload: IColorPayload  }

export const ColorReducer = (state: any, action: ColorAction ): IColorPayload => {

    const { payload } = action 

    switch (action.type) {
        case "GENERATE_COLOR":
            return {...state, ...payload} 
            
        case "CHANGE_DIFFICULTY":
            const { difficulty } = payload
            return {...state, difficulty: Number(difficulty) }

        case "SET_DISPLAY_MSG":
            const { DisplayMsg } = payload
            return {...state, DisplayMsg }
        default:
            return state 
    }

}