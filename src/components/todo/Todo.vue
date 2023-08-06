<template>
  <section class="todoapp">
    <TodoHeader />
    <TodoSection :todos="todos" />
    <TodoFooter />
  </section>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import TodoFooter from "./TodoFooter.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoSection from "./TodoSection.vue";

import { SUCCESS } from "@/constants/code";

const todos = reactive<Todo[]>([]);

onMounted(() => {
  fetch("/api/v1/todos", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res: MyResponse<Todo[]>) => {
      console.log(res.code);

      if (res.code === SUCCESS) {
        todos.push(...res.data);
      } else {
        alert(res.msg);
      }
    });
});
</script>

<style scoped></style>
