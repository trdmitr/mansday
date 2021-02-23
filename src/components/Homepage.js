import React, { useEffect, useState } from "react";


const Songs = () => {
    const items = [
      {
        id: 1,
        name: "overwatch",
        price: 20,
      },
      {
        id: 2,
        name: "minecraft",
        price: 32,
      },
      {
        id: 3,
        name: "fortnite",
        price: 51,
      },
    ];
    
    const listItems = items.map((el) => (
        <div key={el.id}>
        {`${el.name}: $${el.price}`}
        <input type="submit" value="add" onClick={() => addToCart(el)} />
        </div>
        ));

       return(<div>{listItems}</div>)
  }
  export default Songs;