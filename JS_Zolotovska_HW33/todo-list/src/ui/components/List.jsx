import { ListItem } from "./ListItem";
import selectors from "../../engine/todo/redux/selectors";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getDataAsyncAction } from "../../engine/todo/saga/asyncActions";

export function List() {
    const items = useSelector(selectors.items);
    const loading = useSelector(selectors.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataAsyncAction());
    }, []);

    return (
        <>
            {loading && (
                <div className="d-flex justify-content-center mt-3">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            )}
            <br />
            {!loading && items.length === 0 ? (
                <span>No data</span>
            ) : (
                <ul className="list">
                   {items.map((item, index) => <ListItem key={index} item={item} index={index} />)}
                </ul>
            )}
        </>
    );
}


