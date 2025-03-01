import express from "express";
import domainRoutes from "./domainRoutes.js";

const Router = express.Router();

export default(): express.Router => {
    domainRoutes(Router);
    
    return Router;
}