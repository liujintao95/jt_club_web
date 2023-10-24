import {decodeMessage, encodeMessage} from "./protobuf/message"
import type {Message} from "./protobuf/message"
import {ElNotification} from "element-plus";
import {TransportType} from "@/consts/consts";

let Socket

function initWebSocket(token: string) {
    const urlToken = encodeURIComponent(token)
    const url = `ws://${import.meta.env.VITE_BASE_API}/chat/ws?token=${urlToken}`
    Socket = new WebSocket(url)
    Socket.onopen = webSocketOnOpen;
    Socket.onerror = webSocketOnError;
    Socket.onmessage = webSocketOnMessage;
    Socket.onclose = websocketOnClose;
}

function webSocketOnOpen() {
    webSocketSend({
        content: "ping",
        type: TransportType.HeartBeat
    })
    heartCheck.PingStart()
    heartCheck.reset().PongStart()
}

function webSocketOnError(e) {
    ElNotification({
        title: '',
        message: "WebSocket连接发生错误" + e,
        type: 'error',
        duration: 0,
    });
    Socket.close()
}

async function webSocketOnMessage(e) {
    heartCheck.reset().PongStart()
    const data = new Uint8Array((await e.data.arrayBuffer()))
    const msg = decodeMessage(data)
    console.log(msg)
    switch (msg.type) {
        case TransportType.Normal:
            if (msg.from === "0000001") {
                ElNotification({
                    title: '管理员消息',
                    message: msg.content,
                    type: 'success',
                    duration: 3000,
                });
            }
            break
    }
}

function websocketOnClose() {
    console.log('连接已关闭...')
}

function webSocketSend(agentData: Message) {
    const msg = encodeMessage(agentData)
    return Socket.send(msg)
}


const heartCheck = {
    pingTime: 60 * 1000,
    pongTime: 60 * 1000 * 2,
    timeoutObj: null,
    serverTimeoutObj: null,

    reset() {
        clearTimeout(this.serverTimeoutObj);
        return this;
    },

    PingStart() {
        const self = this;
        this.timeoutObj = setTimeout(function () {
            webSocketSend({
                content: "ping",
                type: TransportType.HeartBeat
            })
            self.PingStart();
        }, this.pingTime)
    },

    PongStart() {
        const self = this;
        self.serverTimeoutObj = setTimeout(function () {
            if (Socket != null) {
                ElNotification({
                    title: '',
                    message: "服务器120秒没有响应，已关闭连接!",
                    type: 'error',
                    duration: 0,
                });
                Socket.close()
            }
        }, self.pongTime)
    }
}


export default {
    initWebSocket, webSocketSend
}