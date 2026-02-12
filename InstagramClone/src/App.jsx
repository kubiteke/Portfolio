import React, { useState } from "react";
import "./App.css";
import AramaCubugu from "./components/AramaCubugu/AramaCubugu";
import Gonderiler from "./components/Gonderiler/Gonderiler";
import sahteVeri from "./sahteVeri.js";

const App = () => {
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [aramaKriteri, setAramaKriteri] = useState("");

  const aramaHandler = (event) => {
    const { value } = event.target;
    setAramaKriteri(value);

    if (value === "") {
      setGonderiler(sahteVeri);
      return;
    }

    const aramaSonuc = gonderiler.filter((gonderi) => {
      return gonderi.username.toLowerCase().includes(value.toLowerCase());
    });

    setGonderiler(aramaSonuc);
  };

  const gonderiyiBegen = (gonderiID) => {
    const yeniGonderiler = gonderiler.map((gonderi) => {
      if (gonderi.id === gonderiID) {
        return { ...gonderi, likes: gonderi.likes + 1 };
      } else {
        return gonderi;
      }
    });
    setGonderiler(yeniGonderiler);
  };

  return (
    <div className="App">
      <AramaCubugu aramaKriteri={aramaKriteri} aramaHandler={aramaHandler} />
      <Gonderiler gonderiyiBegen={gonderiyiBegen} gonderiler={gonderiler} />
    </div>
  );
};

export default App;
