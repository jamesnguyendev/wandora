export interface Tour {
  id: string;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  priceBase: number;
  type: "room" | "experience";
  imageUrl?: string;
}

export type CreateTour = Omit<Tour, "id">;
