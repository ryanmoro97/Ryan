import axios from "axios";
const API_URL = process.env.API_URL;

const getProjects = async () => {
  const response = await axios.get("http://localhost:8008/api/projects");
  // const response = await axios.get(`${API_URL}/api/projects`);
  return response.data;
};

export default getProjects;