import { Tax as TTax } from "../api/tax/Tax";

export const TAX_TITLE_FIELD = "id";

export const TaxTitle = (record: TTax): string => {
  return record.id || record.id;
};
