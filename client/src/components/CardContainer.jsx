import { useState } from "react";
import Card from "./Card";

function CardContainer({ allServices }) {
  const [productID, setProductID] = useState(null);
  return (
    <div className="flex flex-wrap gap-x-8 pl-20 pr-20">
      {allServices &&
        allServices.map((service) => {
          return (
            <Card
              productID={productID}
              service={service}
              setProductID={setProductID}
            />
          );
        })}
    </div>
  );
}

export default CardContainer;
