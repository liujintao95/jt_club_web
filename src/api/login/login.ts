import service from '@/utils/request'
import type {LoginReq} from "@/api/login/model/login";


export default {
    login(data: LoginReq) {
        return service.post("/login", data)
    }
}