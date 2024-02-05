import { configureStore } from "@reduxjs/toolkit";
import todoSlice from '../engine/todo/redux/slice';
import sagaMiddleWare from "./middleware/saga";
import { rootSaga } from "./middleware/rootSaga";

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    },
    middleware: () => [sagaMiddleWare]
})

sagaMiddleWare.run(rootSaga)