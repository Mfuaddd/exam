import React, { useContext } from "react";
import "./index.scss";
import { Helmet } from "react-helmet-async";
import { basketContext } from "../../contexts/BasketProvider";

function BasketPage() {
  const {
    basket,
    addBasket,
    deleteBasket,
    increaseBasket,
    decreaseBasket,
    totalBasket,
  } = useContext(basketContext);
  return (
    <>
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <div className="header-bg"></div>
      <div className="basket">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Text</th>
                <th>Price</th>
                <th>Control</th>
              </tr>
            </thead>
            <tbody>
              {basket &&
                basket.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.text}</td>
                    <td>${item.price}</td>
                    <td>
                      <button onClick={() => decreaseBasket(item._id)}>
                        -
                      </button>
                      <span> {item.count} </span>
                      <button onClick={() => increaseBasket(item._id)}>
                        +
                      </button>
                      <button onClick={() => deleteBasket(item._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              <tr>
                <td></td>
                <td></td>
                <td>Total Price</td>
                <td>${totalBasket()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default BasketPage;
