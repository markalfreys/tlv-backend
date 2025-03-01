var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import { ENV } from '../config/env.js';
export const fetchWhoisData = (domain) => __awaiter(void 0, void 0, void 0, function* () {
    const url = ENV.WHOIS_API_URL;
    try {
        const { data } = yield axios.post(url, {
            apiKey: ENV.WHOIS_API_KEY,
            domainName: domain,
            outputFormat: 'json'
        }, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return { success: true, data, message: "Domain details fetched successfully" };
    }
    catch (error) {
        return { success: false, data: null, message: "Error fetching domain details" };
    }
});
