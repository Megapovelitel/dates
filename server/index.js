const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

require('./routes/data.routes')(app);

app.listen(8080, () => {
  console.log('app is running!')
});
