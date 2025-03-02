import express from "express";
import { getDomainDetails } from "../controllers/domainController.js";

// Routes for /api/domain
export default (router: express.Router) => {
    router.post('/', getDomainDetails); //  Handle domain search via POST request
};
