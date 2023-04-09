const express = require('express');
const cors = require('cors');
const app = express();
const port = 8008; //process.env.PORT
const path = require('path');
const fs = require('fs');

// const getProjects = require('./routes/projects');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// app.get('/api/projects', getProjects);\

// app.get('/api/downloadResumePDF', (req, res) => {
//   var file = fs.createReadStream('/pdfs/RyanMoro_Resume.pdf');
//   var stat = fs.statSync('/pdfs/RyanMoro_Resume.pdf');
//   res.setHeader('Content-Length', stat.size);
//   res.setHeader('Content-Type', 'application/pdf');
//   res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
//   file.pipe(res);
// });

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
    var file = fs.createReadStream(`./resources/${report.filename}`);
    var stat = fs.statSync(`./resources/${report.filename}`);
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename=${report.filename}`);
    file.pipe(res);
  });
});

app.get('/api/images/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  res.sendFile(`${__dirname}/images/${imageName}`);
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