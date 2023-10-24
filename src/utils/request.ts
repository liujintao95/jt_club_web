import axios from 'axios'
import {store} from "@/store";

const service = axios.create({
    baseURL: `http://${import.meta.env.VITE_BASE_API}`
})

service.interceptors.request.use(
    config => {
        if (store.state.chat.user) {
            config.headers.Authorization = store.state.chat.user.authorization
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export default service