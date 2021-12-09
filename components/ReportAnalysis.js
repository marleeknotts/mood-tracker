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
    layout: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    }
}

export default function ReportAnalysis(props) {

    const { reports } = props;

    let filteredData = [];
    let moods = {
        "Very Unhappy": 0,
        "Unhappy": 0,
        "Happy": 0,
        "Very Happy": 0
    };
    let analyses = [];
    let currentIndex = 0;

    // Helper function to eliminate duplicate analyses
    const checkForUnique = (obj) => {
        let isUnique = !filteredData.some((el, i) => {
            currentIndex = i;
            return (el.mood === obj.mood && el.action === obj.action);
        });

        if (isUnique) {
            filteredData.push(obj);
        }
        else {
            filteredData[currentIndex] = { ...filteredData[currentIndex], count: filteredData[currentIndex].count + 1 };
        }
    }

    // Map out all possible analyses
    reports.map(r => {
        let foodObj = { mood: r.mood, action: r.food ? "eating" : "not eating", count: 1 };
        let waterObj = { mood: r.mood, action: r.water ? "drinking water" : "not drinking water", count: 1 };
        let activityObj = { mood: r.mood, action: r.activity ? "getting exercise" : "not getting exercise", count: 1 };

        checkForUnique(foodObj);
        checkForUnique(waterObj);
        checkForUnique(activityObj);

        moods = { ...moods, [r.mood]: moods[r.mood] + 1 };
    });

    analyses = filteredData.map(d => {
        let correlation = parseFloat(d.count) / parseFloat(moods[d.mood]);
        return (
            { mood: d.mood, action: d.action, correlation: correlation }
        );
    });

    // Generate a card based on every possible analysis.
    const analysisCards = analyses.map((r) => {
        return (
            <div style={styles.card} key={r.time}>
                <Card>
                    <CardContent>
                        <div style={styles.layout}>
                            <Typography variant='button' component='div' style={styles.text}>
                                <b>It looks like <i><u>{r.action}</u></i> has a:</b>
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color='secondary' gutterBottom>
                                <b>{Math.round(r.correlation * 100.0)}% CORRELATION</b>
                            </Typography>
                            <Typography variant='button' component='div'>
                                <b>with your reports of feeling <i><u>{r.mood}</u></i>.</b>
                            </Typography>
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
                        Mood Analysis
                    </Typography>
                </Box>
            </Paper>
            {analysisCards.length == 0 && <Card>
                <CardHeader
                    title={'No information to analyze!'}
                    subheader={'Use the menu to create a new report.'}
                />
            </Card>}
            {analysisCards}
        </div>
    );

}