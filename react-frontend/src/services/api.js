// services/api.js
// services/api.js

const BASE_URL = "http://localhost:8081/api";

export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Failed to login");
    }

    // Assuming the server returns a token upon successful login
    const { token } = await response.json();
    localStorage.setItem("token", token);
  } catch (error) {
    throw new Error(`Error logging in: ${error.message}`);
  }
};

// Other functions remain the same


export const logout = () => {
  // Remove session token from localStorage when user logs out
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  // Check if session token exists in localStorage
  return !!localStorage.getItem("token");
};

