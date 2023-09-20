<template>
  <div class="chat_home">
    <el-container class="common-layout">
      <el-aside class="aside">
        <ContactBar/>
      </el-aside>
      <el-main class="chat_main">
        <ChatBar/>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { provide, toRefs } from 'vue'
import ContactBar from "@/views/home/contacts/ContactBar.vue"
import ChatBar from "@/views/home/chat/ChatBar.vue"
</script>

<style scoped>
.chat_home {
  width: 100%;
  height: 100%;

  .common-layout {
    width: 100%;
    height: 100%;

    .aside {
      width: 300px;
      border-right: solid 1px #bbbbbb;
    }

    .chat_main {
      --el-main-padding: 0;
    }
  }
}
</style>