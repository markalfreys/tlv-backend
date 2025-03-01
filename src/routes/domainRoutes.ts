import express from "express";
import { getDomainDetails } from "../controllers/domainController.js";


export default (router: express.Router) => {
    router.post('/', getDomainDetails);
};