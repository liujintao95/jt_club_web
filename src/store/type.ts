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
