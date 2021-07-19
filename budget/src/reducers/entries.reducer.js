import entriesTypes from '../actions/entries.actions';

  //reducer: what should happen when called
  //reducer should not have side effects, should not by async, should be pure (not mutating state or action)
const reducer = (state = initialEntries, action) => {
    let newEntries = state;

    switch(action.type) {
        case entriesTypes.POPULATE_ENTRIES:
            return action.payload;

        case entriesTypes.ADD_ENTRY:
            newEntries = state.concat({...action.payload});
            return newEntries;

        case entriesTypes.REMOVE_ENTRY:
            newEntries = state.filter(entry => entry.id !== action.payload.id);
            return newEntries;

        case entriesTypes.POPULATE_ENTRY_DETAILS:
        case entriesTypes.UPDATE_ENTRY:
            newEntries = [...state];
            const index = state.findIndex((entry) => entry.id === action.payload.id);
            newEntries[index] = {...newEntries[index], ...action.payload.entry};
            return newEntries;

        default:
            return state;
    }
};

export default reducer;

let initialEntries = [];