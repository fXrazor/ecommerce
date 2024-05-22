import { EcommerceAdminWhereInput } from "./EcommerceAdminWhereInput";
import { EcommerceAdminOrderByInput } from "./EcommerceAdminOrderByInput";

export type EcommerceAdminFindManyArgs = {
  where?: EcommerceAdminWhereInput;
  orderBy?: Array<EcommerceAdminOrderByInput>;
  skip?: number;
  take?: number;
};
