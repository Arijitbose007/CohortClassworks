const express = require('express')
// fs --> filesystem --> read and write file on system
// express --> filesystem --> read and write file on http server
const port = 3000
const app = express();
app.get('/',function(req, res) {    // function() == ()=>{}
  res.send('Hello World! wow gg')
})

app.listen(port, function()  {
  
  console.log(`Example app listening on port ${port}`)
})