const express = require('express');
const cors = require('cors');
const app = express();
const port = 8008; //process.env.PORT

// const getProjects = require('./routes/projects');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.get('/api/projects', getProjects);

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