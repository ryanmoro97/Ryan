import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL || 'server:8008';


const getProjects = async () => {
  console.log('API_URL:', process.env.REACT_APP_API_URL);
  const response = await axios.get(`${API_URL}/api/projects`);
  return response.data;
};

export default getProjects;

