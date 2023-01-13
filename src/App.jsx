import "./App.css";
import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import info from "./data/users.json";
import shuffle from "./assets/icons/shuffle.png";

function randomData(limit) {
  return Math.floor(Math.random() * limit);
}

function App() {
  const colors = [
    "#FDB137",
    "#785964",
    "#6D6875",
    "#B5838D",
    "#E5989B",
    "#7E9680",
    "#C73866",
    "#FFB4A2",
    "#79616F",
    "#EAB595",
  ];

  const [data, setData] = useState(info[randomData(info.length)]);

  useEffect(() => {
    let color = colors[randomData(colors.length)];
    document.body.style = `background-color:${color};color:${color};`;
  }, [data]);

  return (
    <div className="App">
      <UserCard data={data} />
      <button
        onClick={() => setData(info[randomData(info.length)])}
        className="button-click"
      >
        <img className="button" src={shuffle} alt="" />
      </button>
    </div>
  );
}

export default App;
