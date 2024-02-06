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
            state.items.splice(action.payload, 1);
        },     
    }
})

export default slice;



