import { EcommerceAdmin as TEcommerceAdmin } from "../api/ecommerceAdmin/EcommerceAdmin";

export const ECOMMERCEADMIN_TITLE_FIELD = "username";

export const EcommerceAdminTitle = (record: TEcommerceAdmin): string => {
  return record.username?.toString() || String(record.id);
};
