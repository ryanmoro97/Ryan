import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL || 'http://clientLB-976065716.us-east-2.elb.amazonaws.com:8000';


const getProjects = async () => {
  const response = await axios.get(`${API_URL}/api/projects`);
  return response.data;
};

export default getProjects;

