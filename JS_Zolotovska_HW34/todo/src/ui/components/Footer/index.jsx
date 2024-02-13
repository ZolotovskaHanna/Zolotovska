import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import selectors from "../../../engine/todo/redux/selectors";
import slice from "../../../engine/todo/redux/slice";
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import { searchTasksAsyncAction } from '../../../engine/todo/saga/asyncActions';

export default function Footer() {
    const items = useSelector(selectors.items);
    const dispatch = useDispatch();

    const onClear = () => {
        const payload = [];
        dispatch(slice.actions.setItems(payload))
    }

    const onSearchChange = (event) => {
        dispatch(searchTasksAsyncAction(event.target.value));
    };

    return (
        <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
            p="10px"
        >
            <Chip label={`Count: ${items.length}`} />
            <Button variant="contained" startIcon={<DeleteIcon />} onClick={onClear}>
                Clear
            </Button>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={onSearchChange}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Box>
    );
}

