import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Image from "./components/image";
import Youtube from "./components/youtube";

function App() {
  const [data, setData] = useState(" ");
  const [date, setDate] = useState("2023-05-31");
  const changeHandler = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=hsiQT1NgcilyuSJuvb6XJBqm2k3wMx6RUA6HJYuB&date=" +
          date
      )
      .then((res) => {
        setData(res.data);
      });
  }, [date]);

  return (
    <div className="App">
      <input type="date" value={date} onChange={changeHandler} />
      <h1>{data.title}</h1>
      {data.media_type == "image" ? (
        <Image dataurl={data.url} />
      ) : (
        <Youtube data={data.url} />
      )}
      <p className="explanation">{data.explanation}</p>
      <p className="date">{data.date}</p>
    </div>
  );
}

export default App;
