import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
  },
});
