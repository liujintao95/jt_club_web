import type {RootState} from '@/store'
import api from "@/api/home/home"
import {ElMessage} from "element-plus"
import {ContactsType} from "@/consts/consts"
import type {IContactItem} from "@/store/type"
import type {ActionContext} from 'vuex'

// 定义menu模块下的，state的类型
export type ChatState = {
    contactCount: number;
    contacts: IContactItem[],
    currentContact: IContactItem,
}

// 定义menu模块下的state
export const state: ChatState = {
    contactCount: 0,
    contacts: [],
    currentContact: {},
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
    },
}
// 定义menu模块下的actions
export const actions = {
    async setContacts({commit}: ActionContext<ChatState, RootState>, nameOrId: string) {
        try {
            const res = await api.GetContactList({
                name_or_id: nameOrId
            })
            console.log(res)
            const contacts: IContactItem[] = []
            for (const contact_res of res.data.data.contacts) {
                const contact: IContactItem = {
                    contact_id: contact_res.contact_id,
                    contact_type: contact_res.contact_type,
                    contact_notes: contact_res.contact_notes,
                    last_msg: contact_res.last_msg,
                    last_time: contact_res.last_time
                }
                if (contact_res.contact_type == ContactsType.User) {
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
            ElMessage.error(err.response.data.message)
        }
    },
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
}


export default {
    namespaced: true, // 声明命名空间
    state,
    mutations,
    actions,
    getters
}