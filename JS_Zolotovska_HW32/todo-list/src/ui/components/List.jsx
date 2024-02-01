import { ListItem } from "./ListItem";
import selectors from "../../engine/todo/selectors";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getData } from "../../engine/todo/thunks"

export function List() {
    const items = useSelector(selectors.items);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData())
    }, []);
    return (
        <>
            <br />
            <h1>Todos</h1>
            {
                    items.length === 0
                    ? <span>No data</span>
                    : (
                        <ul className="list">
                        {items.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
                        </ul>
                    )
            }
        </>
    )
}