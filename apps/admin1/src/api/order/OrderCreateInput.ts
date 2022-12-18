import { ItemCreateNestedManyWithoutOrdersInput } from "./ItemCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  description?: string | null;
  items?: ItemCreateNestedManyWithoutOrdersInput;
};
