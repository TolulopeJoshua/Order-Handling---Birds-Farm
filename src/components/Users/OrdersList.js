import React from 'react';

import Card from '../UI/Card';
import classes from './OrdersList.module.css';

const OrdersList = (props) => {
  return (
    <Card className={classes.orders}>
      <ul>
        {props.orders.map((order) => (
          <li key={order.id}>
            {order.name} - ({order.quantity} {order.product})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default OrdersList;
