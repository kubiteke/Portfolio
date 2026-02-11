import React, { useState } from "react";

const KareIdListesi = ["sqA", "sqB", "sqC", "sqD"];

export default function Kareler() {
  const [squares, setSquares] = useState(KareIdListesi);
  const classAdiAl = (id) => {
    if (id === squares) {
      return "active";
    } else {
      return "";
    }
  };

  const aktifEt = (id) => {
    if (id === squares) {
      setSquares(undefined);
    } else {
      setSquares(id);
    }
  };

  return (
    <div className="widget-squares container">
      <h2>Kareler</h2>
      <div className="squares">
        {KareIdListesi.map((id) => (
          <div
            id={id}
            key={id}
            data-testid={id}
            className={`square ${classAdiAl(id)}`}
            onClick={() => aktifEt(id)}
          ></div>
        ))}
      </div>
    </div>
  );
}
