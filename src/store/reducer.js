const initialState = {
    mangoes: 0,
    appName: 'Market'
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADDMANGOES':
            return {
                ...state,
                mangoes: state.mangoes + action.value
            }
        case 'SUBTRACTMANGOES' :
            return {
                ...state,
                mangoes: state.mangoes - action.value
            }
        default:
            return state;
    }
}

export default rootReducer;