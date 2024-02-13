import { takeEvery } from "redux-saga/effects";
import { getDataWorker } from './workers/getData';
import { setDataWorker } from './workers/setData';
import { deleteDataWorker } from './workers/deleteData';
import { toggleCompleteWorker } from "./workers/toggleComplete";
import { searchTasksWorker } from "./workers/searchTasks";
import { getDataAsyncAction, setDataAsyncAction, deleteDataAsyncAction, toggleCompleteAsyncAction, searchTasksAsyncAction } from './asyncActions';

export function* watcher() {
    yield takeEvery(getDataAsyncAction.type, getDataWorker);
    yield takeEvery(setDataAsyncAction.type, setDataWorker);
    yield takeEvery(deleteDataAsyncAction.type, deleteDataWorker);
    yield takeEvery(toggleCompleteAsyncAction.type, toggleCompleteWorker);
    yield takeEvery(searchTasksAsyncAction.type, searchTasksWorker);
}


   


