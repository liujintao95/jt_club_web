import service from '@/utils/request'
import type {ContactListReq} from "@/api/home/model/home";


export default {
    GetContactList(data: ContactListReq) {
        return service.post("/user/contact/list", data)
    }
}