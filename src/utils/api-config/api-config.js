const baseUrl = process.env.REACT_APP_API_URL;
const baseUrlSuffix = process.env.REACT_APP_API_URL_SUFFIX;

const API = {
  signup: `${baseUrl}${baseUrlSuffix}/signup`,
  login: `${baseUrl}${baseUrlSuffix}/login`,
};

export default API;
