import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  bandwidth?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  registeredEmail?: SortOrder;
  routerIp?: SortOrder;
  status?: SortOrder;
  statusSince?: SortOrder;
  updatedAt?: SortOrder;
  wanIp?: SortOrder;
};
