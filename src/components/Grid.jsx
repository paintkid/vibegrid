import React from "react";
import styles from "./Grid.module.css";
import { useStore } from "../store";

const Grid = () => {
  const grid = useStore((state) => state.grid);
  const toggleCell = useStore((state) => state.toggleCell);

  const gridCells = [];
  grid.forEach((rowArr, row) => {
    rowArr.forEach((cell, col) => {
      const isOn = cell === 1;
      gridCells.push(
        <div
          key={`${col}-${row}`}
          className={`${styles.cell} ${isOn ? styles.cellOn : ""}`}
          onClick={() => toggleCell({ row, col })}
        ></div>
      );
    });
  });

  return <div className={styles.gridContainer}>{gridCells}</div>;
};

export default Grid;
