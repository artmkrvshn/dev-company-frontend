const InputField = ({ onChange, value, placeholder }) => (
  <input
    className="bg-gray-50 border border-gray-300 rounded w-full px-2.5 py-1"
    onChange={onChange}
    value={value}
    placeholder={placeholder}
  />
);

export default InputField;
