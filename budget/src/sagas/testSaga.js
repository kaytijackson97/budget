import { delay, take, put, call, fork } from 'redux-saga/effects';

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

//yield is every time the function is returned, it'll return something different (ie 1, 2, 3)
export function* dispatchTest(){
    while(true) {
        yield delay(5000);
        yield put({type: 'TEST_MESSAGE_2', payload: 1000 })
    }
}

//take waits for a specific event to be completed
//put calls a function to run similar to dispatch with type and payload
//call runs a function just as normal but with function being first argument and prop being second

//call waits for result, fork runs calls simultaneously