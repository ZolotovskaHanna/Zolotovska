import {setData} from "../../engine/todo/thunks";
import selectors from "../../engine/todo/selectors";
import { Button } from "./Button";
import {useDispatch, useSelector} from "react-redux";

export function Form() {
    const dispatch = useDispatch();
    const loading = useSelector(selectors.loading);
    const items = useSelector(selectors.items);

       const onSubmit = (event) => {
        dispatch(setData(event, items))
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <input className="form-control form-control-lg" name="text_input" type="text" />
            <Button className="btn-primary" disabled={loading}>Send</Button>
        </form>
    )
}
