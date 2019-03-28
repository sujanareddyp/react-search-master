import axios from 'axios';

const apiStart = () => {
    return ({
        type: "API_START"
    })
}

const apiSuccess = (data) => {
    return ({
        type: "API_SUCCESS",
        data: data
    })
}

const apiError = (error) => {
    return ({
        type: "API_ERROR",
        error: error
    })
}

export const thunkFunction = () => {
    return (dispatch) => {
        dispatch(apiStart());
        axios.get('https://api.github.com/search/repositories?q=TEST').then((response) => {
            console.log(response.data);
            dispatch(apiSuccess(response.data));
            dispatch({
                type: "SHOW_LOADING"
              })
        }).catch(
            (error) => {
                console.log(error);
                dispatch(apiError(error));
                dispatch({
                    type: "SHOW_LOADING"
                  })
            }
        )
    }
}