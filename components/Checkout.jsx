import { useState } from "react";

function Checkout() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    payment: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Order Placed Successfully!");
  };

  return (
    <div>
      <h2>Checkout</h2>

      <input name="name" placeholder="Name" onChange={handleChange} /><br />
      <input name="email" placeholder="Email" onChange={handleChange} /><br />
      <input name="address" placeholder="Address" onChange={handleChange} /><br />

      <select name="payment" onChange={handleChange}>
        <option value="">Select Payment</option>
        <option>Card</option>
        <option>UPI</option>
      </select><br />

      <button onClick={handleSubmit}>Place Order</button>
    </div>
  );
}

export default Checkout;