import service from '@/utils/request'
import type {ContactListReq} from "@/api/user/model/user";


export default {
    GetContactList(data: ContactListReq) {
        return service.post("/user/contact/list", data)
    }
}