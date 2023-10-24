export enum ContentType {
    Text,
    File,
    Picture,
    Audio,
    Video,
}

export enum ContactType {
    User,
    Group
}

export enum MessageType {
    Single = ContactType.User,
    Group = ContactType.Group,
}

export enum TransportType {
    HeartBeat = "heartbeat",
    WebRTC = "webrtc",
    Normal = "normal",
}

export enum ResCode {
    Unauthorized = 4010001
}