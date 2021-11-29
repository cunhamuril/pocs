import React, { useState, useMemo } from "react";
import DataTable from "react-data-table-component";

import FilterComponent from "../../components/Filter";

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Address",
    selector: (row) => row.address,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    name: "Jordan Rice",
    email: "Rosemary17@gmail.com",
    address: "00189 Grimes Spurs",
  },
  {
    id: 2,
    name: "Latoya O'Reilly",
    email: "Darrick.Hammes@gmail.com",
    address: "4167 Okuneva Ports",
  },
  {
    id: 3,
    name: "Ed Nicolas",
    email: "Savanna_Marvin58@gmail.com",
    address: "00126 Eldora Spur",
  },
  {
    id: 4,
    name: "Miss Tammy Koelpin",
    email: "Lennie.Padberg@hotmail.com",
    address: "77745 Antonina Mountains",
  },
  {
    id: 5,
    name: "Alexis Aufderhar",
    email: "Anjali.Welch0@yahoo.com",
    address: "2538 Stanton Route",
  },
];

export default function MyComponent() {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = data.filter((item) => {
    return (
      (item.name &&
        item.name.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.email &&
        item.email.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.address &&
        item.address.toLowerCase().includes(filterText.toLowerCase()))
    );
  });

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(value) => setFilterText(value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      title="Desserts"
      columns={columns}
      data={filteredItems}
      pagination
      selectableRows
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      persistTableHead
    />
  );
}
