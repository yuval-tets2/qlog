import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ItemWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  order?: OrderWhereUniqueInput;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
};
