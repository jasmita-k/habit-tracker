<template>
  <div class="p-6 max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">My Habits</h1>
    <button @click="showModal = true" class="px-4 py-2 bg-blue-500 text-white rounded mb-4">
      Add Habit
    </button>

    <div class="grid gap-4">
      <HabitCard
        v-for="habit in habitsStore.habits"
        :key="habit.id"
        :habit="habit"
        @markComplete="markComplete"
      />
    </div>

    <AddHabitModal v-if="showModal" @close="showModal = false" @add="addHabit" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useHabitsStore } from '../store/habits';
import HabitCard from '../components/HabitCard.vue';
import AddHabitModal from '../components/AddHabitModal.vue';

const showModal = ref(false);
const habitsStore = useHabitsStore();

function addHabit(name: string) {
  habitsStore.addHabit(name);
  showModal.value = false;
}

function markComplete(id: number) {
  const today = new Date().toISOString().split('T')[0];
  habitsStore.markComplete(id, today);
}
</script>
