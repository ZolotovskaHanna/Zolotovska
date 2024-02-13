import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Box marginBottom={10}> 
            <AppBar position="static">
                <Toolbar className="flex justify-between">
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        TODO
                    </Typography>
                    <Box>
                        <Button color="inherit" component={Link} to="/">
                            Home
                        </Button>
                        <Button color="inherit" component={Link} to="/info">
                            Info
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;

