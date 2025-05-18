import { create } from "zustand";

interface ActivityLogState {
  activityLog: string[];
  addActivity: (activity: string) => void;
}

export const useActivityLog = create<ActivityLogState>((set) => ({
  activityLog: [],
  addActivity: (activity) => set((state) => ({
    activityLog: [...state.activityLog, activity],
  })),
}));
