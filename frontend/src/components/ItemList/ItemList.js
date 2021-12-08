import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import ItemCardKurs from "../ItemCardKurs/ItemCardKurs";
import { Virtuoso } from "react-virtuoso";
import "./ItemList.css";
import CustomButton from "../CustomButton/CustomButton";

function ItemList({ value, itemList }) {


  

  return (
    <Virtuoso
      className="item-list"
      style={{ height: 600 }}
      data={itemList}
      totalCount={itemList.length}
      itemContent={(index, item) => 

        <ItemCard item={item} />
        
      }
      components={{
        Footer: () => {
          return (

            <div></div>

          );
        },
      }}
    />
  );
}

export default ItemList;
