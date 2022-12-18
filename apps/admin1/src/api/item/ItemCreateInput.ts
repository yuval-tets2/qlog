import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ItemCreateInput = {
  name?: string | null;
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  quantity?: number | null;
};
