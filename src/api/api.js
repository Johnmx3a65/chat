import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const usersAPI = {
    getUsers (pageNumber, pageSize){
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data);

    },
    getProfile(id){
        return instance.get(`profile/` + id).then(response => response.data);
    }
}
