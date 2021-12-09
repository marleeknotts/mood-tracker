import React from 'react';
import { Box, Button, Paper, Typography } from '@material-ui/core';
import SentimentVeryDissatisfiedOutlined from '@material-ui/icons/SentimentVeryDissatisfiedOutlined';
import SentimentDissatisfiedOutlined from '@material-ui/icons/SentimentDissatisfiedOutlined';
import SentimentSatisfiedOutlined from '@material-ui/icons/SentimentSatisfiedOutlined';
import SentimentVerySatisfiedOutlined from '@material-ui/icons/SentimentVerySatisfiedOutlined';

const styles = {
    largeIcon: {
        fontSize: 75
    },
    largeButton: {
        padding: 50
    },
    title: {
        paddingTop: 50
    }
}

const NEXT = 1;

export default function MoodSelector(props) {

    const submit = (mood) => {
        props.handleEntryValues({
            mood: mood
        })
        props.handlePageToggle(NEXT);
    }

    // Generate all the buttons.
    const buttons = [
        <Button
            style={styles.largeButton}
            value={0}
            onClick={e => { submit("Very Unhappy") }}
            key='vb'
        >
            <SentimentVeryDissatisfiedOutlined style={styles.largeIcon} />
        </Button>,
        <Button
            style={styles.largeButton}
            value={1}
            onClick={e => { submit("Unhappy") }}
            key='b'
        >
            <SentimentDissatisfiedOutlined style={styles.largeIcon} />
        </Button>,
        <Button
            style={styles.largeButton}
            value={2}
            onClick={e => { submit("Happy") }}
            key='g'
        >
            <SentimentSatisfiedOutlined style={styles.largeIcon} />
        </Button>,
        <Button
            style={styles.largeButton}
            value={3}
            onClick={e => { submit("Very Happy") }}
            key='vg'
        >
            <SentimentVerySatisfiedOutlined style={styles.largeIcon} />
        </Button>
    ];

    return (
        <Paper>
            <Box>
                <Typography
                    style={styles.title}
                    align='center'
                    variant='h3'
                    gutterBottom
                >
                    How are you feeling today?
                </Typography>
                {buttons}
            </Box>
        </Paper>
    );

}