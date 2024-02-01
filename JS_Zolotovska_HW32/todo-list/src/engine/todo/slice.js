import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'todo',
    initialState: {
        items: [],
        loading: true,
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(item => item !== action.payload);
        },
    }
})

export const { setItems, addItem, setLoading, deleteItem } = slice.actions;
export default slice;