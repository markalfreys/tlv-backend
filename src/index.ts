import express from 'express';
import http from "http";
import cors from "cors";
import Router from './routes/index.js';
import { ENV } from './config/env.js';

const app = express(); // Initialize an Express application

// Middleware to parse JSON request bodies
app.use(express.json());  

// Enable CORS (Cross-Origin Resource Sharing) for the frontend URL
app.use(cors({ 
    origin: [ENV.FRONTEND_URL],
    methods: ['POST'], // POST only since theres only one end-point
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

// End-point for getting Domain Detail from WHOIS
app.use('/api/domain', Router())

// Create an HTTP server using Express
const server = http.createServer(app);

const PORT = process.env.PORT || 4000;  // Define server port (default to 4000 if not set in environment variables)

// Start the server and listen on the specified port
server.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
