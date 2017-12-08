import { combineReducers } from 'redux'

const reducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                    ...state,
                    {
                        id: action.id,
                        text: action.payload
                    }
                ]
        case "DELETE_TODO":
        console.log(action.id)
            return state.filter((i) => i.id !== action.id);

        default:
            return state;
    }
}

export default combineReducers({
  todos: reducer
})
