import axios from 'axios';

const axiosInstance = () => {
        axios.create({
                baseURL: `${process.env.REACT_APP_API_URL}`,
                headers: { Authorization: `Bearer ${window.localStorage.getItem('tokenUser')}`}
        });
}
export default axiosInstance;




