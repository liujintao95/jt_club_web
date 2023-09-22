interface User {
    uid: string,
    name: string,
    email: string,
    avatar: string,
}

interface Group {
    gid: string,
    name: string,
    admin_id: string,
    notice: string,
    avatar: string,
}

export interface ContactListReq {
    page: number,
    size: number,
    name_or_id?: string
}