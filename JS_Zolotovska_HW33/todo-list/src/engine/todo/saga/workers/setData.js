import { put, delay, select } from 'redux-saga/effects';
import slice from '../../redux/slice';
import Selectors from '../../redux/selectors';

export function* setDataWorker(action) {
    const { payload } = action;
    yield put(slice.actions.setLoading(true));
    payload.preventDefault();
    yield delay(3000);
    const newItem = payload.target.text_input.value;
    yield put(slice.actions.addItem(newItem));
    const items = yield select(Selectors.items);
    localStorage.setItem('items', JSON.stringify(items));
    yield put(slice.actions.setLoading(false));
}



