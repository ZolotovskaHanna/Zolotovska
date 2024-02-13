import { put, select } from 'redux-saga/effects';
import slice from '../../redux/slice';
import Selectors from '../../redux/selectors';

export function* toggleCompleteWorker(action) {
    const items = yield select(Selectors.items);
    const updatedItems = [...items];
    updatedItems[action.payload] = {
        ...updatedItems[action.payload],
        completed: !updatedItems[action.payload].completed
    };
    updatedItems.sort((a, b) => {
        if (a.completed === b.completed) return 0;
        return a.completed ? 1 : -1;
    });
    localStorage.setItem('items', JSON.stringify(updatedItems));
    yield put(slice.actions.setItems(updatedItems));
}

