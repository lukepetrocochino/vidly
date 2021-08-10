import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize); // Math.ceil rounds the float to integer

  // If there is only 1 page, we don't want to show the pagination with just "1"

  if (pagesCount === 1) return null;
  // [1... pagesCount].map()
  // we use the package lodash@4.17.10 for this

  // you need the + 1 to make sure the last page is included

  const pages = _.range(1, pagesCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <div
              className="page-link"
              // href="!#" //stops error in console.
              onClick={() => onPageChange(page)}
            >
              {page}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Making sure that the correct type of data is used
// Using prop-types@16.6.2
// List of all prop types:
// https://reactjs.org/docs/typechecking-with-proptypes.html

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
