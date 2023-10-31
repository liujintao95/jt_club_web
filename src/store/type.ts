export interface Imessage {
    messageId: string,
    createAt: Date,
    avatar: string,
    fromUsername: string,
    from: string,
    to: string,
    content: string,
    contentType: number,
    type: string,
    messageType: number,
    url: string,
    fileSuffix: string,
    file: Uint8Array,
}

export interface IContactItem {
    contact_id: string,
    contact_type: number,
    contact_notes: string,
    contact_name: string,
    avatar: string,
    last_msg: string,
    last_time: string,
    new_msg_count: number,
    page: number,
    messages: Imessage[]
}

export interface IUser {
    uid: string,
    name: string,
    avatar: string,
    email: string,
    token: string,
    authorization: string,
}
