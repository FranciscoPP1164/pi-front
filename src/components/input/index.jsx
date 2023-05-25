import "./styles.css";
import {useEffect, useState} from "react";

function Input({label, text, width = "100%", editable = false, font = 1}) {
  const [val, setVal] = useState(text);

  useEffect(() => {
    setVal(text);
  }, [text]);

  const handleInputChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <div className="input" style={{width}}>
      <label className="input-label" htmlFor={text}>
        {label}
      </label>
      <input className={`input-text ${editable ? "editable" : null}`} style={{fontSize: `${font}rem`}} type="text" id={text} disabled={!editable} value={val} onChange={handleInputChange} />
    </div>
  );
}

export default Input;
