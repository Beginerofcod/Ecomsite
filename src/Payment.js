import React from "react";
import { useStateValue } from "./StateProvider";
import "./Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import {Link} from "react-router-dom";
import {db} from './firebase';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleSubmit =(e)=>{
    db
    .collection('users')
    .doc(user?.uid)
    .collection('orders')
    .add({
      basket: basket
    })
  }
  return (
    <div className="payment">
      <div className="payment__container">
      <h1> Checkout (<Link to="/checkout">{basket?.length} Items</Link>)
      </h1> 
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p></p>
            <p></p>
          </div>
          </div>

          <div className="payment__section">
            <div className="payment__title">
              <h3>Review Section</h3>
            </div>
            <div className="payment__items">
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
          <div className="pyament__section">
               <h3>Payment Method</h3>
               <button onClick={handleSubmit}>Save</button>
        </div>   
        <div className="payment__details">

            </div> 

        
      </div>
    </div>
  );
}

export default Payment;
