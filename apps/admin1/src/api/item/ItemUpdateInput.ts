import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ItemUpdateInput = {
  name?: string | null;
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  quantity?: number | null;
};
