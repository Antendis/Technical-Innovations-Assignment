const express = require('express');
const router = express.Router();

const faults = [
    { id: 1, markerId: 'M001', type: 'Signal Failure', location: 'Waterloo Station', severity: 'High', status: 'Active', reported: '2024-05-14T10:30:00Z' },
    { id: 2, markerId: 'M002', type: 'Track Damage', location: 'Victoria Station, Platform C', severity: 'Medium', status: 'Active', reported: '2024-05-14T09:00:00Z' },
    { id: 3, markerId: 'M003', type: 'Electricity Outage', location: 'London Bridge Station', severity: 'High', status: 'Resolved', reported: '2024-05-14T08:00:00Z' },
    { id: 4, markerId: 'M004', type: 'Door Failure', location: 'Paddington Station', severity: 'Low', status: 'Active', reported: '2024-05-14T11:15:00Z' },
    { id: 5, markerId: 'M005', type: 'Brake System', location: 'Kings Cross Station', severity: 'High', status: 'Active', reported: '2024-05-14T07:45:00Z' },
];

router.get('/', (req, res) => {
    res.json(faults);
});

router.get('/marker/:id', (req, res) => {
    const fault = faults.find(f => f.markerId === req.params.id);
    if (!fault) return res.status(404).json({ message: 'Marker not found' });
    res.json(fault);
});

module.exports = router;
