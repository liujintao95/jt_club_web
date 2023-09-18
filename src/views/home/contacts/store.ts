import api from '@/api/home/home'
import { createState, createStore } from '@/hooks/store'
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import {ContactsType} from '@/consts/consts'

export interface ContactItem {
  contact_id: string,
  contact_type: number,
  contact_notes: string,
  contact_name: string,
  avatar: string,
  last_msg: string,
  last_time: string,
}

export interface ContactListRes {
  contacts: ContactItem[],
  page: number,
  size: number,
  total: number
}

function useStore () {
  const state = createState({
    contactPage: 1,
    contactSize: 20,
    nameOrId: "",
    contactsData: {},
  })

  const actions = {
    showContacts () {
      const params = {
        page: state.contactPage.value,
        size: state.contactSize.value,
        name_or_id: state.nameOrId.value,
      }
      api.GetContactList(params).then(res => {
        const contactsData: ContactListRes = {
          page: res.data.data.page,
          size: res.data.data.size,
          total: res.data.data.total,
          contacts: []
        }
        for (const contact_res of res.data.data.contacts) {
          const contact: ContactItem = {
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
          contactsData.contacts.push(contact)
        }
        this.set("contactsData", contactsData)
      }).catch((err) => {
        ElMessage.error(err.response.data.message)
      })
    },
  }

  return createStore(state, actions)
}

export default useStore
