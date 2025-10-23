import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from './WishlistContext';
import { useCart } from '../Cart/CartContext';

const WishList = () => {
  const { wishlist, removeFromWishlist } =useWishlist()
  const { addToCart } = useCart()

  const handleAddToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
    alert(`Moved ${product.name} to cart`);
  };

  return (
    <section className="py-5" id="wishlist-section">
      <div className="container px-3" style={{ maxWidth: '1400px'}}>
        <h2 className="text-center mb-4">Your Wishlist</h2>
        {wishlist.length === 0 ? (
          <div className="text-center">
            <p>Your wishlist is empty.</p>
            <Link to="/product-section" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="row g-3">
            {wishlist.map((item) => (
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
                        ${item.price.toFixed(2)}
                      </p>
                      <button
                        className="btn btn-danger btn-sm me-2"
                        style={{
                            color: '#fff',
                            border: 'none',
                            borderRadius: '6px',
                          }}
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        Remove
                      </button>
                      <button
                          className="btn btn-sm"
                          style={{
                            background: '#ff9500',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '6px',
                          }}
                          onClick={() => handleAddToCart(item)}
                        >
                          Add to Cart
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WishList;
