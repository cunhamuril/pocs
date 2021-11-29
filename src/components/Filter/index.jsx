import React from "react";
import { Input, Button } from "antd";

function Filter({ onFilter, onClear, filterText }) {
  return (
    <div>
      <Input onChange={(e) => onFilter(e.target.value)} value={filterText} />
      <Button onClick={onClear}>X</Button>
    </div>
  );
}

export default Filter;
