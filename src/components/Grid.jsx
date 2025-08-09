import React from "react";
import styles from "./Grid.module.css";

const Grid = () => {
  const gridCells = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 16; col++) {
      gridCells.push(<div key={`${col}-${row}`} className={styles.cell}></div>);
    }
  }
  return <div className={styles.gridContainer}>{gridCells}</div>;
};
export default Grid;
