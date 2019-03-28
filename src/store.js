import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunkReducer, LoaderReducer } from './redux/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    thunkReducer,
    LoaderReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;