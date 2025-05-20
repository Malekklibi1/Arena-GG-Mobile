import { create } from "zustand";

interface TaskProgress {
  currLevel: number;
  totalLevel: number;
}

interface TaskProgressState {
  taskProgress: TaskProgress[];
  updateTaskProgress: (index: number, progress: Partial<TaskProgress>) => void;
}

export const useTaskProgress = create<TaskProgressState>((set) => ({
  taskProgress: [
    { currLevel: 0, totalLevel: 1 },
    { currLevel: 0, totalLevel: 1 },
    { currLevel: 0, totalLevel: 1 },
    { currLevel: 0, totalLevel: 1 },
    { currLevel: 0, totalLevel: 1 },
  ],
  updateTaskProgress: (index, progress) =>
    set((state) => {
      const updated = [...state.taskProgress];
      updated[index] = { ...updated[index], ...progress };
      return { taskProgress: updated };
    }),
}));
