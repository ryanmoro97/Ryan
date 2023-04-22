
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8008;
const path = require('path');
const fs = require('fs');
const pool = require('./database/db');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const reports = [
  { filename: 'Report.pdf', url: '/api/ReportPDF' },
  { filename: '405reports.pdf', url: '/api/405reportsPDF' },
  { filename: '302lab2.pdf', url: '/api/302lab2PDF' },
  { filename: 'powersupply.pdf', url: '/api/powersupplyPDF' },
  { filename: 'shift.pdf', url: '/api/shiftPDF' },
  { filename: 'mux.pdf', url: '/api/muxPDF' },
  { filename: 'flipflop.pdf', url: '/api/flipflopPDF' },
];

reports.forEach((report) => {
  app.get(report.url, (req, res) => {
    var file = fs.createReadStream(`./public/pdfs/${report.filename}`);
    var stat = fs.statSync(`./public/pdfs/${report.filename}`);
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename=${report.filename}`);
    file.pipe(res);
  });
});

app.get('/api/images/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  res.sendFile(`${__dirname}/public/images/${imageName}`);
});

app.get('/api/projects', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM projects');
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    console.log("Error in GET /api/projects");
    res.status(500).send('Server error');
  }
});


const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


process.on('SIGINT', () => {
  console.log('Shutting down server gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});