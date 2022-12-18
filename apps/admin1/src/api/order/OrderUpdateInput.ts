import { ItemUpdateManyWithoutOrdersInput } from "./ItemUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  description?: string | null;
  items?: ItemUpdateManyWithoutOrdersInput;
};
