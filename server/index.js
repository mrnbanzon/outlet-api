const express = require('express');
const api = require('./api.js');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(PORT, () => console.log(`outlet-api listening on port ${PORT}.`));
