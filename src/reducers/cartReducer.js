const cartReducer = (state=[],action) => {
    switch(action.type){
        case "ITEM_ADDED":
            return [...state, action.payload]
        case "ITEM_REMOVED":
            return state = action.payload.filter(i => i.id !== action.id)
        default:
            return state
    }
}

export default cartReducer