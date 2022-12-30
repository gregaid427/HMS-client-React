import Axios from "axios";

export const axios = Axios.create({ 
baseUrl: `http://localhost:4000 `, 
headers:{Authorization: `Bearer ${localStorage.getItem('token')}`},



})