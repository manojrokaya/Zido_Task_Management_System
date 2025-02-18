// Login Method
const login = async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      console.log("Login Success", response.data);
      // Store JWT token in localStorage if login is successful
      localStorage.setItem('JWT', response.data.token);
    } catch (error) {
      console.error("Login Error", error.response.data);
    }
  };
  
  // Register Method (Changed from Login)
  const register = async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      console.log("Register Success", response.data);
    } catch (error) {
      console.error("Register Error", error.response.data);
    }
  };
  