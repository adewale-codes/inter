import axios from 'axios';

const API_BASE_URL = 'https://isw-group-five-app.onrender.com/interswitch_group_five';
const API_KEY = '31032024';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
  },
});

// Add a request interceptor to include the token in the headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const api = {
  adminSignIn: async (credentials) => {
    try {
      const response = await axiosInstance.post('/admin_sign_in', credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  listAllUsers: () => axiosInstance.get('/user_list'),

  singleUserData: (userAccountNumber) => axiosInstance.get(`/user_data_summary?userAccountNumber=${userAccountNumber}`),

  listAllTransactions: () => axiosInstance.get('/transaction_list'),

  singleTransaction: (transactionId) => axiosInstance.get(`/single_transaction?transactionId=${transactionId}`),

  changeTransactionStatus: (transactionData) => axiosInstance.post('/change_transaction_status', transactionData),

  changeUserAccountStatus: (userData) => axiosInstance.get(`/change_user_account_status?userAccountNumber=${userData.userAccountNumber}`),

  adminDashboardSummary: () => axiosInstance.get('/admin_dashboard_summary'),

  searchUserByFirstname: (firstname) => axiosInstance.get(`/search_user?firstname=${firstname}`),

  searchUserByEmail: (emailAddress) => axiosInstance.get(`/search_user?emailAddress=${emailAddress}`),
};
