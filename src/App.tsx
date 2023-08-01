import React from "react";
import Music from "./components/Music";
import { useState, useEffect } from "react";

function App() {
  const [videoSrc, setVideoSrc] = useState("");
  return (
    <div className="flex">
      <main className="w-full flex flex-col gap-4">
        <Music/>
      </main>
    </div>
  )
}

export default App;