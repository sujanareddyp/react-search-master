export const thunkReducer = (state = {
    data: [],
    error: null
}, action) => {
    switch (action.type) {
        case "API_SUCCESS": return Object.assign({}, state, { data: action.data, error: null })
        case "API_ERROR": return Object.assign({}, state, { data: [], error: action.error })
        default: return state;
    }
}

export const LoaderReducer = (state = {loading: false}, action) => {
    switch (action.type) {
        case "API_START": return Object.assign({}, state, { loading: true })
        case "API_SUCCESS": return Object.assign({}, state, { loading: false })
        case "API_ERROR": return Object.assign({}, state, { loading: false })
        case "NEW_API_START": return Object.assign({}, state, { loading: true })
        case "NEW_API_SUCCESS": return Object.assign({}, state, { loading: false })
        case "NEW_API_ERROR": return Object.assign({}, state, { loading: false })
        case "SHOW_LOADING": return Object.assign({}, state, { loading: true })
        default: return state;
    }
}