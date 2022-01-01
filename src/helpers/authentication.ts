import Axios from "axios";

//@ts-ignore
Axios.defaults.headers.common["x-api-key"] = process.env.REACT_APP_CAT_API_KEY;
Axios.defaults.baseURL = process.env.REACT_APP_CAT_API_URL;

export default Axios;
