require('dotenv').config();
const express = require('express');
const cors = require('cors');

const ConnectMongoDB = require('./database/ConnectMongoDB');
const MarksRouter = require('./routes/MarksRoutes');

const PORT = process.env.PORT;

const app = new express();
app.use(express.json());
app.use(cors());
app.use('/api/marks', MarksRouter);

ConnectMongoDB();

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Backend Up and Running in PORT ${PORT}`);
});
