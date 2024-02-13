import { put, delay, select } from 'redux-saga/effects';
import slice from '../../redux/slice';
import Selectors from '../../redux/selectors';

export function* setDataWorker(action) {
    yield put(slice.actions.setLoading(true));
    yield delay(3000);
    const newItem = { text: action.payload, completed: false };
    const items = yield select(Selectors.items);
    const completedIndex = items.findIndex(item => item.completed);
    let updatedItems;
    if (completedIndex !== -1) {
        updatedItems = [...items.slice(0, completedIndex), newItem, ...items.slice(completedIndex)];
    } else {
        updatedItems = [...items, newItem];
    }
    localStorage.setItem('items', JSON.stringify(updatedItems));
    yield put(slice.actions.setItems(updatedItems));
    yield put(slice.actions.setLoading(false));
}







   
   