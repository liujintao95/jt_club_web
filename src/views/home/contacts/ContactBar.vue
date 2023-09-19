<template>
<div class="contact_bar">
  <el-row class="top">
    <el-dropdown trigger="click">
      <el-icon size="30"><Operation /></el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-input class="search" v-model="input" @keyup.enter="searchContact()" placeholder="Search" />
  </el-row>
  <ContactList class="list"/>
</div>
</template>

<script setup lang="ts">
import ContactList from "@/views/home/contacts/ContactList.vue"
import {ref, inject} from "vue";

const store = inject('store')
const { nameOrId } = store.state
const input = ref<string>()

const searchContact = () => {
  store.commit('showContacts', input.value)
}
</script>

<style scoped lang="scss">
.contact_bar {
  width: 100%;
  height: 100%;
  .top{
    padding: 10px;
    height: 50px;
    border-bottom: solid 1px #bbbbbb;
    .search{
      padding-left: 10px;
      width: calc(100% - 40px);
    }
  }
  .list{
    height: calc(100% - 50px);
  }
}
</style>