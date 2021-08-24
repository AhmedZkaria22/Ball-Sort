
export const addBall = (weight) => {
    return {
        type: 'ADD_ITEM',
        payload: { weight: weight },
    }
}

export const removeBall = (id) => {
    return {
        type: 'REMOVE_ITEM',
        payload: id,
    }
}


export const bubbleSortBalls = (Array) => {
    return {
        type: 'BUBBLE_SORT_ITEM',
        payload: Array,
    }
}

export const selectionSortBalls = (Array) => {
    return {
        type: 'SELECTION_SORT_ITEM',
        payload: Array,
    }
}

export const mergeSortBalls = (Array) => {
    return {
        type: 'MERGE_SORT_ITEM',
        payload: Array,
    }
}

export const quickSortBalls = (Array) => {
    return {
        type: 'QUICK_SORT_ITEM',
        payload: Array,
    }
}

export const insertionSortBalls = (Array) => {
    return {
        type: 'INSERTION_SORT_ITEM',
        payload: Array,
    }
}

export const countingSortBalls = (Array) => {
    return {
        type: 'COUNTING_SORT_ITEM',
        payload: Array,
    }
}

export const descSortBalls = Array => {
    return {
        type: 'Desc_SORT_ITEM',
        payload: Array,
    }    
}

export const unSortBalls = (Array) => {
    return {
        type: 'UN_SORT',
        payload: Array,
    }
}