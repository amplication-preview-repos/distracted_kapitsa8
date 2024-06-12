import { ComplaintCreateNestedManyWithoutLocationsInput } from "./ComplaintCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  bandwidth?: number | null;
  complaints?: ComplaintCreateNestedManyWithoutLocationsInput;
  name?: string | null;
  registeredEmail?: string | null;
  routerIp?: string | null;
  status?: "Option1" | null;
  statusSince?: Date | null;
  wanIp?: string | null;
};
