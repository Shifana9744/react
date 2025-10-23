import React from 'react'
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';


const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart()

  const handleQuantityChange = (productId, delta) => {
    const item = cart.find((item) => item.id === productId);
    if (item) {
      const newQuantity = item.quantity + delta;
      updateQuantity(productId, newQuantity);
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <section className="py-5" id="cart-section">
      <div className="container px-3" style={{ maxWidth: '1400px' }}>
        <h2 className="text-center mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <div className="text-center">
            <p>Your cart is empty.</p>
            <Link to='/product-section' className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="row g-3">
              {cart.map((item) => (
                <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                  <div className="card h-100 shadow-sm" style={{ borderRadius: '10px' }}>
                    <div className="d-flex align-items-center p-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: '80px',
                          height: '80px',
                          objectFit: 'contain',
                          marginRight: '15px',
                        }}
                      />
                      <div className="flex-grow-1">
                        <h5 className="card-title" style={{ fontSize: '1rem' }}>
                          {item.name}
                        </h5>
                        <p className="card-text text-muted">
                          ${item.price.toFixed(2)} x {item.quantity} = $
                          {(item.price * item.quantity).toFixed(2)}
                        </p>
                        <div className="d-flex align-items-center">
                          <button
                            className="btn btn-outline-secondary btn-sm me-2"
                            onClick={() => handleQuantityChange(item.id, -1)}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            className="btn btn-outline-secondary btn-sm ms-2"
                            onClick={() => handleQuantityChange(item.id, 1)}
                          >
                            +
                          </button>
                          <button
                            className="btn btn-danger btn-sm ms-3"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <h4>Total: ${totalPrice.toFixed(2)}</h4>
              <button className="btn btn-primary mt-3">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Cart
