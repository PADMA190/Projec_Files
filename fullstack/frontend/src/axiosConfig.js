import axios from 'axios';

// Set the base URL for your API
axios.defaults.baseURL = 'http://localhost:8080/backend/api'; // Adjust the base URL as needed

// Allow credentials
axios.defaults.withCredentials = true;

// Optional: You can set headers if needed
// axios.defaults.headers.common['Authorization'] = 'Bearer YOUR_TOKEN';

// You can also set a default timeout
axios.defaults.timeout = 10000; // 10 seconds

export default axios;
