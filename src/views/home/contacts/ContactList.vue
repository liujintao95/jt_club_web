<template>
  <div class="contact_list">
    <el-scrollbar height="100%">
      <div v-for="contact in contactsData.contacts" :key="contact">
        <ContactItem :contact="contact"/>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import {reactive, provide, toRefs} from 'vue'
import ContactItem from "@/views/home/contacts/ContactItem.vue"
import api from "@/api/home/home"
import useStore from './store'

const store = useStore()
provide('store', store)
const { contactsData } = store.state
store.commit('showContacts')

</script>

<style scoped lang="scss">
.contact_list {
  width: 100%;
  height: 100%;
}
</style>