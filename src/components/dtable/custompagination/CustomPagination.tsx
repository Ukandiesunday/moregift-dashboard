import styles from "./custompagination.module.scss";
const CustomPagination = ({
  totalPage,
  currentPage,
  handlePageChange,
  pageSize,
}: any) => {
  const pageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      {/* <div className={styles.result}>
        Showing {currentPage} - {totalPage} of {pageSize} Events
      </div> */}

      <div className={styles.btnContainer}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={currentPage === pageNumber ? styles.activePage : ""}
          >
            {pageNumber}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomPagination;
