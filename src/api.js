import axios from "axios";

const API_URL = '/Uw5CrX';

export const fetchQuizData = async () => {
    try {
        const response = await axios.get(API_URL);
        // console.log("api response", response.data);
        
        return response.data;
    } catch (error) {
        console.error("Getting Error in Fetching quiz data", error);
        return [];
    }
} 