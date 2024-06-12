import { ComplaintUpdateManyWithoutLocationsInput } from "./ComplaintUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  bandwidth?: number | null;
  complaints?: ComplaintUpdateManyWithoutLocationsInput;
  name?: string | null;
  registeredEmail?: string | null;
  routerIp?: string | null;
  status?: "Option1" | null;
  statusSince?: Date | null;
  wanIp?: string | null;
};
