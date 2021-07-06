import { combineReducers, createStore } from 'redux';
import entriesReducer from '../reducers/entries.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import modalsReducer from '../reducers/modals.reducer';

//Redux store with combined reducer
//access reducers with useSelector hook (ex. useSelector((state) => state.entries)) -- Redux udemy lesson 41
const configureStore = () => {
    return createStore(
        combineReducers({
            entries: entriesReducer,
            modals: modalsReducer
        }), composeWithDevTools()
    );
}

export default configureStore;

