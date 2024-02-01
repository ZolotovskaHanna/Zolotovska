import { useDispatch } from "react-redux";
import { deleteData } from "../../engine/todo/thunks";

export function ListItem(props) {
    const dispatch = useDispatch();
    const { children } = props;

    const handleDelete = () => {
        dispatch(deleteData(children));
    };

    return (
        <li className="list_component">
            <label htmlFor={`checked_${children}`} className="list_component_text">
                {children}
            </label>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
}