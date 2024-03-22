import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAsyncAction, deleteDataAsyncAction, toggleCompleteAsyncAction } from '../../../engine/todo/saga/asyncActions';
import selectors from '../../../engine/todo/redux/selectors';
import { List as MUIList, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function TodoList() {

    const filteredItems = useSelector(selectors.filteredItems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataAsyncAction());
    }, [dispatch]);

    const handleDelete = index => {
        dispatch(deleteDataAsyncAction(index));
    };

    const handleToggleComplete = index => {
        dispatch(toggleCompleteAsyncAction(index));
    };
    
     const handleListItemClick = index => {
        dispatch(toggleCompleteAsyncAction(index));
    };

    return (
        <Box sx={{ marginTop: '20px', width: '100%' }}>
            <Typography component="h2" sx={{ fontSize: '30px' }}>TODO</Typography>
            <MUIList sx={{ bgcolor: 'background.paper' }}>
                {filteredItems.map((item, index) => (
                    <ListItem
                        key={index}
                        disablePadding style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                        <ListItemButton onClick={() => handleListItemClick(index)}>
                            <ListItemIcon>
                                <Checkbox 
                                    edge="start" 
                                    disableRipple 
                                    checked={item.completed}
                                    onClick={(e) => {
                                         e.stopPropagation();
                                        handleToggleComplete(index)
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                            <IconButton onClick={(e) => {
                                 e.stopPropagation();
                                handleDelete(index)}}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemButton>
                    </ListItem>
                ))}
            </MUIList>
        </Box>
    );
}


 

   