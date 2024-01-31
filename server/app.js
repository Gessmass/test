import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './routes/router.js'; // Assurez-vous que l'extension .js correspond au fichier réel

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.status(200).send('On / from server');
});

app.use(express.static('public'));

app.use('*', (req, res) => {
  res.status(404).json({message: 'Route not found'});
});

export default app;
