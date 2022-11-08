import React from 'react';
import {Button} from "@mui/material";
import {Add, Settings} from "@mui/icons-material";


const Practice2 = () => {
    return (
        <>
            <Button
                startIcon={<Settings/>}
                variant="contained"
                color="secondary"
                size="small"
            >Settings</Button>
            <Button
                startIcon={<Add/>}
                variant="contained"
                color="primary"
                size="small"
            >Add</Button>
            <Button
                variant="outlined"
                disabled
            >Outlined</Button>
        </>
    );
};

export default Practice2;
