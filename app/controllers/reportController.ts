import express from 'express';

interface Report {
    timestamp: string,
    message: string 
}

interface data {
    report: Array<Report>
}

const data: data = {
    report: []
};

const getReports = () : Array<Report> => data.report
    .map(item => ({
        ...item,
        time: new Date(item.timestamp).getTime()
    }))
    .sort((a, b) =>  b.time - a.time)
    .map(item => ({message: item.message, timestamp: item.timestamp}))

const report = [
    (req: express.Request, res: express.Response) => {
        res.json(getReports());
    }
]

const reportUpdate = [
    (req: express.Request, res: express.Response) => {
        if (req.body.report) {
            data.report.push(req.body.report)
        }
        res.json(getReports());
    }
]

export const reportController = {
    report,
    reportUpdate
}