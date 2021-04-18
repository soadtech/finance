function capitalizarPrimeraLetra (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const validateEmpty = (data) => {
    const errores = {}
    const keys = Object.keys(data)
    keys.forEach(key => {
        if (data[key].trim() === '' || data[key] === undefined) {
            errores[key] = capitalizarPrimeraLetra(`${key} es obligatorio`)
        }
    })
    return errores
}