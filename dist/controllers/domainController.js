var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchWhoisData } from "../helpers/whoisHelper.js";
import { formatDate } from "../utils/dateFormat.js";
export const getDomainDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { domain } = req.body;
        if (!domain || typeof domain !== 'string') {
            res.status(400).json({ success: false, data: null, message: "Domain is required" });
        }
        const whoisData = yield fetchWhoisData(domain);
        if (!whoisData.success) {
            res.status(400).json({ success: false, data: null, message: whoisData.message });
        }
        if (!whoisData.data) {
            res.status(400).json({ success: false, data: null, message: "No data found" });
        }
        const domainDetailsData = {
            domainInformation: {
                domainName: whoisData.data.WhoisRecord.domainName || '',
                registrar: whoisData.data.WhoisRecord.registrarName || '',
                registrationDate: formatDate(whoisData.data.WhoisRecord.createdDate) || '',
                expirationDate: formatDate(whoisData.data.WhoisRecord.expiresDate) || '',
                estimatedDomainAge: whoisData.data.WhoisRecord.estimatedDomainAge || '',
                hostnames: whoisData.data.WhoisRecord.nameServers.hostNames.join(', ') || ''
            },
            contactInformation: {
                registrantName: whoisData.data.WhoisRecord.registrant.name || '',
                technicalContactName: whoisData.data.WhoisRecord.technicalContact.name || '',
                administrativeContactName: whoisData.data.WhoisRecord.administrativeContact.name || '',
                contactEmail: whoisData.data.WhoisRecord.contactEmail || ''
            }
        };
        res.status(200).json({ success: true, data: domainDetailsData, message: "Domain details fetched successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, data: null, message: "Internal Server Error" });
    }
});
