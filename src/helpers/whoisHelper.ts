import axios from 'axios';
import { ENV } from '../config/env.js';

// Fetches WHOIS data for a given domain from an external API.
export const fetchWhoisData = async (domain: string) => {
    const url = ENV.WHOIS_API_URL; // API endpoint from environment variables

    try {
        const { data } = await axios.post(
            url, 
            { 
                apiKey: ENV.WHOIS_API_KEY, // API key for authentication
                domainName: domain,        // Domain name to query
                outputFormat: 'json' 
            },{
                headers: {
                  "Content-Type": "application/json",
                },
            }
        );

        // return the data if fetch successfully
        return { success: true,  data, message: "Domain details fetched successfully" };
    } catch (error) {

        // return success to false if data is not fetched
        return { success: false, data: null, message: "Error fetching domain details" };
    }
};
  
