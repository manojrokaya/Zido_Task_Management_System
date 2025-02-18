const getUserList = async () => {
    try {
      const response = await api.get('/api/users', {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('JWT')}` }
      });
      console.log("User List", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching user list", error.response.data);
    }
  };
  