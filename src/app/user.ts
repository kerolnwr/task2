import { EmailValidator } from "@angular/forms";

export interface User {
  userId: string;
  name: string;
  email: string;
  privilege: string;
  status: string;
  workgroup: string;
  subWorkgroup: string;
  state: string;
  area: string;
  createBy: string;
  createDate: string;
}
