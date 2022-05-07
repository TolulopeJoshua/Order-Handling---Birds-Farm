import React, { useState } from 'react';

import AddOrder from './components/Users/AddOrder';
import OrdersList from './components/Users/OrdersList';

function App() {
  const [ordersList, setOrdersList] = useState([]);

  const addOrderHandler = (uName, uProduct, uQuantity) => {
    setOrdersList((prevOrdersList) => {
      return [
        ...prevOrdersList,
        { name: uName, product: uProduct, quantity: uQuantity, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddOrder onAddOrder={addOrderHandler} />
      <OrdersList orders={ordersList} />
    </div>
  );
}

export default App;
