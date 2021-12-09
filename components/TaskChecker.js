import React, { useState } from 'react';
import { Box, Fab, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Typography } from '@material-ui/core';
import NavigateNext from '@material-ui/icons/NavigateNext';

const styles = {
    largeIcon: {
        fontSize: 75
    },
    element: {
        padding: '0px 75px 50px'
    },
    title: {
        padding: '50px 50px 25px'
    },
    bottomButton: {
        padding: '0px 50px 50px',
        textAlign: 'center'
    }
}

const NEXT = 2;

export default function TaskChecker(props) {

    const [values, setValues] = useState({
        food: false,
        water: false,
        activity: false
    });

    const handleChange = (id, value) => {
        console.log(value)
        setValues({
            ...values,
            [id]: value
        });
    }

    const submit = () => {
        props.handleEntryValues({
            food: values.food,
            water: values.water,
            activity: values.activity
        })
        props.handlePageToggle(NEXT);
    }

    const questions = [
        { q: 'Eaten lately?', id: 'food' },
        { q: 'Had a full glass of water?', id: 'water' },
        { q: 'Done a physical activity?', id: 'activity' },
    ];

    // Generate fields based on questions.
    const fields = questions.map((qa) => {
        return (
            <div style={styles.element} key={qa.id}>
                <FormControl component='fieldset'>
                    <FormLabel component='legend'>{qa.q}</FormLabel>
                    <RadioGroup
                        row
                        aria-label='choices'
                        name='row-radio-buttons-group'
                        defaultValue='false'
                        id={qa.id}
                        onChange={e => { handleChange(qa.id, e.target.value) }}
                    >
                        <FormControlLabel value='true' control={<Radio />} label='Yes' />
                        <FormControlLabel value='false' control={<Radio />} label='No' />
                    </RadioGroup>
                </FormControl>
            </div>
        );
    });

    return (
        <Paper>
            <Box>
                <Typography
                    style={styles.title}
                    align='center'
                    variant='h3'
                    gutterBottom
                >
                    Have you...
                </Typography>
                {fields}
                <div style={styles.bottomButton}>
                    <Fab onClick={submit}>
                        <NavigateNext />
                    </Fab>
                </div>
            </Box>
        </Paper>
    );

}