// import * as testSaga from './testSaga';
import * as entriesSaga from './entriesSaga';

export function initSagas(sagaMiddleware){
    //runs generator functions from entriesSaga
    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    // Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}