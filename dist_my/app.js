const express = require('express');

const app = express();
app.use('/', express.static('./')).listen(3000, () => {
  console.log('run in port 3000')
});