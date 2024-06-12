import { Complaint } from "../complaint/Complaint";

export type Location = {
  bandwidth: number | null;
  complaints?: Array<Complaint>;
  createdAt: Date;
  id: string;
  name: string | null;
  registeredEmail: string | null;
  routerIp: string | null;
  status?: "Option1" | null;
  statusSince: Date | null;
  updatedAt: Date;
  wanIp: string | null;
};
