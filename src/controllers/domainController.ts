import { Request, Response } from "express";
import { fetchWhoisData } from "../helpers/whoisHelper.js";
import { WhoisDataType } from "../types/index.js";
import { formatDate } from "../utils/dateFormat.js";

export const getDomainDetails = async (req: Request, res: Response) => {
    try {

        const { domain } = req.body

        // Validate the domain input, return 400 if domain is not found and not wrong type
        if(!domain || typeof domain !== 'string') {
            res.status(400).json({ success: false, data: null, message: "Domain is required" });
        } 

        // Fetch WHOIS data
        const whoisData = await fetchWhoisData(domain as string) as { success: boolean, message: string, data: WhoisDataType  };

        // return 400 status if fetching info on WHOIS API not successful
        if(!whoisData.success) {
            res.status(400).json({ success: false, data: null, message: whoisData.message });
        }

         // return 400 status if fetching is success but there is no data received
        if(!whoisData.data) {
            res.status(400).json({ success: false, data: null, message: "No data found" });
        }

        // structure the data needed
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

        // return the data with message if successfully fetched
        res.status(200).json({ success: true, data: domainDetailsData, message: "Domain details fetched successfully" });

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, data: null, message: "Internal Server Error" });
    }
};
