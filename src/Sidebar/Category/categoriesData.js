<div className={styles.reports}>
{filteredReports
    .slice((currentPage - 1) * reportsPerPage, currentPage * reportsPerPage)
    .map((report, index) => (
      <ReportCard key={index} report={report} />
    ))}
</div>
</div>
<div className={styles.pagination}>
  <button
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
  >
    &lt;
  </button>
  <span>{currentPage}</span>
  <button
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    &gt;
  </button>
</div>