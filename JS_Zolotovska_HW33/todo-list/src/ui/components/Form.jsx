import selectors from "../../engine/todo/redux/selectors";
import { setDataAsyncAction } from "../../engine/todo/saga/asyncActions";
import { Button } from "./Button";
import {useDispatch, useSelector} from "react-redux";

export function Form() {
    const dispatch = useDispatch();
    const loading = useSelector(selectors.loading);
    const onSubmit = (event) => {
        dispatch(setDataAsyncAction(event))
    }
    return (
        <form className="form" onSubmit={onSubmit}>
            <input className="form-control form-control-lg" name="text_input" type="text"/>
            <Button className="btn-primary" disabled={loading}>Send</Button>
        </form>
    )
}