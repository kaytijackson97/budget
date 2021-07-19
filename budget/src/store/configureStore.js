import { applyMiddleware, combineReducers, createStore } from 'redux';
import entriesReducer from '../reducers/entries.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import modalsReducer from '../reducers/modals.reducer';
import createSagaMiddleware from 'redux-saga';
import { initSagas } from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

//Redux store with combined reducer
//access reducers with useSelector hook (ex. useSelector((state) => state.entries)) -- Redux udemy lesson 41
const configureStore = () => {
    const store = createStore(
        combineReducers({
            entries: entriesReducer,
            modals: modalsReducer
        }), 
        composeWithDevTools(
            applyMiddleware(...middlewares)
        )
    );

    //runs all sagas in the initSaga files
    initSagas(sagaMiddleware);
    return store;
}

export default configureStore;

