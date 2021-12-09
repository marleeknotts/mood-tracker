import React, { useState } from 'react';
import Fade from './Fade';
import MoodSelector from './MoodSelector';
import MenuAppBar from './MenuAppBar';
import TaskChecker from './TaskChecker';
import JournalPost from './JournalPost';
import ReportCollection from './ReportCollection';
import ReportAnalysis from './ReportAnalysis';
import About from './About';

export default function Display() {

    const [page, setPage] = useState(0);
    const [reports, setReports] = useState([]);
    const [fadeRunning, setFadeRunning] = useState(false);

    let currentEntry = {};

    // Functions for handling state changes.
    const handleEntryValues = (values) => {
        currentEntry = { ...currentEntry, ...values };
        console.log(currentEntry);
    }

    const handlePageToggle = (newPage) => {
        if (newPage == 0) {
            currentEntry = {};
        }
        setFadeRunning(true);
        setPage(newPage);
    }

    // Holds off on starting new animations until the first one is complete.
    const fadeCallback = (running) => {
        setFadeRunning(running);
    }

    // Functions for adding and deleting reports.
    const handleNewReport = () => {
        var now = new Date();
        var date = now.toLocaleDateString('default', { year: 'numeric', month: 'long', day: 'numeric' });
        var time = now.toLocaleTimeString();
        currentEntry = { ...currentEntry, 
            date: date,
            time: time
        };
        setReports(reports.push(currentEntry));
    }

    // Generate items.
    const [basicItems] = useState([
        {
            content: <MoodSelector
                handleEntryValues={handleEntryValues}
                handlePageToggle={handlePageToggle}
            />,
            id: 0
        },
        {
            content: <TaskChecker
                handleEntryValues={handleEntryValues}
                handlePageToggle={handlePageToggle}
            />,
            id: 1
        },
        {
            content: <JournalPost
                handleEntryValues={handleEntryValues}
                handlePageToggle={handlePageToggle}
                handleNewReport={handleNewReport}
            />,
            id: 2
        },
        {
            content: <ReportCollection
                reports={reports}
            />,
            id: 3
        },
        {
            content: <ReportAnalysis
                reports={reports}
            />,
            id: 4
        },
        {
            content: <About />,
            id: 5
        }
    ]);

    // Animate those things.
    const animatedItems = basicItems.map((item) => {
        return ({
            content: <Fade show={item.id == page && !fadeRunning} callback={fadeCallback} key={item.id}>
                {item.content}
            </Fade>,
            id: item.id
        });
    })

    return (
        <div>
            <MenuAppBar
                handlePageToggle={handlePageToggle}
            />
            {animatedItems.map((item) => { return item.content })}
        </div>
    );

}