import Image from "next/image";
import styles from "./tableFilter.module.scss";
import { IoSearchOutline } from "react-icons/io5";

const TableFilter = ({ handleFilter }: any) => {
  return (
    <div className={styles.inputContainer}>
      <IoSearchOutline className={styles.icon} />
      <input type="text" placeholder="Search table" onChange={handleFilter} />
    </div>
  );
};

export default TableFilter;
