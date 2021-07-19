import { delay, take, put, call, fork, takeEvery, cancelled, cancel, takeLatest } from 'redux-saga/effects';

function double(number) {
    return number * 2;
}

export function* testSaga(){
    while (true) {
        console.log("Starting saga");
        const state = yield take('TEST_MESSAGE');
        const a = yield call(double, 2);
        const b = yield double(3);
        console.log(a);
        console.log(b);
        console.log("Finish saga function", state);
    }
}

function* doNothing() {
    console.log('I have been called');
    yield delay(1000);
    console.log('I\'m doing nothing');
}

export function* testSagaFork() {
    while(true) {
        yield take('TEST_MESSAGE_2');
        yield fork(doNothing);
        yield fork(doNothing);
        yield fork(doNothing);
    }
}

function* testSagaTakeEveryProcess({payload}) {
    console.log(`Starting process for index ${payload}`);
    yield delay(3000);
    console.log(`Ending process for index ${payload}`);

}

export function* testSagaTakeEvery() {
    const { payload } = yield takeEvery('TEST_MESSAGE_3', testSagaTakeEveryProcess);
    console.log(`finished takeEvery for index ${payload}`);
}

export function* testSagaCancel() {
    yield take('TEST_MESSAGE_4');
    const handleCancel = yield fork(infinitySaga);
    yield delay(3000);
    yield cancel(handleCancel);
}

export function* testSagaTakeLatest() {
    yield takeLatest('TEST_MESSAGE_5', infinitySaga);
}

function* infinitySaga() {
    console.log('starting infinite saga');
    let index = 0;
    while (true) {
        index++
        try {
            console.log(`inside infinite loop ${index}`);
            yield delay(1000);
        } catch(error) {
            console.error('Error happened: ', error);
        } finally {
            console.log('The fork was cancelled?', yield cancelled());
        }
    }
}

//dispatch to tell what to start using 'put'
export function* dispatchTest(){
    let index = 0;
    // yield put({type: 'TEST_MESSAGE_5', payload: index })

    while(true) {
        yield delay(5000);
        yield put({ type: 'TEST_MESSAGE_5', payload: index});
        index++;
    }
}

//take waits for a specific event to be completed
//put calls a function to run similar to dispatch with type and payload
//call runs a function just as normal but with function being first argument and prop being second

//call waits for result, fork runs calls simultaneously

//takeEvery 
//cancel cancel data from fork and cancelled tells whether fork was cancelled or not

//takeLatest creates a new fork every time a message is received, but if it receives a duplicate, it'll cancel the old and start a new