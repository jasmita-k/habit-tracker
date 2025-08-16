<template>
  <div class="bg-white p-4 rounded shadow flex items-center justify-between">
    <div>
      <h2 class="text-lg font-semibold">{{ habit.name }}</h2>
      <p class="text-sm text-gray-600">Streak: {{ habit.streak }} 🔥</p>
    </div>
    <button
      class="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
      @click="$emit('markComplete', habit.id)"
    >
      Mark Done
    </button>
  </div>
</template>

<script setup lang="ts">
interface Habit {
  id: number;
  name: string;
  streak: number;
  completions: string[];
}

defineProps<{
  habit: Habit
}>()

defineEmits<{
  (e: 'markComplete', id: number): void
}>()
</script>
