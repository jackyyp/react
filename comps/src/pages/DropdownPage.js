import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage() {
  //controlled component
  const [selected, setSelected] = useState(null); // string | null

  const handleSelect = (option) => {
    setSelected(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div className="flex">
      <Dropdown options={options} value={selected} onChange={handleSelect} />
    </div>
  );
}

export default DropdownPage;
