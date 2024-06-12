import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type ComplaintWhereInput = {
  complaintCreationTime?: DateTimeNullableFilter;
  complaintStatus?: "Option1";
  complaintStatusOption?: "Option1";
  creationTime?: DateTimeNullableFilter;
  creationTimestamp?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  status?: "Option1";
  statusOfComplaint?: "Option1";
};
