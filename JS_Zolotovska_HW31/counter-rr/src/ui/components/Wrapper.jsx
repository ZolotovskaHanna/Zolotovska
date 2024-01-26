import { useDispatch } from "react-redux";
import Button from "./Button";
import Content from "./Content";
import counterSlice from "../../engine/slice/counter";

export default function () {
    const dispatch = useDispatch();

    const onIncrement = () => {
        const action = counterSlice.actions.increment(); 
        dispatch(action)
    }
    const onDecrement = () => {
        const action = counterSlice.actions.decrement(); 
        dispatch(action)
    }

    return (
        <div>
            <Content />
            <p>
                <Button onClick={onIncrement}>+</Button>
                <Button onClick={onDecrement}>-</Button>
            </p>
        </div>
    )
}