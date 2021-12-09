import React from 'react';
import { Box, Card, CardContent, CardHeader, Paper, Typography } from '@material-ui/core';

const styles = {
    card: {
        paddingBottom: 15
    },
    title: {
        padding: 50
    },
    text: {
        paddingBottom: 5
    },
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    layout: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    }
}

export default function ReportCollection(props) {

    const { reports } = props;

    // Generate a card based on every report.
    const reportCards = reports.map((r, index) => {
        return (
            <div style={styles.card} key='r.time'>
                <Card>
                    <CardHeader
                        title={r.date}
                        subheader={r.time}
                    />
                    <CardContent>
                        <div style={styles.container}>
                            <div style={styles.layout}>
                                <Typography sx={{ fontSize: 14 }} color='secondary' gutterBottom>
                                    <i>Mood</i>
                                </Typography>
                                <Typography variant='button' component='div' style={styles.text}>
                                    <b>{r.mood}</b>
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color='secondary' gutterBottom>
                                    <i>Status</i>
                                </Typography>
                                <Typography variant='body2'>
                                    <b>Food:</b> {r.food ? 'Adequate' : 'Inadequate'}
                                    <br />
                                    <b>Water:</b> {r.water ? 'Adequate' : 'Inadequate'}
                                    <br />
                                    <b>Activity:</b> {r.activity ? 'Adequate' : 'Inadequate'}
                                </Typography>
                            </div>
                            <div style={styles.layout}>
                                <Typography sx={{ fontSize: 14 }} color='secondary' gutterBottom>
                                    <i>Journal Entry</i>
                                </Typography>
                                <Typography variant='subtitle2' component='div' style={styles.text}>
                                    {r.journal}
                                </Typography>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    })

    // Display all cards.
    return (
        <div>
            <Paper>
                <Box>
                    <Typography
                        style={styles.title}
                        align='center'
                        variant='h3'
                        gutterBottom
                    >
                        Mood Reports
                    </Typography>
                </Box>
            </Paper>
            {reportCards.length == 0 && <Card>
                <CardHeader
                    title={'No reports found!'}
                    subheader={'Use the menu to create a new one.'}
                />
            </Card>}
            {reportCards}
        </div>
    );

}