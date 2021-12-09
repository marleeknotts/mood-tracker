import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';

const styles = {
    aboutText: {
        padding: '25px 50px 50px'
    },
    title: {
        paddingTop: 50
    },
    credit: {
        paddingBottom: 25
    }
}

export default function MoodSelector(props) {

    return (
        <Paper>
            <Box>
                <Typography
                    style={styles.title}
                    align='center'
                    variant='h3'
                    gutterBottom
                >
                    About
                </Typography>
                <Typography
                    style={styles.aboutText}
                    display='block'
                    align='center'
                    variant='subtitle1'
                >
                    This is a very simple app built to track your mood throughout the day. <br />
                    It collects your information and generates short reports that you can view later. <br />
                    <b>Take care of yourself!</b> 
                    <br />
                    ☆☆☆
                </Typography>
                <Typography
                    style={styles.credit}
                    align='center'
                    variant='subtitle2'
                    gutterBottom
                >
                    Built by Kristin Marlee Knotts
                </Typography>
            </Box>
        </Paper>
    );

}