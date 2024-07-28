import { ColumnDef } from "@tanstack/react-table";

// event schedule data

interface RowData {
  id: number;
  ref_id: string;
  event: string;
  recipients: number;
  sending_date: string;
  total: number;
}
const data: RowData[] = [
  {
    id: 1,
    ref_id: "E00540",
    event: "Happy Valentine",
    recipients: 578,
    sending_date: "23-09-2024",
    total: 180000,
  },
  {
    id: 2,
    ref_id: "E023002",
    event: "Happy Easter",
    recipients: 578,
    sending_date: "23-09-2024",
    total: 160000,
  },
  {
    id: 3,
    ref_id: "E099003",
    event: "Happy Workers day",
    recipients: 578,
    sending_date: "23-09-2024",
    total: 190000,
  },
  {
    id: 4,
    ref_id: "E003404",
    event: "Happy Id el Maulud",
    recipients: 578,
    sending_date: "23-09-2024",
    total: 180000,
  },
  // {
  //   id: 5,
  //   ref_id: "E00540",
  //   event: "Happy Valentine",
  //   recipients: 578,
  //   sending_date: "23-09-2024",
  //   total: 150000,
  // },
  // {
  //   id: 6,
  //   ref_id: "E00540",
  //   event: "Happy Valentine",
  //   recipients: 578,
  //   sending_date: "23-09-2024",
  //   total: 150000,
  // },
  // {
  //   id: 7,
  //   ref_id: "E00540",
  //   event: "Happy Valentine",
  //   recipients: 578,
  //   sending_date: "23-09-2024",
  //   total: 150000,
  // },
  // {
  //   id: 8,
  //   ref_id: "E00540",
  //   event: "Happy Valentine",
  //   recipients: 578,
  //   sending_date: "23-09-2024",
  //   total: 170000,
  // },
  // {
  //   id: 9,
  //   ref_id: "E00540",
  //   event: "Happy Valentine",
  //   recipients: 578,
  //   sending_date: "23-09-2024",
  //   total: 160000,
  // },
];

// event schedule column
const columns: ColumnDef<RowData>[] = [
  {
    header: "#",
    accessorKey: "id",
  },

  {
    header: "Ref.ID",
    accessorKey: "ref_id",
  },

  {
    header: "Event",
    accessorKey: "event",
  },

  {
    header: "Recipient",
    accessorKey: "recipients",
  },

  {
    header: "Sending Date",
    accessorKey: "sending_date",
  },
  {
    header: "Total",
    accessorKey: "total",
    cell: (info: any) => `  ₦${info.getValue()}`,
  },
];

export { data, columns };
