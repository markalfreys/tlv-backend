import express from "express";
import domainRoutes from "./domainRoutes.js";
const Router = express.Router();
export default () => {
    domainRoutes(Router);
    return Router;
};
