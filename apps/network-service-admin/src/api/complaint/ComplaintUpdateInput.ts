import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type ComplaintUpdateInput = {
  complaintCreationTime?: Date | null;
  complaintStatus?: "Option1" | null;
  complaintStatusOption?: "Option1" | null;
  creationTime?: Date | null;
  creationTimestamp?: Date | null;
  location?: LocationWhereUniqueInput | null;
  status?: "Option1" | null;
  statusOfComplaint?: "Option1" | null;
};
