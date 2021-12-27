import React, { useEffect, useState } from "react";

function Test9() {
  const [i, updateI] = useState(`./assets/sequence6/0001.jpg`);

  const call = () => {
    // window.scrollTo(0, 100);
    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY;
      if (scrolled === 0) {
        updateI(`./assets/sequence6/0001.jpg`);
      } else {
        if (scrolled > 300) {
          updateI(`./assets/sequence6/0300.jpg`);
        } else {
          updateI(
            `./assets/sequence6/${scrolled.toString().padStart(4, "0")}.jpg`
          );
        }
      }
    });
  };

  useEffect(() => {
    call();
  }, []);
  return (
    <div
      style={
        {
          // display: "flex",
          // flexDirection: "row",
          // justifyContent: "center",
        }
      }
    >
      <img
        src={i}
        alt="img"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          zIndex: 999,
          position: "fixed",
        }}
      />
    </div>
  );
}

export default Test9;
