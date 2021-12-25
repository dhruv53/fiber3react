import React, { useEffect } from "react";
import "./style.css";

function Test8Scroll() {
  const call = () => {
    const html = document.documentElement;
    const canvas = document.getElementById("hero-lightpass");
    // const canvasText = document.getElementById("text");

    const context = canvas.getContext("2d");
    // const txtContext = canvasText.getContext("2d");

    const frameCount = 120;

    const currentFrame = (index) =>
      `./assets/sequence2/${index.toString().padStart(4, "0")}.png`;

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image();
    img.src = currentFrame(1);
    canvas.width = 1080;
    canvas.height = 1080;

    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    };

    window.addEventListener("scroll", () => {
      console.log("Scrolled!");
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1));
    });

    preloadImages();
  };

  useEffect(() => {
    call();
  }, []);

  return (
    <>
      <canvas id="hero-lightpass" />
      <canvas id="text" />
    </>
  );
}

export default Test8Scroll;
