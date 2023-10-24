<template>
  <div class="chat_bar">
    <div style="height: 100%" v-if="store.state.chat.currentContact.contact_id">
      <ChatTop class="top"/>
      <ChatContent class="content"/>
      <ChatFoot class="foot"/>
    </div>
    <div v-else class="welcome">
      欢迎访问锦涛社！
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatTop from "@/views/home/chat/ChatTop.vue"
import ChatContent from "@/views/home/chat/ChatContent.vue"
import ChatFoot from "@/views/home/chat/ChatFoot.vue"
import {store} from "@/store";
</script>

<style scoped lang="scss">
.chat_bar {
  width: 100%;
  height: 100%;

  .chat_top {
    width: 100%;
    height: 50px;
    border-bottom: solid 1px #bbbbbb;
  }

  .content {
    width: 100%;
    height: calc(100% - 200px);
  }

  .foot {
    width: 100%;
    height: 150px;
    border-top: solid 1px #bbbbbb;
  }

  .welcome{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8a8989;
  }
}
</style>