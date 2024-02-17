import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Framework } from "./framework";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Framework />
    </div>
  );
}

export default App;
