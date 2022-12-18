import { Order } from "../order/Order";

export type Item = {
  createdAt: Date;
  id: string;
  name: string | null;
  order?: Order | null;
  price: number | null;
  quantity: number | null;
  updatedAt: Date;
};
