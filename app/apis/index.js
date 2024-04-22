import axios from "axios";
import cookie from "cookie";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const updateInstance = (token) => {
  const updatedInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  updatedInstance.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  return updatedInstance;
};

export default updateInstance;

// Signup the user successfully
export const userSignup = async (signupData) => {
  return await instance.post(`/auth/register`, signupData);
};

// Signin the user successfully
export const userSignin = async (loginData) => {
  return await instance.post(`/auth/login`, loginData);
};

export const signinGoogle = async (token, loginData) => {
  return await instance.post(`auth/signinGoogle`, loginData);
};
export const convertFile = async (token, data) => {
  const axiosWithToken = updateInstance(token);
  return await axiosWithToken.post(`/converter/upload`, data);
};

export const getFiles = async (token, type) => {
  const axiosWithToken = updateInstance(token);
  return await axiosWithToken.get(`/converter/all/${type}`);
};

export const deleteFiles = async (token, deleteData) => {
  const axiosWithToken = updateInstance(token);
  return await axiosWithToken.post(`/converter/delete`, {
    converted: deleteData.converted,
    original: deleteData.original,
    id: deleteData.id,
  });
};
