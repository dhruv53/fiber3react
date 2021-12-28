import React, { useEffect } from "react";
import Muse from "./assets/music.mp3";
import { Howl, Howler } from "howler";

function Aud() {
  useEffect(() => {
    const sound = new Howl({
      src: Muse,
    });
    sound.play();
    Howler.volume(0.5);
  }, []);

  return <div></div>;
}

export default Aud;
