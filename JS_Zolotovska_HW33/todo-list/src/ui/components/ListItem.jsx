import { useDispatch } from "react-redux";
import { deleteDataAsyncAction } from '../../engine/todo/saga/asyncActions';

export function ListItem({ item, index }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteDataAsyncAction(index));
    };

    return (
        <li className="list_component">
            <label htmlFor={`checked_${item}`} className="list_component_text">
                {item}
            </label>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
}



