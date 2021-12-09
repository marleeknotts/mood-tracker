import React, { useState } from 'react';
import { Box, Button, Fab, Paper, TextField, Typography } from '@material-ui/core';
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

const NEXT = 3;

export default function MoodSelector(props) {

    const { handleEntryValues, handleNewReport, handlePageToggle } = props;
    const [journalText, setJournalText] = useState('')

    const handleJournalTextChange = e => {
        setJournalText(e.target.value);
    }

    const submit = () => {
        handleEntryValues({
            journal: journalText
        });
        handleNewReport();
        handlePageToggle(NEXT);
    }

    return (
        <Paper>
            <Box>
                <Typography
                    style={styles.title}
                    align='center'
                    variant='h3'
                    gutterBottom
                >
                    What's on your mind?
                </Typography>
                <TextField
                    multiline
                    rows={4}
                    placeholder='Thinking about...'
                    variant='filled'
                    style={styles.element}
                    fullWidth
                    value={journalText}
                    onChange={handleJournalTextChange}
                />
                <div style={styles.bottomButton}>
                    <Fab onClick={submit}>
                        <NavigateNext />
                    </Fab>
                </div>
            </Box>
        </Paper>
    );

}