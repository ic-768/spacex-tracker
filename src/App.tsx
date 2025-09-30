import { useEffect, useState } from "react";

import { Button } from "./components/ui/button";

function App() {
  const x = useState();

  useEffect(() => {
    console.log(x);
  }, []);

  return (
    <p>
      <Button>Click on the Vite and React logos to learn more</Button>
    </p>
  );
}

export default App;
