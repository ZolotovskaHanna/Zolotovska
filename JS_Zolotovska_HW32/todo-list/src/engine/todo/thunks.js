import slice from "./slice";

const getData = () => {
    return (dispatch) => {
        const data = JSON.parse(localStorage.getItem('items'));
        dispatch(slice.actions.setItems(data))
        dispatch(slice.actions.setLoading(false))
    }
}
const setData = (event, items) => {
    return (dispatch) => {
        event.preventDefault();
        dispatch(slice.actions.setLoading(true))
        setTimeout(() => {
            dispatch(slice.actions.addItem(event.target.text_input.value))
            dispatch(slice.actions.setLoading(false))
        }, 3000)
        localStorage.setItem('items', JSON.stringify([...items, event.target.text_input.value]))
    }
}

const deleteData = (item) => {
    return (dispatch, getState) => {
        const updatedItems = getState().todo.items.filter(currentItem => currentItem !== item);
        dispatch(slice.actions.setItems(updatedItems));
        localStorage.setItem('items', JSON.stringify(updatedItems));
    }
}

export { getData, setData, deleteData }





