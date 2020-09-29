import React, { useState, useEffect } from "react";
import Tile from "./components/Tile";
import "./App.css";

function App() {
  const [size, setSize] = useState(3);
  const [tile, setTile] = useState(new Array(size));

  const initArray = () => {
    const arr = [];
    for (let i = 1; i <= size * size; i++) {
      arr.push(i);
    }
    shuffleArray(arr);
  };

  const shuffleArray = (arr) => {
    const shuffleArr = arr.sort(() => Math.random() - 0.5);
    let counter = 0;
    let dummyTile = new Array(size);
    for (let x = 0; x < size; x++) {
      dummyTile[x] = new Array(size);
      for (let y = 0; y < size; y++) {
        dummyTile[x][y] = shuffleArr[counter];
        counter++;
      }
    }
    setTile([...dummyTile]);
  };

  const handleClick = (e, ind, i) => {
    if (e === size * size) return;
    let dummyTile = tile;
    if (i - 1 !== -1 && dummyTile[ind][i - 1] === size * size) {
      dummyTile[ind][i] = size * size;
      dummyTile[ind][i - 1] = e;
    } else if (i + 1 !== size && dummyTile[ind][i + 1] === size * size) {
      dummyTile[ind][i] = size * size;
      dummyTile[ind][i + 1] = e;
    } else if (ind - 1 !== -1 && dummyTile[ind - 1][i] === size * size) {
      dummyTile[ind][i] = size * size;
      dummyTile[ind - 1][i] = e;
    } else if (ind + 1 !== size && dummyTile[ind + 1][i] === size * size) {
      dummyTile[ind][i] = size * size;
      dummyTile[ind + 1][i] = e;
    } else {
      return;
    }
    setTile([...dummyTile]);
  };

  useEffect(initArray, [size]);

  return (
    <div className="wrapper">
      <div>
        <label># of tiles per row and column: </label>
        <input
          type={"number"}
          min={3}
          max={9}
          value={size}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (!isNaN(value) && value > 2 && value < 10) {
              setSize(value);
            }
          }}
        />
      </div>
      <button onClick={() => initArray()}>Shuffle</button>
      <br />
      <br />
      {tile.map((element, index) => {
        return (
          <div key={index} className="row">
            {element.map((el, ind) => {
              return (
                <Tile
                  key={ind}
                  handleClick={handleClick}
                  index={index}
                  el={el}
                  ind={ind}
                  size={size}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
