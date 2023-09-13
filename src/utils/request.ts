import axios from 'axios'

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API
})

service.interceptors.request.use(
    config => {
        const Authorization = localStorage.getItem("Authorization")
        if (Authorization) {
            config.headers.Authorization = Authorization
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