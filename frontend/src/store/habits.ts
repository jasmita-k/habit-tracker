import { defineStore } from 'pinia';

interface Habit {
  id: number;
  name: string;
  streak: number;
  completions: string[];
}

export const useHabitsStore = defineStore('habits', {
  state: () => ({
    habits: [
      { id: 1, name: 'Drink Water', streak: 5, completions: ['2025-08-10', '2025-08-11'] },
      { id: 2, name: 'Read 10 pages', streak: 3, completions: [] }
    ] as Habit[]
  }),
  actions: {
    addHabit(name: string) {
      this.habits.push({
        id: Date.now(),
        name,
        streak: 0,
        completions: []
      });
    },
    markComplete(id: number, date: string) {
      const habit = this.habits.find(h => h.id === id);
      if (habit && !habit.completions.includes(date)) {
        habit.completions.push(date);
        habit.streak++;
      }
    }
  }
});
