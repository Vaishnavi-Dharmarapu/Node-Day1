const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'Websites')));

const indexRoute = require('./Routes/index');
app.use('/', indexRoute);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
