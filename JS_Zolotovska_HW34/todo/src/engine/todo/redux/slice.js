import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'todo',
    initialState: {
        items: [],
        filteredItems: [],
        loading: true,
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload; 
            state.filteredItems = action.payload; 
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        deleteItem: (state, action) => {
            state.items.splice(action.payload, 1);
        },
        toggleComplete: (state, action) => {
            const item = state.items[action.payload];
            item.completed = !item.completed;
        },
        setFilteredItems: (state, action) => {
        state.filteredItems = action.payload;
         },
    }
});

export default slice;

