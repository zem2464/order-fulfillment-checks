import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
