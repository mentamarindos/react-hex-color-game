import { IColorPayload } from "@/ts/interfaces"
import { Actions } from "@/ts/enums"

type ColorAction = { type: Actions, payload: IColorPayload  }

export const ColorReducer = (state: any, action: ColorAction ): IColorPayload => {

    const { payload } = action 

    switch (action.type) {

        case Actions.GENERATE_COLOR:
            return {...state, ...payload} 
        
            
        case Actions.CHANGE_DIFFICULTY: {
            const { difficulty } = payload
            return {...state, difficulty: Number(difficulty) } 
        }

        case Actions.SET_DISPLAY_MSG: {
            const { DisplayMsg } = payload
            return {...state, DisplayMsg }
        }

        default:
            return state 
    }

}