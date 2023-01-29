import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Buttons({ index, setIndex }) {
  return (
    <>
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft  className="prev-btn"/>
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight  className="next-btn"/>
      </button>
    </>
  );
}

export default Buttons;