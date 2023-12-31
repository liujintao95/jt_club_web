import type {RootState} from '@/store'
import api from "@/api/user"
import {ElMessage} from "element-plus"
import {ContactType, ResCode} from "@/consts/consts"
import type {IContactItem, IUser} from "@/store/type"
import type {ActionContext} from 'vuex'
import Router from "@/router";

// 定义menu模块下的，state的类型
export type ChatState = {
    contactCount: number;
    contacts: IContactItem[],
    currentContact: IContactItem,
    user: IUser,
}

// 定义menu模块下的state
export const state: ChatState = {
    contactCount: 0,
    contacts: [],
    currentContact: {},
    user: {},
}
// 定义menu模块下的mutations
export const mutations = {
    setCount(state: ChatState, count: number): void {
        state.contactCount = count
    },
    setContacts(state: ChatState, contacts: IContactItem[]): void {
        // 逆天前端，没法监听数组赋值语句（新数组指针地址问题？）
        state.contacts.splice(0, state.contacts.length)
        contacts.forEach(contact => state.contacts.push(contact))
    },
    setCurrentContact(state: ChatState, currentContact: IContactItem): void {
        state.currentContact = currentContact
        state.currentContact.new_msg_count = 0
    },
    setUser(state: ChatState, user: IUser): void {
        state.user = user
    },
    setMessageToHead() {

    },
    setMessageToTail() {

    }
}
// 定义menu模块下的actions
export const actions = {
    async setContacts({commit}: ActionContext<ChatState, RootState>, nameOrId: string) {
        try {
            const res = await api.GetContactList({
                name_or_id: nameOrId
            })
            const contacts: IContactItem[] = []
            for (const contact_res of res.data.data.contacts) {
                let show_time
                if (contact_res.last_time) {
                    const now = new Date()
                    const last = new Date(contact_res.last_time)
                    const now_date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
                    const last_date = `${last.getFullYear()}-${last.getMonth()}-${last.getDate()}`
                    if (now_date === last_date) {
                        show_time = `${last.getHours()}:${last.getMinutes()}`
                    } else {
                        show_time = last_date
                    }
                }
                const contact: IContactItem = {
                    contact_id: contact_res.contact_id,
                    contact_type: contact_res.contact_type,
                    contact_notes: contact_res.contact_notes,
                    last_msg_id: contact_res.last_msg_id,
                    last_msg: contact_res.last_msg,
                    last_time: show_time,
                    new_msg_count: contact_res.new_msg_count,
                    page:1,
                    messages: []
                }
                if (contact_res.contact_type == ContactType.User) {
                    contact.contact_name = contact_res.user.name
                    contact.avatar = contact_res.user.avatar
                } else {
                    contact.contact_name = contact_res.user_group.name
                    contact.avatar = contact_res.user_group.avatar
                }
                contacts.push(contact)
            }
            commit("setContacts", contacts)
        } catch (err) {
            console.log(err)
            ElMessage.error(err.response.data.msg)
        }
    },

    async setHistoryMessage({commit}: ActionContext<ChatState, RootState>, contactId: string, messageId: string) {

    }
}
// 定义menu模块下的getters
export const getters = {
    getCount(state: ChatState): number {
        return state.contactCount
    },
    getContacts(state: ChatState): IContactItem[] {
        return state.contacts
    },
    getCurrentContact(state: ChatState): IContactItem {
        return state.currentContact
    },
    getUser(state: ChatState): IContactItem {
        return state.user
    }
}


export default {
    namespaced: true, // 声明命名空间
    state,
    mutations,
    actions,
    getters
}