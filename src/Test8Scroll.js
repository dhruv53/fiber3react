import React, { useEffect } from "react";
import "./style.css";

function Test8Scroll() {
  const call = () => {
    const html = document.documentElement;
    const canvas = document.getElementById("hero-lightpass");
    const context = canvas.getContext("2d");

    const frameCount = 556;
    const currentFrame = (index) =>
      `./assets/sequence8/${index.toString().padStart(4, "0")}.jpg`;

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image();
    img.src = currentFrame(1);
    canvas.width = 1920;
    canvas.height = 1080;
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index) => {
      img.src = currentFrame(index);
      console.log(img.src);
      context.drawImage(img, 0, 0);
    };

    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY;
      console.log(scrolled);
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );
      requestAnimationFrame(() => updateImage(frameIndex + 1));

      // if (scrolled >= 0 && scrolled <= 250) {
      //   document.getElementById("one").style.color = "rgba(255, 255, 255, 1)";
      // } else {
      //   document.getElementById("one").style.color = "rgba(255, 255, 255, 0)";
      // }

      // if (scrolled >= 2300 && scrolled <= 2600) {
      //   document.getElementById("two").style.color = "rgba(255, 255, 255, 1)";
      // } else {
      //   document.getElementById("two").style.color = "rgba(255, 255, 255, 0)";
      // }

      // if (scrolled >= 3000 && scrolled <= 3300) {
      //   document.getElementById("three").style.color = "rgba(255, 255, 255, 1)";
      // } else {
      //   document.getElementById("three").style.color = "rgba(255, 255, 255, 0)";
      // }

      // if (scrolled >= 3700 && scrolled <= 4000) {
      //   document.getElementById("four").style.color = "rgba(255, 255, 255, 1)";
      // } else {
      //   document.getElementById("four").style.color = "rgba(255, 255, 255, 0)";
      // }

      // if (scrolled >= 3400 && scrolled <= 3700) {
      //   document.getElementById("five").style.color = "rgba(255, 255, 255, 1)";
      // } else {
      //   document.getElementById("five").style.color = "rgba(255, 255, 255, 0)";
      // }
    });

    preloadImages();
  };

  useEffect(() => {
    call();
  }, []);

  return (
    <>
      <canvas id="hero-lightpass" />
      {/* <div className="block">
        <p id="one">bA3E</p>
      </div>
      <div className="block" />
      <div className="block" />
      <div className="block">
        <p className="features" id="two">
          Know when and where your brain works best
        </p>
      </div>
      <div className="block">
        <p className="features" id="three">
          Optimize your time by working on what matters the most
        </p>
      </div>
      <div className="block">
        <p className="features" id="four">
          Discover your focus patterns through our trained algorithms
        </p>
      </div> */}
      {/* <div className="block">
        <p id="five">Get instant feedback on your concentration shift</p>
      </div> */}
    </>
  );
}

export default Test8Scroll;
