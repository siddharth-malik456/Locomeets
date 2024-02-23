import { useState } from "react";
import Card from "./Card";

function CardContainer() {
  const [productID, setProductID] = useState(null);
  return (
    <div className="flex flex-wrap gap-x-8 pl-20 pr-20">
      {/* <ul>
        {menu.map((menuItem) => (
          <MenuItem pizza={menuItem} key={menuItem.id} />
        ))}
      </ul> */}

      <Card productID={productID} setProductID={setProductID} />
      <Card productID={productID} setProductID={setProductID} />
      <Card productID={productID} setProductID={setProductID} />
      <Card productID={productID} setProductID={setProductID} />
    </div>
  );
}

export default CardContainer;
