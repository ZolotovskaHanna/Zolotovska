import { put, select } from 'redux-saga/effects';
import slice from '../../redux/slice';
import Selectors from '../../redux/selectors';

export function* deleteDataWorker(action) {
    const items = yield select(Selectors.items);
    const updatedItems = [...items];
    updatedItems.splice(action.payload, 1);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    yield put(slice.actions.setItems(updatedItems));
}

