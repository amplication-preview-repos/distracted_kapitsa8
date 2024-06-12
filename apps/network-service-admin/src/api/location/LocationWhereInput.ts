import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ComplaintListRelationFilter } from "../complaint/ComplaintListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type LocationWhereInput = {
  bandwidth?: IntNullableFilter;
  complaints?: ComplaintListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  registeredEmail?: StringNullableFilter;
  routerIp?: StringNullableFilter;
  status?: "Option1";
  statusSince?: DateTimeNullableFilter;
  wanIp?: StringNullableFilter;
};
