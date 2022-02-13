import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import React from "react";


export const ToolBar: React.FC = () => {
    return (<Box>
        <AppBar position="static">
            <Toolbar variant="dense" style={{background: '#FFDAB9', height: '50px'}}>
                <Typography variant="h5" color="textPrimary" component="div">
                    Network
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>)
}
