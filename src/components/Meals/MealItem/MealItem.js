import {useContext} from 'react';

import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.mealPrice.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.mealId,
      title: props.mealTitle,
      price: props.mealPrice,
      amount: amount
    });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.mealTitle}</h3>
        <div className={classes.description}>{props.mealDescription}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.mealId} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
