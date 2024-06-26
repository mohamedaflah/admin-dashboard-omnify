export interface TableData {
  created_on: string;
  payer: string;
  status: "Lead" | "Active" | "Inactive";
  email: string;
  payer_phone: string;
  services: string;
  scheduled: string;
}
