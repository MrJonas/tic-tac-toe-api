import express = require('express');
import routes from './routes';
import cors from 'cors';

const app: express.Application = express();

app.use(cors());
app.use('/api', routes);

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});