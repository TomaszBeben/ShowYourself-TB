 export const deleteElement = (elem, setState, index) => {
    const copy = [...elem]
    copy.splice(index, 1)
    setState(copy)
}

export const editElement = (elem, setState, index) => {
    const copy = [...elem]
    setState(copy[index])
}

export const moveElement = (elem, setState, fromIndex, toIndex ) => {
    const element = elem[fromIndex];
    const copy = [...elem]
    copy.splice(fromIndex, 1);
    copy.splice(toIndex, 0, element);
    setState(copy)
}