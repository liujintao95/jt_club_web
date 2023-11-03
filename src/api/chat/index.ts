import service from '@/utils/request'
import {HistoryMessageReq} from "@/api/chat/model/chat";


export default {
    GetHistoryMessage(data: HistoryMessageReq) {
        return service.post("/chat/message/list", data)
    }
}