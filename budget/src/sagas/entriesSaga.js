//sagas: run functions with actions called and manipulates the payload
//function names are never actually called, are triggered by 'yield' actions
import { call, fork, put, take } from 'redux-saga/effects'
import entriesTypes, { populateEntries, populateEntryDetails } from '../actions/entries.actions';
import axios from 'axios';

export function* getAllEntries() {
    //no parentheses if no props
    yield take(getAllEntries);
    const { data } = yield call(axios, 'http://localhost:3001/entries');

    //populates entries with result from call

    // yield put({ type: entriesTypes.POPULATE_ENTRIES, payload: result.data });
    //^this replaced with (below):  
    //because it calls the same action and passes in the payload
    yield put(populateEntries(data));
}

export function* getEntryDetails(id) {
    const { data } = yield call(axios, `http://localhost:3001/values/${id}`);

    // yield put({ type: types.POPULATE_ENTRY_DETAILS, payload: {id, entry: data }});
    yield put(populateEntryDetails(id, data));
}

export function* getAllEntriesDetails() {
    const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);

    for (let index = 0; index < payload.length; index++) {
        const entry = payload[index];
        yield fork(getEntryDetails, entry.id);
    }
}