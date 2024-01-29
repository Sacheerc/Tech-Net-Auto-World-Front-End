import axios from "axios";
import User from "../Models/vm/UserVm";

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

const getAll = async () => {
    try {
        const response = await api.get(`/auth/all`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const add = async (user: User) => {
    try {
        const response = await api.post(`/auth/add`, user);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const AuthService = { getAll, add };

export default AuthService;