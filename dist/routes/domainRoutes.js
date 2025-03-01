import { getDomainDetails } from "../controllers/domainController.js";
export default (router) => {
    router.post('/', getDomainDetails);
};
