import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./userstable.module.scss";
import { getData } from "../../api/request";
import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import Image from "next/image";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import TableFilter from "./tablefilter/TableFilter";
import Icon from "../icon/Icon";
import Button from "../button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UserActions from "./useractions/UserActions";

interface RowData {
  id: number;
  ref_id: string;
  event: string;
  recipients: number;
  sending_date: string;
  total: number;
}

const UsersTable = ({
  endpoint,
  data,
  columns,
  tableTitle,
  button,
  icon,

  handlePageChange,
}: any) => {
  const router = useRouter();
  const [filter, setFilter] = useState();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  // const [record, setRecord] = useState();
  // const [data, setData] = useState();
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result: any | undefined = await getData(endpoint);
  //       if (result) {
  //         setRecord(result?.data);
  //         setData(result?.data);
  //       }
  //     } catch (error: any) {
  //       console.log(error);
  //       setError(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const table = useReactTable({
    columns,
    data,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setFilter,
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    state: {
      globalFilter: filter,
      sorting: sorting,
    },
  });

  const handleFilter = (e: any) => {
    setFilter(e.target.value);
  };

  const handle = useFullScreenHandle();
  const EnterFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  // sending the rowId  to the DashboardPage Route

  return (
    <FullScreen handle={handle}>
      <div className={styles.tableWrapper}>
        <div className={styles.tableTop}>
          <div className={styles.topleft}>
            <span>{icon}</span>

            <span className={styles.span1}>{tableTitle}</span>
            <span className={styles.span2}>{data.length}</span>
          </div>
          <div className={styles.topright}>
            <TableFilter handleFilter={handleFilter} />

            <div>{button}</div>

            <div onClick={EnterFullScreen}>
              {isFullScreen ? (
                <Button
                  onClick={handle.exit}
                  image={
                    <AiOutlineFullscreenExit
                      style={{ width: "20px", height: "20px" }}
                    />
                  }
                  className={" primaryBtnWhiteBackground"}
                />
              ) : (
                <Button
                  onClick={handle.enter}
                  image={
                    <Image
                      width={20}
                      height={20}
                      alt="send icon"
                      src="/icons/screen.svg"
                    />
                  }
                  className={" primaryBtnWhiteBackground"}
                />
              )}
            </div>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className={styles.tableRow}>
                  {headerGroup.headers.map((header) => (
                    <th
                      onClick={header.column.getToggleSortingHandler()}
                      key={header.id}
                    >
                      <span className={styles.tableHeadContainer}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? null}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  onClick={() =>
                    handlePageChange &&
                    handlePageChange(row.original as RowData)
                  }
                  className={styles.tbodyRow}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className={styles.tbodyCell}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                  <td className={styles.userActionContainer}>
                    <UserActions />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <span>Showing Result of {}</span>
          <button onClick={table.previousPage}>previous</button>
          <button onClick={table.nextPage}>Next</button>
        </div>
      </div>
    </FullScreen>
  );
};

export default UsersTable;
