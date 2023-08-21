<script setup lang="ts">

</script>

<template>
<div class="chat_top">
  <el-row class="top">
    <el-col :span="23" class="name">张三</el-col>
    <el-col :span="1" class="option"><el-icon><MoreFilled /></el-icon></el-col>
  </el-row>
</div>
</template>

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