export const counterReducer = (state=0, action) => {
    switch (action.type){
        case 'ITEM_ADDED':
            return state +1
        case 'ITEM_REMOVED':
            return state -1
        default:
            return state
    }
}
