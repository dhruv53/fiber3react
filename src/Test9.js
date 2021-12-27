import React, { useEffect, useState } from "react";

function Test9() {
  const [i, updateI] = useState(`./assets/sequence7/0001-min.jpg`);

  useEffect(() => {
    const call = () => {
      // window.scrollTo(0, 100);

      window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        if (scrolled === 0) {
          updateI(`./assets/sequence7/0001-min.jpg`);
        } else {
          if (scrolled > 300) {
            updateI(`./assets/sequence7/0300-min.jpg`);
          } else {
            updateI(
              `./assets/sequence7/${scrolled
                .toString()
                .padStart(4, "0")}-min.jpg`
            );
          }
        }
      });
    };
    call();
  }, []);
  return (
    <>
      <div>
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
    </>
  );
}

export default Test9;
