import service from '@/utils/request'

export default {
    login(data: any) {
        return service.post("/user/sign_in", data)
    }
}