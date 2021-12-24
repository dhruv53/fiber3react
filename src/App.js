import React from "react";
// import Test1 from "./Test1";
// import Test2 from "./Test2";
// import Test3 from "./Test3";
// import Brain from "./Test4";
// import Test5 from "./Test5";
import Test6 from "./Test6";
import Bon from "./assets/bon.mp3";
import Test7 from "./Test7";
import ReactAudioPlayer from "react-audio-player";
function App() {
  return (
    <>
      <ReactAudioPlayer src={Bon} autoPlay={true} controls={false} />
      {/* <Test1 />
      <Test2 /> */}
      {/* <Brain /> */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "50%" }}>
          <Test7 />
        </div>
        <div style={{ width: "50%" }}>
          <Test6 />
        </div>
      </div>
      {/* <Test5 />
      <Test3 /> */}
    </>
  );
}

export default App;
