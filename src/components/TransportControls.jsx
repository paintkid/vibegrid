import React from "react";
import styles from "./TransportControls.module.css";

// The Play icon SVG
const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

// The Stop icon SVG
const StopIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 6h12v12H6z" />
  </svg>
);

const TransportControls = ({ isPlaying, onPlayToggle }) => {
  return (
    <div>
      <div className={styles.transportContainer}>
        {/* play/stop button */}
        <button className={styles.playButton} onClick={onPlayToggle}>
          {isPlaying ? <StopIcon /> : <PlayIcon />}
        </button>
        {/* BPM slider */}
        <div className={styles.bpmSliderContainer}>
          <label htmlFor="bpm" className={styles.bpmLabel}>
            120 BPM
          </label>
          <input
            type="range"
            id="bpm"
            min="60"
            max="180"
            className={styles.bpmSlider}
          />
        </div>
      </div>
    </div>
  );
};

export default TransportControls;
