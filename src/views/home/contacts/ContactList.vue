<template>
  <div class="contact_list">
    <el-scrollbar height="100%">
      <div :class="checkedClass(contact.contact_id)"
           v-for="contact in contactsData.contacts"
           :key="contact"
           @mouseover="mouseover(contact.contact_id)"
           @mouseleave="mouseleave(contact.contact_id)"
           @click="changeCurrentContact(contact)">
        <ContactItem :contact="contact"/>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import {ref, inject, toRefs, watch} from 'vue'
import ContactItem from "@/views/home/contacts/ContactItem.vue"
import api from "@/api/home/home"

const store = inject('store')
const {contactsData} = store.state
const hover_id = ref("")
const checked_id = ref("")
const changeCurrentContact = (contact) => {
  checked_id.value = contact.contact_id
  store.commit("changeCurrentContact", contact)
}
const mouseover = (contact_id)=>{
  hover_id.value = contact_id
}
const mouseleave = (contact_id)=>{
  if (hover_id.value == contact_id) {
    hover_id.value = ""
  }
}
const checkedClass = (contact_id)=>{
  if (checked_id.value === contact_id) {
    return "checked"
  } else if (hover_id.value === contact_id) {
    return "mouseover"
  }else {
    return ""
  }
}
store.commit('showContacts')
</script>

<style scoped lang="scss">
.contact_list {
  width: 100%;
  height: 100%;
}
.mouseover {
  background-color: rgb(241,241,241)
}
.checked {
  background-color: rgb(65, 159, 217)
}
</style>