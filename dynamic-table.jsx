import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  Search,
} from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import { searchContains } from "./../../utils/libraries/easy";
import PropTypes from "prop-types";

export default function KoinoDynamicTable({
  handleCellClick = () => {},
  handleActionClick = () => {},
  handleRowClick = () => {},
  handleRowHover = () => {},
  handleHeaderClick = () => {},
  handleHeaderHover = () => {},
  handleCellHover = () => {},
  handleActionHover = () => {},
  insertColumnsBefore = [],
  insertColumnsAfter = [],
  customColComponents = [],
  tableData = [],
  actions = [],
  headerStyles = [],
  cellStyles = [],
  rowStyles = [],
  headerReplacers = [],
  sorters = [],
  searchFilters = [],
  rowsToDisplayOptions = [],
  hideActionBar,
  showRowCount,
  hidePagination,
}) {
  const [data, setData] = useState(!!tableData ? tableData : []);
  const headers = Object.keys(!!data[0] ? data[0] : {});

  //  ------------------  Handle Actions--------------------------------
  const getActions = (row) => {
    if (actions.length > 1) {
      return (
        <div className="flex w-full ">
          {actions.map((item, index) => {
            if (index === 0) return;
            return (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => {
                  handleActionClick(row, item?.title);
                  handleActionHover(row, item?.title);
                }}
              >
                {item.component(item.title)}
              </div>
            );
          })}
        </div>
      );
    }
  };

  // ---------------------------------Dynamic styles------------------------
  const getcellStyless = (index) => {
    const styledColumns = cellStyles.find((item) => item.column === index);
    const styleForAllCoumns = cellStyles.find((item) => item.column === "*");
    if (!!styledColumns || !!styleForAllCoumns) {
      return {
        styles: !!styledColumns ? styledColumns.styles : {},
        className: styledColumns ? styledColumns.classNames : {},
        allColumnStyles: !!styleForAllCoumns ? styleForAllCoumns.styles : {},
        allColumnClassNames: styleForAllCoumns
          ? styleForAllCoumns.classNames
          : {},
      };
    }
  };

  const getHeaderStyles = (index) => {
    const styledColumns = headerStyles.find((item) => item.column === index);
    const styleForAllCoumns = headerStyles.find((item) => item.column === "*");
    if (!!styledColumns || !!styleForAllCoumns) {
      return {
        styles: !!styledColumns ? styledColumns.styles : {},
        className: styledColumns ? styledColumns.classNames : {},
        allColumnStyles: !!styleForAllCoumns ? styleForAllCoumns.styles : {},
        allColumnClassNames: styleForAllCoumns
          ? styleForAllCoumns.classNames
          : {},
      };
    }
  };

  // ---------Custom components -------
  const getCustomComponents = (colName) => {
    const component = customColComponents.find(
      (item) => item.columnName === colName
    );
    if (!!component) {
      return component;
    }
    return null;
  };

  // ---------- Insertion of Columns ---------
  // Before
  const getHeadersBefore = (colName) => {
    const columnsToInsert = insertColumnsBefore?.find(
      (item) => item.beforeColumnName === colName
    );
    if (!!columnsToInsert) {
      return columnsToInsert.columns.map((item, index) => {
        return (
          <th key={index}>
            {item.headerComponent
              ? item.headerComponent()
              : getHeaderName(item.header)}
          </th>
        );
        // getHeaderName is defined below with var
      });
    }
    return null;
  };
  // After
  const getHeadersAfter = (colName) => {
    const columnsToInsert = insertColumnsAfter?.find(
      (item) => item.beforeColumnName === colName
    );
    if (!!columnsToInsert) {
      return columnsToInsert.columns.map((item, index) => {
        return <th key={index}>{getHeaderName(item.header)}</th>;
        // getHeaderName is defined below with var
      });
    }
    return null;
  };
  const getColumnsInsertedBefore = (cellData, colName) => {
    const columnsToInsert = insertColumnsBefore?.find(
      (item) => item.beforeColumnName === colName
    );
    if (!!columnsToInsert) {
      return columnsToInsert.columns.map((item, index) => {
        return <td key={index}>{item.component(cellData)}</td>;
      });
    }
    return null;
  };
  // After
  const getColumnsInsertedAfter = (cellData, colName) => {
    const columnsToInsert = insertColumnsAfter?.find(
      (item) => item.beforeColumnName === colName
    );
    if (!!columnsToInsert) {
      return columnsToInsert.columns.map((item, index) => {
        return <td key={index}>{item.component(cellData)}</td>;
      });
    }
    return null;
  };
  // ----------Get table headers---------
  var getHeaderName = (headerName) => {
    const exist = headerReplacers.find(
      (item) => item.whatToReplace === headerName
    );
    if (!!exist) {
      return exist.replaceWith;
    }
    return headerName;
  };

  const serialNumberHeader = showRowCount?.headerTitle
    ? showRowCount?.headerTitle
    : "#";
  const getTableHeads = () => {
    if (actions.length > 1) {
      headers.push(actions[0].name);
    }
    // -----Show serial numbers for table -> adding header-------
    if (showRowCount && showRowCount.status) {
      headers.unshift(serialNumberHeader);
    }

    return headers.map((head, index) => {
      const styles = getHeaderStyles(index);
      return (
        <>
          {getHeadersBefore(head)}
          <th
            key={index}
            style={{
              ...styles?.allColumnStyles,
              ...styles?.styles,
              textTransform: "capitalize",
            }}
            className={styles?.allColumnClassNames + " " + styles?.classNames}
            align="left"
            onClick={(row, data) => handleHeaderClick(head)}
            onMouseOver={(row, data) => {
              handleHeaderHover();
            }}
          >
            {getHeaderName(head)}
          </th>
          {getHeadersAfter(head)}
        </>
      );
    });
  };

  // ------------------- Search, pagination and filter Logic -----------------------
  const [rowsToDisplay, setRowsRowsToDisplay] = useState(10);
  const [currentPageNumber, setPageNumber] = useState(1);
  const [paginationData, setPaginationData] = useState(data);
  const calcNumOfPages = Math.ceil(paginationData.length / rowsToDisplay);
  const numberOfPages = calcNumOfPages ? calcNumOfPages : 1;
  const increasePageNumber = () => {
    if (currentPageNumber < numberOfPages) {
      setPageNumber(currentPageNumber + 1);
    }
  };
  const decreasePageNumber = () => {
    if (currentPageNumber !== 1) {
      setPageNumber(currentPageNumber - 1);
    }
  };
  const changeRowsToDisplay = (value) => {
    console.log(typeof value);
    setRowsRowsToDisplay(parseInt(value));
  };

  const gotToFirstPage = (value) => {
    setPageNumber(1);
  };
  const goToLastPage = () => {
    setPageNumber(numberOfPages);
  };

  const paginatedData = () => {
    return paginationData.slice(
      currentPageNumber * rowsToDisplay - rowsToDisplay,
      currentPageNumber * rowsToDisplay
    );
  };

  const [searchFilter, setSearchFilter] = useState(headers[0]);
  const [filterValue, setFilter] = useState(headers[0]);

  const executeLocalSearch = (searchInput) => {
    const searchContains = (dataToSearchIn, searchValue, property) => {
      try {
        let reg = new RegExp("[^,]*" + searchValue + "[^,]*", "ig");
        // console.log(dataToSearchIn)
        const searchResults = dataToSearchIn.filter((item) =>
          item[property].toString().match(reg)
        );
        return searchResults;
      } catch {
        return;
      }
    };
    const searchResult = searchContains(
      paginatedData(),
      searchInput,
      searchFilter
    );
    searchInput !== ""
      ? setPaginationData(searchResult)
      : setPaginationData(data);
    return !!searchResult ? searchResult : [];
  };

  // ----------Get table rows---------
  const getTableRows = () => {
    const tableRowData = paginatedData();
    return tableRowData
      .sort((a, b) => {
        if (a[filterValue] === undefined) return;
        const firstValue = a[filterValue]?.toString().toUpperCase();
        const secondValue = b[filterValue]?.toString().toUpperCase();
        if (firstValue > secondValue) {
          return parseInt(firstValue) ? -1 : 1;
          //Numbers and non non numbers sort in opposite directions so
          //this is a check to return different sort values for the sort
        } else if (firstValue < secondValue) {
          return parseInt(firstValue) ? 1 : -1;
        } else {
          return 0;
        }
      })
      .map((currentRow, index) => {
        let row;
        let count =
          index + 1 + currentPageNumber * rowsToDisplay - rowsToDisplay;
        if (actions.length > 1) {
          row = {
            [serialNumberHeader]: count,
            ...currentRow,
            action: getActions(row),
          };
        } else {
          row = currentRow;
        }
        const cells = Object.keys(row);
        return (
          <tr
            key={index}
            onClick={(row) => {
              handleRowClick(row);
            }}
            onMouseOver={(row, data) => {
              handleRowHover(row);
            }}
            style={rowStyles?.styles}
            className={rowStyles?.classNames}
          >
            {cells.map((headerName, index2) => {
              const styles = getcellStyless(index2);
              const customeCell = getCustomComponents(headerName);
              console.log(customeCell);
              const cellData = row[headerName];
              return (
                <>
                  {getColumnsInsertedBefore(cellData, headerName)}
                  <td
                    key={index2 + "cell"}
                    onClick={() => handleCellClick(cellData, row)}
                    onMouseOver={(row, data) => {
                      handleCellHover();
                    }}
                  >
                    <div
                      style={{ ...styles?.allColumnStyles, ...styles?.styles }}
                      className={
                        styles?.allColumnClassNames + " " + styles?.classNames
                      }
                    >
                      {customeCell !== null
                        ? customeCell.component(cellData)
                        : cellData}
                    </div>
                  </td>
                  {getColumnsInsertedAfter(cellData, headerName)}
                </>
              );
            })}
          </tr>
        );
      });
  };

  const ejectSearchFilters = () => {
    const filterForSearch = searchFilters.length ? searchFilters : headers;
    return filterForSearch?.map((item, index) => {
      return <option key={index}>{item}</option>;
    });
  };

  const ejectSorters = () => {
    const filterForSorters = sorters.length ? sorters : headers;
    return filterForSorters?.map((item, index) => {
      return <option key={index}>{item}</option>;
    });
  };

  const ejectRowsToDisplayOptions = () => {
    const defaultOptions = [5, 10, 30, 50, 100];
    const displayOptions = rowsToDisplayOptions
      ? rowsToDisplayOptions
      : defaultOptions;
    return displayOptions.map((item, index) => {
      return (
        <option key={index} selected={item === rowsToDisplay}>
          {item}
        </option>
      );
    });
  };
  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* -----------------------  Search and filter  bar --------------*/}
      {!hideActionBar && (
        <div className="w-full">
          <div className="bg-gray-100 flex justify-between p-2 items-center">
            <div className="flex items-center">
              <span className="mr-2">Filter by</span>
              <select
                className="cursor-pointer"
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
              >
                {ejectSorters()}
              </select>
            </div>
            <div className="flex justify-end items-center">
              <div className="mr-2">
                <span className="mr-2">Search by</span>
                <select
                  onChange={(e) => {
                    setSearchFilter(e.target.value);
                  }}
                  className="cursor-pointer"
                >
                  {ejectSearchFilters()}
                </select>
              </div>
              <input
                type="search"
                onChange={(e) => {
                  executeLocalSearch(e.target.value);
                }}
                className="border mr-1 p-2 outline-none rounded-lg border-gray-100 w-[300px] h-[40px]"
              />
              <Search />
            </div>
          </div>
        </div>
      )}

      {/*--------------------- Table entry point area ------------------- */}
      <div className="w-full h-full overflow-auto">
        <table className="w-full">
          <thead className="w-full sticky top-0 bg-white">
            <tr>{getTableHeads()}</tr>
          </thead>
          <tbody className="w-full">{getTableRows()}</tbody>
        </table>
      </div>
      {!hidePagination && (
        <div className="flex justify-between">
          <div className="flex">
            <span className="mr-2">Page</span>
            <span className="mr-2">{currentPageNumber}</span>
            <span className="mr-2">of</span>
            <span className="mr-2">{numberOfPages}</span>
            <div>
              <select
                onChange={(e) => changeRowsToDisplay(e.target.value)}
                className="ml-4 cursor-pointer"
              >
                {ejectRowsToDisplayOptions()}
              </select>
            </div>
          </div>
          <div className="flex">
            <span>
              <KeyboardDoubleArrowLeft
                className="cursor-pointer"
                onClick={() => gotToFirstPage()}
              />
            </span>
            <span>
              <KeyboardArrowLeft
                className="cursor-pointer"
                onClick={() => decreasePageNumber()}
              />
            </span>
            <span>
              <KeyboardArrowRight
                className="cursor-pointer"
                onClick={() => increasePageNumber()}
              />
            </span>
            <span>
              <KeyboardDoubleArrowRight
                className="cursor-pointer"
                onClick={() => goToLastPage()}
              />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// Documentation
KoinoDynamicTable.prototype = {
  /**
   * @tableData {ArrayOf(Object)}  - The tableData contains all the data for your table
   * This data is automatically used to generate headers and rows for your table.
   * It can be an array of object of shape any property and value.
   */
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,

  /**
   * @actions  {ArrayOf(Object)}  - The action contains an array of object used to define actions for the
   * But the first object in the array must be an object of of shape
   */
  actions: PropTypes.arrayOf(
    /** The first index must contain the header name and the styles of the wrapper for the div */
    /** The rest of the objects in the array are the actions and they follow this pattern */
    PropTypes.shape(
      {
        containerStyles: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      },
      PropTypes.shape({
        component: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
      })
    )
  ),

  /**
   * @customColComponents {ArrayOf(Object)}   --The customColComponents prop is used to define custom componenents
   * for particular columns
   */
  customColComponents: PropTypes.arrayOf(
    PropTypes.shape({
      columnName: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired,
    })
  ),

  /**
   * @insertColumnsBefore {ArrayOf(Object)}   --The insertColumnsBefore prop is used to insert custom
   * of custom components  before a specified column name
   */
  insertColumnsBefore: PropTypes.arrayOf(
    PropTypes.shape({
      beforeColumnName: PropTypes.string.isRequired,
      columns: PropTypes.arrayOf(
        PropTypes.shape([
          {
            header: PropTypes.string.isRequired,
            headerComponent: PropTypes.func.isRequired,
            component: PropTypes.func.isRequired,
          },
        ])
      ),
    })
  ),

  /**
   * @insertColumnsAfter {ArrayOf(Object)}    --The insertColumnsAfter prop is used to insert custom components  after a specified column name
   */
  insertColumnsAfter: PropTypes.arrayOf(
    PropTypes.shape({
      beforeColumnName: PropTypes.string.isRequired,
      columns: PropTypes.arrayOf(
        PropTypes.shape([
          {
            header: PropTypes.string.isRequired,
            headerComponent: PropTypes.func.isRequired,
            component: PropTypes.func.isRequired,
          },
        ])
      ),
    })
  ),

  /**
   * @headerStyles {ArrayOf(Object)}   headerStyles  --The headerStyles prop is used to specify styles for specified headers.
   * When * is used as column name.
   * The styles is applied for all headers
   */
  headerStyles: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string.isRequired,
      styles: PropTypes.object.isRequired,
      classNames: PropTypes.string.isRequired,
    })
  ),

  /**
   * @cellStyles {ArrayOf(Object)} cellStyles  --The cellStyles prop is used to specify styles for particular column of cells
   */
  cellStyles: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string.isRequired,
      styles: PropTypes.object.isRequired,
      classNames: PropTypes.string.isRequired,
    })
  ),

  /**
   * @rowStyles {ArrayOf(Object)}  rowStyles --The rowStyles is used to specify styles for all the rows of the table
   */
  rowStyles: PropTypes.arrayOf(
    PropTypes.shape({
      rows: PropTypes.number.isRequired,
      styles: PropTypes.object.isRequired,
      classNames: PropTypes.string.isRequired,
    })
  ),

  /**
   * @headerReplacers {ArrayOf(Object)} --The headerReplacers props is used to replace the name of a particular header,
   * but note that anywhere a prop requires a column name for targeting a column
   * The original name of the column before changing it with headerReplacers should be used to
   */
  headerReplacers: PropTypes.arrayOf(PropTypes.string.isRequired),

  /**
   * @sorters  {ArrayOf(Integers)} --The sorters props is an array of original column names that you want to be used as filters
   */
  sorters: PropTypes.arrayOf(PropTypes.string),

  /**
   * @searchFilters  {ArrayOf(Strings)} --The searchFilters props is an array of original column names that you want
   * to be used as filters fro searching.
   */
  searchFilters: PropTypes.arrayOf(PropTypes.string),

  /**
   * @rowsToDisplayOptions  {ArrayOf(Integers)} --The rowsToDisplayOptions is used to provide te user with options
   * on how many rows should be displayes per page
   */
  rowsToDisplayOptions: PropTypes.arrayOf(PropTypes.string),

  /**
   * @handleCellClick {Function} --This function returns the cellData and rowData when a cell is clicked
   */
  handleCellClick: PropTypes.func,

  /**
   * @handleCellHover This function returns the cellData when a cell is hovered
   */
  handleCellHover: PropTypes.func,

  /**
   * @handleRowClick  {Function} --This function returns the rowData when a row is clicked *
   */
  handleRowClick: PropTypes.func,

  /**
   * @handleActionClick  {Functionn} --This function returns the name of the action clicked and the rowData
   */
  handleActionClick: PropTypes.func,

  /**
   * @handleActionHover  {Function} --This function returns the name of the hovered clicked and the rowData
   */
  handleActionHover: PropTypes.func,

  /**
   * @handleRowHover  {Function} --This function returns the rowData when a row is hovered
   */
  handleRowHover: PropTypes.func,

  /**
   * @handleHeaderClick {Function} --This function returns the header name when a header is clicked
   */
  handleHeaderClick: PropTypes.func,

  /**
   * @handleHeaderHover  {Function} --This function returns the  header name when a header is hovered
   */
  handleHeaderHover: PropTypes.func,

  /**
   * @hideActionBar {boolean} --This prop is used to hide the action bar containing search bar, filters, etc.
   */
  hideActionBar: PropTypes.bool,

  /**
   * @showRowCount {boolean} --This prop is used to display a row count  aka serial numbers column.
   */
  showRowCount: PropTypes.bool,

  /**
   * @hidePagination {boolean} --This props is used to hide the pagination bar
   */
  hidePagination: PropTypes.bool,
};

KoinoDynamicTable.defaultProps = {};
