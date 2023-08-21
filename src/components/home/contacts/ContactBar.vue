<script setup lang="ts">
import ContactList from "@/components/home/contacts/ContactList.vue"
</script>

<template>
<div class="contact_bar">
  <el-row class="top">
    <el-icon size="30"><Operation /></el-icon>
    <el-input class="search" v-model="input" placeholder="Search" />
  </el-row>
  <ContactList class="list"/>
</div>
</template>

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