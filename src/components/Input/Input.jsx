import PropTypes from "prop-types";
import { useCallback,useMemo } from "react";


const Input = ({onChange,handleChange,className,value ,...props}) =>{

  const handleOnChange = useCallback(
    (e) => {
      const {value: v } = e.target;
      onChange(v,e)
    },
    [onChange],
  )
  
  const changedValue = useMemo(() =>
  // INTRO_VALUE +
  value, [value]);

    return (
        <>
       
        <label
        htmlFor="wallet"
        className="block text-sm font-medium text-gray-700"
      >
        Ticker
      </label>
      <div className="mt-1 relative rounded-md shadow-md">
        <input
          {...props}
          value={changedValue}
          onChange={handleOnChange}
          className="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
          
        />
      </div>
      </>
    )
}


Input.propTypes={
    value:PropTypes.string,
    onChange: PropTypes.func,
    type:PropTypes.string,
    name:PropTypes.string,
    placeholder:PropTypes.string,

};

Input.defaultProps = {
    type:'text',
    onChange: () => {},
    className: '',
};

export default Input;