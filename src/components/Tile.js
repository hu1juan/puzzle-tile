import React from "react";

const Tile = (props) => {
  const { el, index, ind, size } = props;
  return (
    <span
      className={el === size * size ? "rmv" : ""}
      onClick={() => props.handleClick(el, index, ind)}
    >
      {el === size * size ? "" : el}
    </span>
  );
};

export default Tile;
