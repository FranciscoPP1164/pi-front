import "./styles.css";
import {useEffect, useState} from "react";

function Input({label, text, width = "100px"}) {
  const [val, setVal] = useState(text);

  useEffect(() => {
    setVal(text);
  }, [text]);

  return (
    <div className="input" style={{width}}>
      <label className="input-label" htmlFor={text}>
        {label}
      </label>
      <input className="input-text" type="text" id={text} value={val} onChange={(e) => setVal(e.target.value)} />
    </div>
  );
}

export default Input;
