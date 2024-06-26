export const saludar = ( nombre ) => `Hola ${nombre}`

export const ordenarAscendente = ( nombreProp, data ) => {
    return [...data].sort((a, b) => a[nombreProp] - b[nombreProp])
}
