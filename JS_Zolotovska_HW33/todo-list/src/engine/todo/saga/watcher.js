import { takeEvery } from "redux-saga/effects";
import { getDataWorker } from './workers/getData';
import { setDataWorker } from './workers/setData';
import { deleteDataWorker } from './workers/deleteData';
import { getDataAsyncAction, setDataAsyncAction, deleteDataAsyncAction } from './asyncActions'

export function* watcher() {
    yield takeEvery(getDataAsyncAction.type, getDataWorker);
    yield takeEvery(setDataAsyncAction.type, setDataWorker);
    yield takeEvery(deleteDataAsyncAction.type, deleteDataWorker);
}


   

