<template>
  <div class="contact_item">
    <el-row class="item">
      <el-avatar class="avatar" :src="contact.avatar ? contact.avatar : defaultAvatar" />
      <el-col :span="19" class="text">
        <el-row>
          <el-col :span="19" class="name">{{ contact.contact_notes ? contact.contact_notes : contact.contact_name}}</el-col>
          <el-col :span="5" class="time">{{ contact.last_time? contact.last_time:""}}</el-col>
        </el-row>
        <el-row class="content">
          <div>{{ contact.last_msg ? contact.last_msg : "" }}</div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, inject } from 'vue'
import type { ContactItem } from '../store'
interface Props {
  contact: ContactItem
}
const props = defineProps<Props>()
const store = inject('store')
const defaultAvatar = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
const hover = ref("")
</script>

<style scoped lang="scss">
.contact_item{
  padding: 5px 10px;
  .avatar{
  }
  .text{
    padding-left: 10px;
    .name{
      font-weight: bold;
    }
    .time{
      text-align: right;
      font-size: 13px;
      opacity: 0.6;
    }
    .content{
      font-size: 14px;
      opacity: 0.6;
    }
  }
}
</style>