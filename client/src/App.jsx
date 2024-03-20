import { useEffect, useState } from "react";


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        console.log('Received data:', jsonData);
        setData(jsonData.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log('Data:', data);

  return (
    <div>
        <h1 className="text-3xl font-bold underline">
          Hello Vite + React!
        </h1>
        <p>{data}</p>
    </div>
  )
}

export default App
