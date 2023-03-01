import DataTable from "react-data-table-component";
import Chart from "./Chart";

function DataTableComp({ data, selectedSubHeader, selectedSubCategories }) {
  const addClickHandler = (e) => {
    e.target.innerText = 'Added';
  }


  console.log('data', data);
  console.log('selectedSubHeader', selectedSubHeader);
  console.log('selectedSubCategories', selectedSubCategories);
  if(selectedSubHeader.length > 0) {
    data = data.filter(item => {
      return item.market_display_name === selectedSubHeader
    });
  }
  if(selectedSubCategories.length > 0) {
      data = data.filter(item => selectedSubCategories.includes(item.submarket_display_name))
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.display_name
    },
    {
      name: "Last Price",
      selector: (row) => row.pip,
      // sortable: true
    },
    {
      name: "24h Change",
      selector: (row) => row.pip,
      when: row => row.pip > 0,
      style: row => ({ color: parseFloat(row.pip) < 0 ? 'red' : 'green' }),
    },
    {
      name: "",
      selector: () => <Chart></Chart>
    },
    {
      name: "",
      button: true,
      cell: (row) =>
      (<button
        className="btn btn-light btn-xs m-4"
        onClick={(e) => addClickHandler(e, row.id)}
      >
        Add
      </button>)
    }
  ]

  return (
    <>
      <hr />
      <div className="ml-3 mr-3">
        <DataTable
          columns={columns}
          data={data}
          pagination
          fixedHeader
        ></DataTable>
      </div>
    </>
  )
}

export default DataTableComp