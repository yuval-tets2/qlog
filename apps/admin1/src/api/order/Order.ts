import { Item } from "../item/Item";

export type Order = {
  createdAt: Date;
  description: string | null;
  id: string;
  items?: Array<Item>;
  updatedAt: Date;
};
