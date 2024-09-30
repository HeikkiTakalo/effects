import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [device, setDevice] = useState(null);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios.get('https://api.restful-api.dev/objects/' + id)
      .then(resp => setDevice(resp.data))
  }, [id]);

  useEffect(() => {
    setInterval(() => {
      setId(prev => prev + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>{device?.name}</h2>
    </div>
  )
}

export default App