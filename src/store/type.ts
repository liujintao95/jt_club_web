export interface IContactItem {
    contact_id: string,
    contact_type: number,
    contact_notes: string,
    contact_name: string,
    avatar: string,
    last_msg: string,
    last_time: string,
    new_msg_count: number,
}

export interface IUser {
    uid: string,
    name: string,
    avatar: string,
    email: string,
    token: string,
    authorization: string,
}

export enum ContentType {
    Text,
    File,
    Picture,
    Audio,
    Video,
}

export enum MessageType {
    Single = ContactType.User,
    Group = ContactType.Group,
}

export enum TransportType {
    HeatBeat = "heatbeat",
    WebRTC = "webrtc",
    Normal = "normal",
}

export enum ContactType {
    User,
    Group
}