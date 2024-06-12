import { SortOrder } from "../../util/SortOrder";

export type ComplaintOrderByInput = {
  complaintCreationTime?: SortOrder;
  complaintStatus?: SortOrder;
  complaintStatusOption?: SortOrder;
  createdAt?: SortOrder;
  creationTime?: SortOrder;
  creationTimestamp?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  status?: SortOrder;
  statusOfComplaint?: SortOrder;
  updatedAt?: SortOrder;
};
