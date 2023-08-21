<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import ContactItem from "@/components/home/contacts/ContactItem.vue"
const contacts = reactive(["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""])
</script>

<template>
  <div class="contact_list">
    <el-scrollbar height="100%">
    <div v-for="contact in contacts" :key="contact">
      <ContactItem/>
    </div>
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss">
.contact_list{
  width: 100%;
  height: 100%;
}
</style>