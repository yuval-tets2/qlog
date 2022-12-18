import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  orderId?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
