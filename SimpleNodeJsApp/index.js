const express = require('express');
 
const app = express();
 
app.get('/', (req, res) => {
  res.send('Our Web App : Home');
});

app.listen(8080, () => {
    console.log('Node JS App listening on port 8080');
  });