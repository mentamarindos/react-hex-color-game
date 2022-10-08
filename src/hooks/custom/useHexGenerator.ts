
export const useRandomHexaColor = (quantity: number) => {
    const hexaColors = [...Array(quantity).keys()].map( () => Math.floor(Math.random()*16777215).toString(16) )    
    return hexaColors
}