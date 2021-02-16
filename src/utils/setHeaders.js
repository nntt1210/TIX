import api from "../api/index";

//get accessToken in auth page
const setHeaders = (accessToken) => {
    if (accessToken) {
        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    } else {
        delete api.default.headers.common['Authorization'];
    }
};
export default setHeaders;