<template>
  <div class="chat_content">
    <ul v-for="message in contact.messages" :key="message">
      <li :class="message.from == user.uid? 'right':'left'">
        <div class="title">{{message.fromUsername}} {{message.createAt}}</div>
        <span>{{message.content}}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {store} from "@/store";

const contact = store.state.chat.currentContact
const user = store.state.chat.user

</script>

<style scoped lang="scss">
.chat_content {
  padding: 10px;
  width: 100%;
}

.title {
  opacity: 0.6;
}

ul {
  list-style: none;
  padding: 20px;
  margin: 0;
  font-size: 14px;
  line-height: 20px;
}

li.left {
  margin-right: 20px;
}

li.left span {
  display: inline-block;
  border-radius: 0 15px 15px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 10px 15px;
}

li.right {
  margin-left: 20px;
  text-align: right;
}

li.right span {
  display: inline-block;
  border-radius: 15px 0 15px 15px;
  background-color: rgb(149, 236, 105);
  padding: 10px 15px;
}

li + li {
  margin-top: 20px;
}
</style>