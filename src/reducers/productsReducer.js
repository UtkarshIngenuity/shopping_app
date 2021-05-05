

const productReducer = (state = [], action) => {
    
        switch(action.type){
            case "SHOW_PRODUCTS":
                return [...state, action.payload]
            default :
                return state

       
    }
}

export default productReducer