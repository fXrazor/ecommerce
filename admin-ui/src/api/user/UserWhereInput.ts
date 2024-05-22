import { BigIntNullableFilter } from "../../util/BigIntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UserWhereInput = {
  customerId?: BigIntNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastLogin?: DateTimeNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
