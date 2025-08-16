<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg shadow w-96">
      <h2 class="text-xl font-bold mb-4">Add New Habit</h2>
      <input
        v-model="name"
        type="text"
        placeholder="Habit name"
        class="border p-2 w-full rounded mb-4"
      />
      <div class="flex justify-end space-x-2">
        <button
          @click="$emit('close')"
          class="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          @click="submit"
          class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');

const emit = defineEmits<{
  (e: 'close'): void,
  (e: 'add', name: string): void
}>();

function submit() {
  if (name.value.trim()) {
    emit('add', name.value);
    name.value = '';
  }
}
</script>
