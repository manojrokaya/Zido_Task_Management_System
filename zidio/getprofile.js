const getUserProfile = async () => {
    try {
      const response = await api.get('/api/users/profile');
      console.log("User Profile", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching user profile", error.response.data);
    }
  };
  