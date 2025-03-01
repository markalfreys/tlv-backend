import express from 'express';
import http from "http";
import cors from "cors";
import Router from './routes/index.js';
import { ENV } from './config/env.js';

const app = express();

app.use(express.json());  
app.use(cors({ 
    origin: ENV.FRONTEND_URL,
    methods: ['POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))


app.use('/api/domain', Router())


const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

server.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});