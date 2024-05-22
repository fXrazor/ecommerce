import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  customerId?: bigint | null;
  email?: string | null;
  firstName?: string | null;
  lastLogin?: Date | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
