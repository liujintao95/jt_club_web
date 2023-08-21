<script setup lang="ts">
import ChatTop from "@/components/home/chat/ChatTop.vue"
import ChatContent from "@/components/home/chat/ChatContent.vue"
import ChatFoot from "@/components/home/chat/ChatFoot.vue"
</script>

<template>
  <div class="chat_bar">
    <ChatTop class="top"/>
    <ChatContent class="content"/>
    <ChatFoot class="foot"/>
  </div>
</template>

<style scoped lang="scss">
.chat_bar{
  width: 100%;
  height: 100%;
  .chat_top{
    width: 100%;
    height: 50px;
    border-bottom: solid 1px #bbbbbb;
  }
  .content{
    width: 100%;
    height: calc(100% - 200px);
  }
  .foot{
    width: 100%;
    height: 150px;
    border-top: solid 1px #bbbbbb;
  }
}
</style>