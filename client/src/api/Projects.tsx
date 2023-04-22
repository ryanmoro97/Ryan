import axios from "axios";
const API_URL = process.env.API_URL || 'localhost:8008';

const getProjects = async () => {
  const response = await axios.get(`http://${API_URL}/api/projects`);
  return response.data;
};

export default getProjects;

