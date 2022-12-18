import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";

export type OrderWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  items?: ItemListRelationFilter;
};
