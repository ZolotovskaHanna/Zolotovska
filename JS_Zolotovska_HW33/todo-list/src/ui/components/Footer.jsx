import { useDispatch, useSelector } from "react-redux";
import selectors from "../../engine/todo/redux/selectors";
import slice from "../../engine/todo/redux/slice";

export function Footer() {
    const items = useSelector(selectors.items);
    const dispatch = useDispatch();

   const onClear = () => {
        const payload = [];
        dispatch(slice.actions.setItems(payload))
    }
   
    return (  
        <div className="d-flex justify-content-between align-items-center">
            <span>Count: {items?.length || 0}</span>
            <button onClick={onClear}>Clear</button>
        </div>
    )
}

