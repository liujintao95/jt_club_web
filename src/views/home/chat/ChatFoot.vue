<template>
  <div class="chat_foot">
    <div class="tool_bar">
      <el-icon class="tool_icon" size="20">
        <Operation/>
      </el-icon>
      <el-icon class="tool_icon" size="20">
        <Operation/>
      </el-icon>
      <el-icon class="tool_icon" size="20">
        <Operation/>
      </el-icon>
    </div>
    <div class="input_msg">
      <el-input
          resize="none"
          v-model="input_msg"
          :rows="3"
          type="textarea"
      />
    </div>
    <div class="send_button">
      <el-button type="primary" @click="sendMsg">发送</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue'
import type {Message} from "@/utils/protobuf/message";
import {store} from "@/store"
import Websocket from "@/utils/websocket";
import {ContentType, MessageType, TransportType} from "@/store/type";

const input_msg = ref('')
const contact = store.state.chat.currentContact
const user = store.state.chat.user

const sendMsg = ()=>{
  const msg:Message = {
    avatar: user.avatar,
    fromUsername: user.name,
    from: user.uid,
    to: contact.contact_id,
    content: input_msg,
    contentType: ContentType.Text,
    type: TransportType.Normal,
    messageType: contact.contact_type,
  }
  Websocket.webSocketSend(msg)
}
</script>

<style scoped lang="scss">
.tool_bar {
  margin-left: 10px;

  .tool_icon {
    margin: 5px;
  }
}

.input_msg {
  margin-left: 8px;
  .el_textarea {
    box-shadow: none !important;
    --el-input-focus-border-color: #409eff00 !important;
    --el-input-hover-border-color: #409eff00 !important;
  }
}

.send_button {
  text-align: right;
  margin-right: 20px;
}

:deep(.el-textarea__inner) {
  box-shadow: 0 0 0 0;
}
:deep(.el-textarea__inner:hover) {
  box-shadow: 0 0 0 0;
}
:deep(.el-textarea__inner:focus) {
  box-shadow: 0 0 0 0;
}
</style>