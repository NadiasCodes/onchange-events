import React, { useState } from "react";

const Components = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [comment, setComment] = useState("");
  const [menu, setMenu] = useState("");
  const [shipping, setShipping] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleMenuChange = (e) => {
    setMenu(e.target.value);
  };

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };
  return (
    <div>
      <input value={name} onChange={handleNameChange} type="text" />
      <p>Name: {name}</p>
      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity: {quantity}</p>
      <textarea value={comment} onChange={handleCommentChange} placeholder="Leave your delivery instructions" />
      <br />
      <p>Payment Method:</p>
      <select value={menu} onChange={handleMenuChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Paypal">Paypal</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <br />
      <p>Delivery Method:</p>
      <label>
        {" "}
        <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
        Pick Up
      </label>
      <br />
      <label>
        <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
};

export default Components;
