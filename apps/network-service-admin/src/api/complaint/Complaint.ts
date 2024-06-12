import { Location } from "../location/Location";

export type Complaint = {
  complaintCreationTime: Date | null;
  complaintStatus?: "Option1" | null;
  complaintStatusOption?: "Option1" | null;
  createdAt: Date;
  creationTime: Date | null;
  creationTimestamp: Date | null;
  id: string;
  location?: Location | null;
  status?: "Option1" | null;
  statusOfComplaint?: "Option1" | null;
  updatedAt: Date;
};
