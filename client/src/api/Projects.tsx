import axios from "axios";
const API_URL = process.env.API_URL;

const getProjects = async () => {
  const response = await axios.get(`http://${API_URL}/api/projects`);
  // const response = await axios.get("http://localhost:8008/api/projects");
  return response.data;
};

export default getProjects;

