  //reducer
  //reducer should not have side effects, should not by async, should be pure (not mutating state or action)
const reducer = (state = initialEntries, action) => {
    let newEntries = state;

    switch(action.type) {
        case 'ADD_ENTRY':
            newEntries = state.concat({...action.payload});
            return newEntries;

        case 'REMOVE_ENTRY':
            newEntries = state.filter(entry => entry.id !== action.payload.id);
            return newEntries;

        case 'UPDATE_ENTRY':
            const index = state.findIndex(entry => entry.id === action.payload.id);
            newEntries[index] = {...action.payload.entry};
            return newEntries;

        default:
            return state;
    }
};

export default reducer;

let initialEntries = [
    {
        id:1,
        description:"Work Income",
        value:1000.00,
        isExpense:false
    },
    {
        id:2,
        description:"Water Bill",
        value:20.00,
        isExpense:true
    },
    {
        id:3,
        description:"Rent",
        value: 300.00,
        isExpense:true
    },
    {
        id:4,
        description:"Power Bill",
        value:50.00,
        isExpense:true
    }
]