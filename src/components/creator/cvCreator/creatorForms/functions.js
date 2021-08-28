 export const deleteElement = (elem, setState, index) => {
    const copy = [...elem]
    copy.splice(index, 1)
    setState(copy)
}

export const editElement = (elem, setState, index) => {
    const copy = [...elem]
    setState(copy[index])
}