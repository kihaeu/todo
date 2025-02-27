import React, { useState } from 'react';
import EditTask from '../modals/EditTask';
import { Card as MUICard, CardContent, CardActions, Button, Typography } from '@mui/material';

const colors = {
    Work: {
        primaryColor: "#5D93E1",
        secondaryColor: "#ECF3FC"
    },
    Personal: {
        primaryColor: "#F9D288",
        secondaryColor: "#FEFAF1"
    },
    Shopping: {
        primaryColor: "#5DC250",
        secondaryColor: "#F2FAF1"
    },
    Other: {
        primaryColor: "#B964F7",
        secondaryColor: "#F3F0FD"
    }
};

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    };

    const updateTask = (obj) => {
        updateListArray(obj, index);
    };

    const handleDelete = () => {
        deleteTask(index);
    };

    const categoryColor = colors[taskObj.Category] || colors.Other;

    return (
        <MUICard style={{ borderLeft: `5px solid ${categoryColor.primaryColor}` }}>
            <CardContent style={{ backgroundColor: categoryColor.secondaryColor }}>
                <Typography variant="h5" component="div">{taskObj.Name}</Typography>
                <Typography variant="body2" color="textSecondary">{taskObj.Description}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => setModal(true)}>Edit</Button>
                <Button size="small" color="secondary" onClick={handleDelete}>Delete</Button>
            </CardActions>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </MUICard>
    );
};

export default Card;
