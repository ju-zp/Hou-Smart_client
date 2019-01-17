const board = (state = [], action) => {
    switch(action.type){
        case 'SET_BOARDS':
            return action.payload
        
        default: 
            return state
    }
}

export default board