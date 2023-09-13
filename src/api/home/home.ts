import service from '@/utils/request'
import type {ContactListRes, ContactListReq} from "@/api/home/model/home";


export default {
    GetContactList(data: ContactListReq) {
        return service.post("/user/contact/list", data)
    }
}