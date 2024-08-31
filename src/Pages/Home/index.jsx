import { useState, useEffect } from "react";
import { Layaout } from "../../Components/Layout";
import { Card } from "../../Components/Card";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://fake-store-api.mock.beeceptor.com/api/products")
      .then((res) => res.json())
      .then((data) => 
        setItems(data)
        // console.log(data)
      
        );
  }, []);

  return (
    <Layaout>
      {items?.map((item) => (
        <Card key={item.id} data={item} />
      ))}
      <Card />
    </Layaout>
  );
}

export { Home };
