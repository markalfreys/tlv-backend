import express from "express";
import domainRoutes from "./domainRoutes.js";

const Router = express.Router();

// Initializes all route modules and attaches them to the main Router.
export default(): express.Router => {
    domainRoutes(Router); // Attach domain-related routes to the main router
    
    return Router;
}
