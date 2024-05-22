import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  customerId: bigint | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastLogin: Date | null;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
