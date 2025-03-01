import axios from 'axios';
import { ENV } from '../config/env.js';

export const fetchWhoisData = async (domain: string) => {
    const url = ENV.WHOIS_API_URL;

    try {
        const { data } = await axios.post(
            url, 
            { 
                apiKey: ENV.WHOIS_API_KEY,
                domainName: domain, 
                outputFormat: 'json' 
            },{
                headers: {
                  "Content-Type": "application/json",
                },
            }
        );
        return { success: true,  data, message: "Domain details fetched successfully" };
    } catch (error) {
        return { success: false, data: null, message: "Error fetching domain details" };
    }
};
  