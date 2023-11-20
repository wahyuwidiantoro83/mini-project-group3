const RadioButton = (props) => {
  return (
    <div className="flex items-center">
      <input
        key={props.idx}
        id="default-radio"
        type="radio"
        value={props.value}
        name={props.name}
        defaultChecked={props.selected ? true : false}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
        onClick={props.click}
      />
      <label htmlFor="default-radio" className="ml-2 text-base font-medium text-gray-500">
        {props.title}
      </label>
    </div>
  );
};

export default RadioButton;
