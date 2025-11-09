import { create } from "zustand";

interface Tour {
  id: string;
  title: string;
  latitude: number;
  longitude: number;
  imageUrl?: string;
  type: string;
  priceBase: number;
}

interface TourStore {
  tours: Tour[];
  setTours: (tours: Tour[]) => void;
}

export const useTourStore = create<TourStore>((set) => ({
  tours: [],
  setTours: (tours) => set({ tours }),
}));
