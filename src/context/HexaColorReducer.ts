type ColorAction = { type: 'GENERATE_COLOR'|string, payload: { color: string }  }

export const ColorReducer = (state: any, action: ColorAction): any => {
    switch (action.type){
      case "GENERATE_COLOR":
        return action.payload 
        default:
            return {
                state 
            }
    }
}