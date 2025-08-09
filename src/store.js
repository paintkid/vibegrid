import { create } from "zustand";

const initialGrid = Array.from({ length: 4 }, () => Array(16).fill(0));

export const useStore = create((set) => ({
  grid: initialGrid,
  isPlaying: false,
  bpm: 120,

  toggleCell: ({ row, col }) => {
    set((state) => {
      // create a copy of grid to avoid mutation
      const newGrid = JSON.parse(JSON.stringify(state.grid));
      // value toggle
      newGrid[row][col] = state.grid[row][col] ? 0 : 1;

      return { grid: newGrid };
    });
  },
}));
