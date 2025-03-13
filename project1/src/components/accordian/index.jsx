// single Accordion component
import React, { useState } from "react";
import data from "./data";
import "./style.css";
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultipale] = useState([]);
  function handleSingleSelection(getCurrentId) {
    // console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let cpymultiple = [...multiple];
    const findIndexOfCurrentId = cpymultiple.indexOf(getCurrentId);
    // console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) {
      cpymultiple.push(getCurrentId);
    } else {
      cpymultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultipale(cpymultiple);
    // console.log(cpymultiple);
  }
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multiple Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataIteam) => (
            <div className="iteam">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataIteam.id)
                    : () => handleSingleSelection(dataIteam.id)
                }
                className="title"
              >
                <h3>{dataIteam.question}</h3>
                <span>+</span>
              </div>
              {selected === dataIteam.id ||
              multiple.indexOf(dataIteam.id) !== -1 ? (
                <div className="content">{dataIteam.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
