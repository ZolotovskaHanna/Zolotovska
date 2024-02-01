import { useDispatch, useSelector } from "react-redux";
import selectors from "../../engine/todo/selectors";
import slice from "../../engine/todo/slice";

export function Footer() {
    const items = useSelector(selectors.items);
    const dispatch = useDispatch();

   const onClear = () => {
        const payload = [];
        dispatch(slice.actions.setItems(payload))
    }
   
    return (  
        <div className="d-flex justify-content-between">
            <span>Count: {items.length}</span>
            <button onClick={onClear}>Clear</button>
       </div>
    )
}