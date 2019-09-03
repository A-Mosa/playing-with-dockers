const express = require('express');
 
const app = express();
 
app.get('/', (req, res) => {
  res.send('Our Web App : Home');
});

app.listen(8888, () => {
    console.log('Listening on port 88880');
  });