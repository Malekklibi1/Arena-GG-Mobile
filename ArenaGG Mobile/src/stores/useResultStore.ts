import { create } from "zustand";

interface ResultState {
  result: Record<string, string>;
}

export const useResultStore = create<ResultState>(() => ({
  result: {},
}));
