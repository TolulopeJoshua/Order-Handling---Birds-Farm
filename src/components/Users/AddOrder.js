import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddOrder.module.css';

const AddOrder = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('--Choose One--');
  const [enteredQuantity, setEnteredQuantity] = useState('');
  const [error, setError] = useState();

  const addOrderHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredQuantity === 0 || selectedProduct === '--Choose One--') {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name, product and quantity (non-empty values).',
      });
      return;
    }
    if (+enteredQuantity < 1 || +enteredQuantity > 12) {
      setError({
        title: 'Invalid quantity',
        message: 'Please enter a valid quantity (Between 1 and 12).',
      });
      return;
    }
    props.onAddOrder(enteredUsername, selectedProduct, enteredQuantity);
    setEnteredUsername('');
    setSelectedProduct('--Choose One--');
    setEnteredQuantity('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const productChangeHandler = (event) => {
    setSelectedProduct(event.target.value);
  };

  const quantityChangeHandler = (event) => {
    setEnteredQuantity(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addOrderHandler}>
          <label htmlFor="username">Name</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="product">Product</label>
          <select
            id='product'
            value={selectedProduct}
            onChange={productChangeHandler}
          >
            <option value={'--Choose One--'}>--Choose One--</option>
            <option value={'Cockerel'}>Cockerel</option>
            <option value={'Broiler'}>Broiler</option>
            <option value={'Layer'}>Layer</option>
            <option value={'Turkey'}>Turkey</option>
            <option value={'Geese'}>Geese</option>
          </select>
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            type="number"
            // max={12}
            value={enteredQuantity}
            onChange={quantityChangeHandler}
          />
          <Button type="submit">Add Order</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddOrder;
