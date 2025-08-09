import React, { useEffect, useRef, useState } from "react";
import * as Tone from "tone";
import "./App.css";
import TransportControls from "./components/TransportControls";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const synthRef = useRef(null);
  const loopRef = useRef(null);

  useEffect(() => {
    synthRef.current = new Tone.MembraneSynth().toDestination();
    loopRef.current = new Tone.Loop((time) => {
      synthRef.current.triggerAttackRelease("C1", "8n", time);
    }, "4n").start(0);

    // cleanup when component unmounts
    return () => {
      if (loopRef.current) {
        loopRef.current.stop();
        loopRef.current.dispose();
      }
      if (synthRef.current) {
        synthRef.current.dispose();
      }
    };
  }, []); // empty deps -> run once when component mounts

  const handlePlayToggle = async () => {
    if (Tone.context.state !== "running") await Tone.start();
    if (isPlaying) {
      Tone.Transport.stop();
      setIsPlaying(false);
    } else {
      Tone.Transport.start();
      setIsPlaying(true);
    }
  };

  return (
    <div className="container">
      <TransportControls
        isPlaying={isPlaying}
        onPlayToggle={handlePlayToggle}
      />
    </div>
  );
}
