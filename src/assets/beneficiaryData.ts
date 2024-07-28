// beneficiary data

import { ColumnDef } from "@tanstack/react-table";

interface RowData {
  id: number;
  email: string;
  full_name: string;
  gift_cash: number;
  status: string;
}
const beneficiaryData: RowData[] = [
  {
    id: 1,
    email: "max.kayoda@zenithbank.com",
    full_name: "Kayode Maxwell",
    gift_cash: 150000,
    status: "scheduled",
  },
  {
    id: 2,
    email: "max.kayoda@zenithbank.com",
    full_name: "Kayode Maxwell",
    gift_cash: 150000,
    status: "scheduled",
  },
  {
    id: 3,
    email: "max.kayoda@zenithbank.com",
    full_name: "Kayode Maxwell",
    gift_cash: 150000,
    status: "scheduled",
  },
  {
    id: 4,
    email: "max.kayoda@zenithbank.com",
    full_name: "Kayode Maxwell",
    gift_cash: 150000,
    status: "scheduled",
  },
  {
    id: 5,
    email: "max.kayoda@zenithbank.com",
    full_name: "Kayode Maxwell",
    gift_cash: 150000,
    status: "scheduled",
  },
  {
    id: 6,
    email: "max.kayoda@zenithbank.com",
    full_name: "Kayode Maxwell",
    gift_cash: 150000,
    status: "scheduled",
  },
  {
    id: 7,
    email: "max.kayoda@zenithbank.com",
    full_name: "Kayode Maxwell",
    gift_cash: 150000,
    status: "scheduled",
  },
  {
    id: 8,
    email: "max.kayoda@zenithbank.com",
    full_name: "Kayode Maxwell",
    gift_cash: 150000,
    status: "scheduled",
  },
  // {
  //   id: "9",
  //   email: "max.kayoda@zenithbank.com",
  //   full_name: "Kayode Maxwell",
  //   gift_cash: "150,000",
  //   status: "scheduled",
  // },
  // {
  //   id: "10",
  //   email: "max.kayoda@zenithbank.com",
  //   full_name: "Kayode Maxwell",
  //   gift_cash: "150,000",
  //   status: "scheduled",
  // },
  // {
  //   id: "11",
  //   email: "max.kayoda@zenithbank.com",
  //   full_name: "Kayode Maxwell",
  //   gift_cash: "150,000",
  //   status: "scheduled",
  // },
  // {
  //   id: "12",
  //   email: "max.kayoda@zenithbank.com",
  //   full_name: "Kayode Maxwell",
  //   gift_cash: "150,000",
  //   status: "scheduled",
  // },
  // {
  //   id: "13",
  //   email: "max.kayoda@zenithbank.com",
  //   full_name: "Kayode Maxwell",
  //   gift_cash: "150,000",
  //   status: "scheduled",
  // },
];

const columns: ColumnDef<RowData>[] = [
  {
    header: () => "#",
    accessorKey: "id",
  },
  {
    header: () => "Email",
    accessorKey: "email",
  },
  {
    header: () => "Full Name",
    accessorKey: "full_name",
  },
  {
    header: () => "Status",
    accessorKey: "status",
  },
];

export { beneficiaryData, columns };
