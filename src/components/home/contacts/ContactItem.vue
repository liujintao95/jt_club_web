<script setup lang="ts">
import { reactive, toRefs } from 'vue'

const state = reactive({
  circleUrl:
      'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
      'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const,
})
const { circleUrl, squareUrl, sizeList } = toRefs(state)
</script>

<template>
  <div class="contact_item">
    <el-row class="item">
      <el-avatar class="avatar" :size="large" :src="circleUrl" />
      <el-col :span="19" class="text">
        <el-row>
          <el-col :span="19" class="name">张三</el-col>
          <el-col :span="5" class="time">15:03</el-col>
        </el-row>
        <el-row class="content">
          <div>我是谁啊！</div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

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