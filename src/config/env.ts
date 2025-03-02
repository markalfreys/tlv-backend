import dotenv from 'dotenv';

dotenv.config();

// config file where I can manage all environmental variables easily

export const ENV = {
    PORT: process.env.PORT || 4000,
    FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5000',
    WHOIS_API_KEY: process.env.WHOIS_API_KEY || '',
    WHOIS_API_URL: process.env.WHOIS_API_URL || 'https://www.whoisxmlapi.com/whoisserver/WhoisService',
};
