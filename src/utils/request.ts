import axios from 'axios'
import {store} from "@/store";
import {ResCode} from "@/consts/consts";
import Router from "@/router";
import {ElMessage} from "element-plus";

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
        if (error.response.data.code===ResCode.Unauthorized) {
            ElMessage.error(error.response.data.msg)
            Router.push({path: "/"})
        } else {
            return Promise.reject(error)
        }
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