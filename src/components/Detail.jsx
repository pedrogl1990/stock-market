import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Detail() {
  const params = useParams();
  const [stock, setStock] = useState();

  useEffect(() => {
    fetch("https://justivo.com/stockws.php?get&code=BST")
      .then((response) => response.json())
      .then((dataReceived) => setStock(dataReceived));
  }, []);

  return (
    <>
      {stock && (
        <section>
          <h2>{stock.name}</h2>
          <h3>{stock.code}</h3>
          <div>Preço: {stock.price}€</div>
        </section>
      )}
    </>
  );
}
