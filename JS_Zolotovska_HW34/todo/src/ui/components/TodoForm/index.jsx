import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Form, Field } from 'react-final-form';
import selectors from "../../../engine/todo/redux/selectors";
import { setDataAsyncAction } from "../../../engine/todo/saga/asyncActions";
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DirectionsIcon from '@mui/icons-material/Directions';
import Container from "./styles.jsx";

export function TodoForm() {

    const dispatch = useDispatch();
    const loading = useSelector(selectors.loading);
    const items = useSelector(selectors.items);
    const [error, setError] = useState('');

    const onSubmit = (values) => {
        if (values.textInput) {
            const taskExists = items.some(item => item.text.toLowerCase() === values.textInput.toLowerCase());
            if (taskExists) {
                setError('Ця задача вже існує!');
                return;
            }
            dispatch(setDataAsyncAction(values.textInput));
            setError(''); 
        }
    };

    return (
        <div>
            <Typography component="h1" sx={{ fontSize: '40px' }}>TODO</Typography>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <Container component="form" onSubmit={handleSubmit}>
                        <Field name="textInput">
                            {({ input }) => (
                                <InputBase
                                    {...input}
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Input text"
                                    inputProps={{ 'aria-label': 'input text' }}
                                    disabled={loading}
                                />
                            )}
                        </Field>
                        {error && <Typography color="error">{error}</Typography>}
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton 
                            color="primary" 
                            sx={{ p: '10px' }} 
                            aria-label="add task"
                            type="submit"
                            disabled={loading}
                        >
                            <DirectionsIcon />
                        </IconButton>
                    </Container>
                )}
            />
        </div>
    );
}
