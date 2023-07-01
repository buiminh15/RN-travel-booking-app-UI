export type Poke = {
  name: string;
  url: string;
};

export type PokeResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Poke[];
};
