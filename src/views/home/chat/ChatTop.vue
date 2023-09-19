<template>
<div class="chat_top">
  <el-row class="top">
    <el-col :span="23" class="name">{{ currentContact.contact_notes }}</el-col>
    <el-col :span="1" class="option">
      <el-dropdown trigger="click">
        <el-icon><MoreFilled /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
</div>
</template>

<script setup lang="ts">
import {inject} from "vue";
const store = inject('store')
const {currentContact} = store.state
</script>

<style scoped lang="scss">
.chat_top{
  padding: 10px;
  width: 100%;
  height: 100%;
  .name{
    font-size: 20px;
  }
  .option{
    text-align: right;
    font-size: 22px;
  }
}
</style>