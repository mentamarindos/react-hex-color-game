
export const useRandomHexaColor = (quantity: number) => {
    const hexaColors = [...Array(quantity).keys()].map( () =>{
        return ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0").toUpperCase();
    })
    return hexaColors
}