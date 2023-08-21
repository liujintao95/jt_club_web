import axios from 'axios'

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API
})

service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export default service