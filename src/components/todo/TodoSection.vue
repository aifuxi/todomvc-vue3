<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li
        v-for="todo in todos"
        :key="todo.ID"
        :class="todo.Done ? 'completed' : ''"
      >
        <div class="view">
          <input class="toggle" type="checkbox" :checked="todo.Done" />
          <label>{{ todo.Content }}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" :value="todo.Content" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
defineProps<{ todos: Todo[] }>();

// TODO: update todo by id
function updateTodo(id: number) {
  fetch(`/api/v1/todos/${id}`, {
    method: "PUT",

    // Adding body or contents to send
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });
}
</script>

<style scoped></style>
