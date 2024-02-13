import { put, select } from "redux-saga/effects";
import slice from "../../redux/slice";
import Selectors from '../../redux/selectors';

export function* searchTasksWorker(action) {
    const searchText = action.payload.toLowerCase();
    const items = yield select(Selectors.items);
    const filteredItems = searchText ? items.filter(item => 
        item.text.toLowerCase().includes(searchText)
    ) : items;
    yield put(slice.actions.setFilteredItems(filteredItems));
}








