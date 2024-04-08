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

export const api = {
  adminSignIn: (credentials) => axiosInstance.post('/admin_sign_in', credentials),

  listAllUsers: () => axiosInstance.get('/user_list'),

  singleUserData: (userAccountNumber) => axiosInstance.get(`/user_data_summary?userAccountNumber=${userAccountNumber}`),

  listAllTransactions: () => axiosInstance.get('/transaction_list'),

  singleTransaction: (transactionId) => axiosInstance.get(`/single_transaction?transactionId=${transactionId}`),

  changeTransactionStatus: (transactionData) => axiosInstance.post('/change_transaction_status', transactionData),

  changeUserAccountStatus: (userData) => axiosInstance.get(`/change_user_account_status?userAccountNumber=${userData.userAccountNumber}`),

  adminDashboardSummary: () => axiosInstance.get('/admin_dashboard_summary'),
};
