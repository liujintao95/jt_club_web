import {decodeMessage} from "./protobuf/message"
import type {Message} from "./protobuf/message"
import {ElNotification} from "element-plus";
import {TransportType} from "@/store/type";

function initWebSocket(token:string) {
    const urlToken = encodeURIComponent(token)
    const url = `ws://${import.meta.env.VITE_BASE_API}/chat/ws?token=${urlToken}`
    this.socket = new WebSocket(url)
    this.socket.onerror = webSocketOnError;
    this.socket.onmessage = webSocketOnMessage;
    this.socket.onclose = closeWebsocket;
}

function webSocketOnError(e) {
    ElNotification({
        title: '',
        message: "WebSocket连接发生错误" + e,
        type: 'error',
        duration: 0,
    });
}

async function webSocketOnMessage(e) {
    const data = new Uint8Array((await e.data.arrayBuffer()))
    const msg = decodeMessage(data)
    console.log("socket:"+msg)
    if (msg.type === TransportType.Normal) {
        if (msg.from === "0000001") {
            ElNotification({
                title: '管理员消息',
                message: msg.content,
                type: 'success',
                duration: 3000,
            });
        }
    }
}

// 关闭websiocket
function closeWebsocket() {
    console.log('连接已关闭...')
}

function close() {
    this.socket.close() // 关闭 websocket
    this.socket.onclose = function (e) {
        console.log(e)//监听关闭事件
        console.log('关闭')
    }
}

function webSocketSend(agentData:Message) {
    this.socket.send(agentData);
}

export default {
    initWebSocket, close, webSocketSend
}