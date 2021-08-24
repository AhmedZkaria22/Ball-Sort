import { BubbleSort, MergeSort, merge, SelectionSort, Shuffle, QuickSort, InsertionSort, CountingSort, BubbleSortRev, DescSort } from "../SortFuns";

const initialState = {
    balls: [
        { weight: 500 },    { weight: 300 },    { weight: 200 },
        { weight: 800 },    { weight: 600 },    { weight: 100 }, 
    ]
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return {
                ...state,
                balls: [    ...state.balls,     action.payload   ]
            };        

        case 'REMOVE_ITEM':
            return {
                ...state,
                balls: [    ...state.balls.filter((ball, i) => i !== action.payload)    ]
            };        

        case 'BUBBLE_SORT_ITEM':
            return {
                ...state,
                balls: [    ...BubbleSort(action.payload)    ]
            };        
                
        case 'SELECTION_SORT_ITEM':
            return {
                ...state,
                balls: [    ...SelectionSort(action.payload)    ]
            };        

        case 'MERGE_SORT_ITEM':
            return {
                ...state,
                balls: [    ...MergeSort(action.payload)    ]
            };        
                    
        case 'QUICK_SORT_ITEM':
            return {
                ...state,
                balls: [    ...QuickSort(action.payload)    ]
            };        

        case 'INSERTION_SORT_ITEM':
            return {
                ...state,
                balls: [    ...InsertionSort(action.payload)    ]
            }; 

        case 'COUNTING_SORT_ITEM':
            return {
                ...state,
                balls: [    ...CountingSort(action.payload)    ]
            };        
            
        case 'Desc_SORT_ITEM':
            return {
                ...state,
                balls: [    ...DescSort(action.payload)    ]
            };   

        case 'UN_SORT':
            return {
                ...state,
                balls: [    ...Shuffle(action.payload)    ]
            };        
    
        default: return state; 
    }
}

export default rootReducer