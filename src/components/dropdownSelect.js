import Select from "react-dropdown-select";

const Dropdown = ({ options, labelKey }) => {
  return (
    <Select
      options={options}
      dropdownHandleRenderer={({ state }) => (
        // if dropdown is open show "–" else show "+"
        <span>{state.dropdown ? "–" : "+"}</span>
      )}
      labelField={labelKey}
      valueField={labelKey}
    />
  );
};

export default Dropdown;
