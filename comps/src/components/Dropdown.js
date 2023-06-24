import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false); //bool

  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      //check for small bugs (if divEl.current exist)
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    const cleanUp = () => {
      document.removeEventListener("click", handler);
    };

    return cleanUp;
  }, []);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen); //flip  (functional update)
  };

  const handleOptionClick = (option) => {
    //close dropdown
    setIsOpen(false);

    //know what user selected
    onChange(option);
  };

  const renderedOptions = options.map((option, index) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  // || return first true
  let content = value?.label || "Select...";

  //return toggle & list

  //&& return first false or last true
  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {content}
        {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full cursor-pointer items-center divide-y divide-gray-300">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;
