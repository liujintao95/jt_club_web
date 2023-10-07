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
      <el-button type="primary">发送</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const input_msg = ref('')
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
</style>